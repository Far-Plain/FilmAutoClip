(function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const els = {
    intro: $("#intro"),
    workspace: $("#workspace"),
    dropZone: $("#dropZone"),
    fileInput: $("#fileInput"),
    changeFileButton: $("#changeFileButton"),
    jobList: $("#jobList"),
    jobQueueSummary: $("#jobQueueSummary"),
    sourceName: $("#sourceName"),
    imageMeta: $("#imageMeta"),
    sourceRotateLeft: $("#sourceRotateLeft"),
    sourceRotateRight: $("#sourceRotateRight"),
    sourceRotationLabel: $("#sourceRotationLabel"),
    canvasShell: $("#canvasShell"),
    sourceCanvas: $("#sourceCanvas"),
    canvasMessage: $("#canvasMessage"),
    sourceMode: $("#sourceMode"),
    filmBaseControl: $("#filmBaseControl"),
    filmBaseSwatch: $("#filmBaseSwatch"),
    filmBaseStatus: $("#filmBaseStatus"),
    filmBaseSampleButton: $("#filmBaseSampleButton"),
    filmBaseClearButton: $("#filmBaseClearButton"),
    thresholdLabel: $("#thresholdLabel"),
    thresholdRangeLabels: $("#thresholdRangeLabels"),
    orientation: $("#orientation"),
    blackThreshold: $("#blackThreshold"),
    blackThresholdValue: $("#blackThresholdValue"),
    borderCoverage: $("#borderCoverage"),
    borderCoverageValue: $("#borderCoverageValue"),
    edgeInset: $("#edgeInset"),
    edgeInsetValue: $("#edgeInsetValue"),
    detectButton: $("#detectButton"),
    resultCount: $("#resultCount"),
    detectedStatus: $("#detectedStatus"),
    frameEditor: $("#frameEditor"),
    selectedFrameNumber: $("#selectedFrameNumber"),
    removeFrameButton: $("#removeFrameButton"),
    cropX: $("#cropX"),
    cropY: $("#cropY"),
    cropW: $("#cropW"),
    cropH: $("#cropH"),
    framesGrid: $("#framesGrid"),
    noFrames: $("#noFrames"),
    selectionActions: $(".selection-actions"),
    selectAllButton: $("#selectAllButton"),
    clearSelectionButton: $("#clearSelectionButton"),
    selectedCount: $("#selectedCount"),
    formatSummary: $("#formatSummary"),
    qualityControl: $("#qualityControl"),
    exportQuality: $("#exportQuality"),
    exportButton: $("#exportButton"),
    exportButtonLabel: $("#exportButtonLabel"),
    exportButtonHint: $("#exportButtonHint"),
    toast: $("#toast")
  };

  const state = {
    jobs: [],
    activeJobId: null,
    jobSequence: 0,
    file: null,
    image: null,
    objectUrl: null,
    frames: [],
    selectedIndex: -1,
    analysis: null,
    scaleX: 1,
    scaleY: 1,
    format: null,
    tiffPageCount: 0,
    tiffSource: null,
    exportDirectoryHandle: null,
    sourceViewRotation: 0,
    baseSamplingActive: false,
    busy: false
  };

  const formatMap = {
    "image/jpeg": { ext: "jpg", label: "JPG", mime: "image/jpeg" },
    "image/png": { ext: "png", label: "PNG", mime: "image/png" },
    "image/webp": { ext: "webp", label: "WEBP", mime: "image/webp" },
    "image/bmp": { ext: "bmp", label: "BMP", mime: "image/bmp", isBmp: true },
    "image/tiff": { ext: "tif", label: "TIFF", mime: "image/tiff", isTiff: true }
  };

  const settingsDatabaseName = "film-frame-settings";
  const settingsStoreName = "file-handles";
  const exportDirectoryKey = "last-export-directory";

  function bindEvents() {
    els.fileInput.addEventListener("change", (event) => {
      const files = Array.from(event.target.files || []);
      if (files.length) void addFiles(files);
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      els.dropZone.addEventListener(eventName, (event) => {
        event.preventDefault();
        els.dropZone.classList.add("is-dragging");
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      els.dropZone.addEventListener(eventName, (event) => {
        event.preventDefault();
        els.dropZone.classList.remove("is-dragging");
      });
    });

    els.dropZone.addEventListener("drop", (event) => {
      const files = Array.from(event.dataTransfer.files || []);
      if (files.length) void addFiles(files);
    });

    els.changeFileButton.addEventListener("click", () => {
      els.fileInput.value = "";
      els.fileInput.click();
    });
    els.detectButton.addEventListener("click", detectFrames);
    els.sourceMode.addEventListener("change", handleSourceModeChange);
    els.filmBaseSampleButton.addEventListener("click", toggleFilmBaseSampling);
    els.filmBaseClearButton.addEventListener("click", clearFilmBaseSamples);
    els.sourceRotateLeft.addEventListener("click", () => rotateSourceView(-90));
    els.sourceRotateRight.addEventListener("click", () => rotateSourceView(90));
    els.sourceCanvas.addEventListener("click", selectFrameFromCanvas);
    els.selectAllButton.addEventListener("click", () => setAllFrames(true));
    els.clearSelectionButton.addEventListener("click", () => setAllFrames(false));
    els.removeFrameButton.addEventListener("click", removeSelectedFrame);
    els.exportButton.addEventListener("click", exportSelected);

    [els.blackThreshold, els.borderCoverage, els.edgeInset].forEach((input) => {
      input.addEventListener("input", updateRangeLabels);
    });

    [els.cropX, els.cropY, els.cropW, els.cropH].forEach((input) => {
      input.addEventListener("change", updateSelectedCrop);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && state.baseSamplingActive) {
        event.preventDefault();
        stopFilmBaseSampling();
        return;
      }
      if (event.key.toLowerCase() === "r" && state.image && !isFormControl(event.target)) {
        event.preventDefault();
        detectFrames();
      }
    });

    window.addEventListener("resize", drawSourceOverlay);
    updateRangeLabels();
    if (supportsDirectoryExport()) void restoreExportDirectoryHandle();
  }

  function isFormControl(target) {
    return ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName);
  }

  function createJob(file, format) {
    return {
      id: `film-${Date.now()}-${state.jobSequence += 1}`,
      file,
      format,
      frames: [],
      selectedIndex: -1,
      sourceViewRotation: 0,
      options: {
        threshold: 20,
        coverage: Number(els.borderCoverage.value) / 100,
        inset: Number(els.edgeInset.value),
        orientation: els.orientation.value,
        sourceMode: "auto"
      },
      baseSamples: [],
      filmBase: null,
      detectionMode: null,
      status: "pending",
      error: null,
      meta: null,
      detection: null
    };
  }

  function getActiveJob() {
    return state.jobs.find((job) => job.id === state.activeJobId) || null;
  }

  function readDetectionOptions() {
    return {
      threshold: Number(els.blackThreshold.value),
      coverage: Number(els.borderCoverage.value) / 100,
      inset: Number(els.edgeInset.value),
      orientation: els.orientation.value,
      sourceMode: els.sourceMode.value
    };
  }

  function applyJobOptions(job) {
    els.blackThreshold.value = String(job.options.threshold);
    els.borderCoverage.value = String(Math.round(job.options.coverage * 100));
    els.edgeInset.value = String(job.options.inset);
    els.orientation.value = job.options.orientation;
    els.sourceMode.value = job.options.sourceMode || "auto";
    updateRangeLabels();
    updateFilmBaseUi(job);
  }

  function syncActiveJobState() {
    const job = getActiveJob();
    if (!job || !state.image) return;
    job.frames = state.frames;
    job.selectedIndex = state.selectedIndex;
    job.sourceViewRotation = state.sourceViewRotation;
    job.options = readDetectionOptions();
  }

  function releaseRuntime() {
    if (state.objectUrl) URL.revokeObjectURL(state.objectUrl);
    state.file = null;
    state.image = null;
    state.objectUrl = null;
    state.frames = [];
    state.selectedIndex = -1;
    state.analysis = null;
    state.scaleX = 1;
    state.scaleY = 1;
    state.format = null;
    state.tiffPageCount = 0;
    state.tiffSource = null;
    state.sourceViewRotation = 0;
    state.baseSamplingActive = false;
    els.canvasShell?.classList.remove("is-base-sampling");
    if (els.framesGrid) els.framesGrid.replaceChildren();
    if (els.sourceCanvas) {
      els.sourceCanvas.width = 1;
      els.sourceCanvas.height = 1;
    }
  }

  async function addFiles(files) {
    if (state.busy) return;
    const accepted = [];
    let rejected = 0;
    files.forEach((file) => {
      const format = getFileFormat(file);
      if (!format) {
        rejected += 1;
        return;
      }
      const job = createJob(file, format);
      state.jobs.push(job);
      accepted.push(job);
    });

    if (!accepted.length) {
      showToast("请选择 JPG、PNG、WEBP、BMP、TIF 或 TIFF 图片");
      return;
    }

    els.intro.hidden = true;
    els.workspace.hidden = false;
    renderJobQueue();
    setBusy(true, `正在处理 1/${accepted.length} 张底片…`);
    await nextPaint();

    for (let index = 0; index < accepted.length; index += 1) {
      const job = accepted[index];
      job.status = "processing";
      renderJobQueue();
      els.canvasMessage.textContent = `正在处理 ${index + 1}/${accepted.length} · ${job.file.name}`;
      try {
        await loadJobRuntime(job, { render: true });
        await nextPaint();
        performActiveDetection();
      } catch (error) {
        console.error(error);
        job.status = "error";
        job.error = "图片读取或识别失败";
        job.frames = [];
      }
      renderJobQueue();
      await nextPaint();
    }

    const firstJob = accepted[0];
    if (getActiveJob()?.id !== firstJob.id) {
      try {
        await loadJobRuntime(firstJob, { render: true });
      } catch (error) {
        console.error(error);
      }
    } else {
      renderAll();
      renderJobDetectionStatus(firstJob);
    }
    setBusy(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const suffix = rejected ? `，另有 ${rejected} 个文件格式不支持` : "";
    showToast(`已加入 ${accepted.length} 张底片${suffix}`);
  }

  async function loadJobRuntime(job, { render = true } = {}) {
    syncActiveJobState();
    releaseRuntime();
    state.activeJobId = job.id;
    state.file = job.file;
    state.format = job.format;
    applyJobOptions(job);

    if (job.format.isTiff) {
      state.image = await decodeTiffFile(job.file);
    } else {
      state.objectUrl = URL.createObjectURL(job.file);
      state.image = await decodeImage(state.objectUrl);
    }

    state.frames = job.frames;
    state.selectedIndex = job.selectedIndex;
    state.sourceViewRotation = job.sourceViewRotation;
    job.meta = {
      width: state.image.naturalWidth,
      height: state.image.naturalHeight,
      pageCount: state.tiffPageCount,
      bitDepth: state.tiffSource?.bitsPerSample?.[0] || null
    };
    els.sourceName.textContent = job.file.name;
    els.sourceRotationLabel.value = `${state.sourceViewRotation}°`;
    updateSourceMeta(job);
    prepareAnalysisCanvas();
    if (render) {
      renderAll();
      renderJobDetectionStatus(job);
    }
    renderJobQueue();
  }

  async function activateJob(jobId) {
    if (state.busy || jobId === state.activeJobId) return;
    const job = state.jobs.find((candidate) => candidate.id === jobId);
    if (!job) return;
    setBusy(true, `正在打开 ${job.file.name}…`);
    try {
      await loadJobRuntime(job, { render: true });
    } catch (error) {
      console.error(error);
      job.status = "error";
      job.error = "图片读取失败";
      showToast(`${job.file.name} 读取失败`);
    } finally {
      setBusy(false);
      renderJobQueue();
    }
  }

  function updateSourceMeta(job) {
    const pageNote = job.meta.pageCount > 1 ? ` · ${job.meta.pageCount} 页（处理首帧）` : "";
    const bitDepthNote = job.format.isTiff && job.meta.bitDepth ? ` · ${job.meta.bitDepth}-bit` : "";
    els.imageMeta.innerHTML = `${job.meta.width} × ${job.meta.height} PX<br>${job.format.label}${bitDepthNote}${pageNote} · ${formatBytes(job.file.size)}`;
    const formats = new Set(state.jobs.map((item) => item.format.label));
    els.formatSummary.textContent = state.jobs.length > 1
      ? `${state.jobs.length} 张底片 · 保持各自原格式与裁切精度`
      : (job.format.isTiff && job.meta.bitDepth
        ? `保持 TIFF ${job.meta.bitDepth}-bit 样本 · 应用预览旋转`
        : `保持 ${job.format.label} 格式 · 应用预览旋转`);
    els.qualityControl.hidden = !state.jobs.some((item) => ["image/jpeg", "image/webp"].includes(item.format.mime));
    els.formatSummary.title = formats.size > 1 ? `包含 ${Array.from(formats).join(" / ")}` : "";
  }

  function decodeImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = url;
    });
  }

  async function decodeTiffFile(file) {
    if (typeof UTIF === "undefined") throw new Error("TIFF codec is unavailable");
    const buffer = await file.arrayBuffer();
    const directory = parseClassicTiffDirectory(buffer);
    const ifds = UTIF.decode(buffer);
    if (!ifds.length) throw new Error("TIFF contains no image directory");
    state.tiffPageCount = ifds.length;
    UTIF.decodeImage(buffer, ifds[0], ifds);
    const width = ifds[0].width;
    const height = ifds[0].height;
    if (!width || !height) throw new Error("TIFF dimensions are invalid");
    state.tiffSource = createTiffSource(ifds[0], directory);
    const rgba = UTIF.toRGBA8(ifds[0]);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const pixels = new Uint8ClampedArray(rgba.buffer, rgba.byteOffset, rgba.byteLength);
    canvas.getContext("2d").putImageData(new ImageData(pixels, width, height), 0, 0);
    Object.defineProperties(canvas, {
      naturalWidth: { value: width },
      naturalHeight: { value: height }
    });
    return canvas;
  }

  function getFileFormat(file) {
    const extension = (file.name.split(".").pop() || "").toLowerCase();
    const mime = (file.type || "").toLowerCase();
    if (["tif", "tiff"].includes(extension) || ["image/tiff", "image/x-tiff"].includes(mime)) {
      return { ...formatMap["image/tiff"], ext: ["tif", "tiff"].includes(extension) ? extension : "tif" };
    }
    if (["jpg", "jpeg", "jpe"].includes(extension) || mime === "image/jpeg") {
      return { ...formatMap["image/jpeg"], ext: ["jpg", "jpeg", "jpe"].includes(extension) ? extension : "jpg" };
    }
    if (extension === "png" || mime === "image/png") return { ...formatMap["image/png"] };
    if (extension === "webp" || mime === "image/webp") return { ...formatMap["image/webp"] };
    if (extension === "bmp" || ["image/bmp", "image/x-bmp", "image/x-ms-bmp"].includes(mime)) {
      return { ...formatMap["image/bmp"] };
    }
    return null;
  }

  function prepareAnalysisCanvas() {
    const image = state.image;
    const maxSide = 1500;
    const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
    const width = Math.max(1, Math.round(image.naturalWidth * scale));
    const height = Math.max(1, Math.round(image.naturalHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(image, 0, 0, width, height);
    state.analysis = {
      canvas,
      ctx,
      imageData: ctx.getImageData(0, 0, width, height),
      width,
      height
    };
    state.scaleX = image.naturalWidth / width;
    state.scaleY = image.naturalHeight / height;
    els.sourceCanvas.width = width;
    els.sourceCanvas.height = height;
    drawSourceOverlay();
  }

  async function detectFrames() {
    if (!state.analysis || state.busy) return;
    if (state.baseSamplingActive) stopFilmBaseSampling();
    setBusy(true, "正在分析边界与片基颜色…");
    await nextPaint();

    try {
      performActiveDetection();
    } catch (error) {
      console.error(error);
      state.frames = [];
      state.selectedIndex = -1;
      const job = getActiveJob();
      if (job) {
        job.status = "error";
        job.error = "检测未完成";
        job.detection = { type: "warning", title: "检测未完成", detail: "请尝试降低图片尺寸后重试" };
      }
      renderAll();
      setDetectionStatus("warning", "检测未完成", "请尝试降低图片尺寸后重试");
    } finally {
      setBusy(false);
      renderJobQueue();
    }
  }

  function performActiveDetection() {
    const job = getActiveJob();
    if (!job || !state.analysis) return null;
    const options = readDetectionOptions();
    const manualFilmBase = getManualFilmBase(state.analysis, job.baseSamples);
    const result = runDetection(state.analysis, manualFilmBase ? { ...options, filmBase: manualFilmBase } : options);
    state.frames = result.frames.map((frame, index) => {
      const rect = toOriginalRect(frame);
      return {
        ...rect,
        id: `${job.id}-${Date.now()}-${index}`,
        checked: true,
        previewRotation: defaultPreviewRotation(rect)
      };
    });
    state.selectedIndex = state.frames.length ? 0 : -1;
    job.options = options;
    job.frames = state.frames;
    job.selectedIndex = state.selectedIndex;
    job.status = "ready";
    job.error = null;
    job.filmBase = result.filmBase
      ? {
        ...result.filmBase,
        confidence: result.filmBaseConfidence,
        source: result.filmBaseSource
      }
      : null;
    job.detectionMode = result.detectionMode;

    if (state.frames.length) {
      const perTrack = result.stripFrameCounts.length > 1
        ? ` · 每轨 ${result.stripFrameCounts.join(" / ")} 格`
        : "";
      const recovered = result.recoveredStripCount
        ? ` · 恢复 ${result.recoveredStripCount} 条缺轨片条`
        : "";
      const edgeFrames = result.edgeFrameCount
        ? ` · 补全 ${result.edgeFrameCount} 个边缘画格`
        : "";
      const modeNote = result.detectionMode === "negative"
        ? ` · 负像片基${result.filmBaseSource === "manual" ? "手动校正" : "自动采样"}`
        : " · 正像黑边";
      job.detection = {
        type: "success",
        title: `找到 ${state.frames.length} 个完整画格`,
        detail: `${result.stripCount} 条片轨${perTrack}${recovered}${edgeFrames} · ${result.orientation === "vertical" ? "纵向排列" : "横向排列"}${modeNote}`
      };
    } else {
      job.detection = { type: "warning", title: "未识别到完整画格", detail: "请调整边界阈值，或使用片基吸管校正" };
    }
    renderAll();
    updateFilmBaseUi(job);
    renderJobDetectionStatus(job);
    return result;
  }

  function renderJobDetectionStatus(job) {
    if (job?.detection) {
      setDetectionStatus(job.detection.type, job.detection.title, job.detection.detail);
    } else if (job?.status === "error") {
      setDetectionStatus("warning", "底片读取失败", job.error || "请重新添加此文件");
    } else {
      setDetectionStatus("warning", "等待识别", "正在准备底片图像");
    }
  }

  function runDetection(analysis, options) {
    const requestedMode = options.sourceMode || "auto";
    let positiveResult = null;
    if (requestedMode !== "negative") {
      const blackMask = createBlackMask(analysis.imageData.data, analysis.width, analysis.height, options.threshold);
      const foregroundMask = createForegroundMask(analysis.imageData.data, analysis.width, analysis.height);
      positiveResult = runDetectionWithMasks(analysis, options, blackMask, foregroundMask);
      Object.assign(positiveResult, {
        detectionMode: "positive",
        filmBase: null,
        filmBaseConfidence: null,
        filmBaseSource: null
      });
      if (requestedMode === "positive") return positiveResult;
    }

    const candidates = options.filmBase
      ? [{ ...options.filmBase, source: "manual", weight: Number.MAX_SAFE_INTEGER }]
      : findFilmBaseCandidates(analysis.imageData.data, analysis.width, analysis.height);
    const adaptiveForeground = createAdaptiveForegroundMask(
      analysis.imageData.data,
      analysis.width,
      analysis.height
    );
    const negativeResults = candidates.map((candidate) => {
      const baseMask = createFilmBaseMask(
        analysis.imageData.data,
        analysis.width,
        analysis.height,
        candidate,
        options.threshold
      );
      const result = runDetectionWithMasks(analysis, options, baseMask, adaptiveForeground);
      return { candidate, result, score: scoreResult(result, analysis) };
    }).sort((a, b) => b.score - a.score);
    const bestNegative = negativeResults[0];
    if (!bestNegative) return positiveResult;
    const nextScore = negativeResults[1]?.score || 0;
    const confidence = bestNegative.candidate.source === "manual"
      ? 100
      : Math.round(clamp(48 + (bestNegative.score - nextScore) * 3, 48, 96));
    Object.assign(bestNegative.result, {
      detectionMode: "negative",
      filmBase: {
        r: Math.round(bestNegative.candidate.r),
        g: Math.round(bestNegative.candidate.g),
        b: Math.round(bestNegative.candidate.b)
      },
      filmBaseConfidence: confidence,
      filmBaseSource: bestNegative.candidate.source || "auto"
    });

    if (requestedMode === "negative") return bestNegative.result;
    const positiveScore = positiveResult ? scoreResult(positiveResult, analysis) : 0;
    return bestNegative.score > positiveScore * 1.08 + 2 ? bestNegative.result : positiveResult;
  }

  function runDetectionWithMasks(analysis, options, mask, foregroundMask) {
    const shared = { ...analysis, mask, foregroundMask, options };

    if (options.orientation === "vertical") return detectByOrientation(shared, "vertical");
    if (options.orientation === "horizontal") return detectByOrientation(shared, "horizontal");

    const vertical = detectByOrientation(shared, "vertical");
    const horizontal = detectByOrientation(shared, "horizontal");
    return scoreResult(vertical, analysis) >= scoreResult(horizontal, analysis) ? vertical : horizontal;
  }

  function findFilmBaseCandidates(data, width, height, maximumCandidates = 10) {
    const bins = new Map();
    const step = Math.max(1, Math.ceil(Math.sqrt((width * height) / 70000)));
    const neighbor = Math.max(1, step * 2);

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const offset = (y * width + x) * 4;
        if (data[offset + 3] < 240) continue;
        const nextX = Math.min(width - 1, x + neighbor);
        const nextY = Math.min(height - 1, y + neighbor);
        const rightOffset = (y * width + nextX) * 4;
        const downOffset = (nextY * width + x) * 4;
        const variation = (
          Math.abs(data[offset] - data[rightOffset])
          + Math.abs(data[offset + 1] - data[rightOffset + 1])
          + Math.abs(data[offset + 2] - data[rightOffset + 2])
          + Math.abs(data[offset] - data[downOffset])
          + Math.abs(data[offset + 1] - data[downOffset + 1])
          + Math.abs(data[offset + 2] - data[downOffset + 2])
        ) / 6;
        if (variation > 24) continue;
        const key = `${data[offset] >> 5}-${data[offset + 1] >> 5}-${data[offset + 2] >> 5}`;
        const bin = bins.get(key) || { count: 0, r: 0, g: 0, b: 0 };
        bin.count += 1;
        bin.r += data[offset];
        bin.g += data[offset + 1];
        bin.b += data[offset + 2];
        bins.set(key, bin);
      }
    }

    const all = Array.from(bins.values(), (bin) => ({
      r: bin.r / bin.count,
      g: bin.g / bin.count,
      b: bin.b / bin.count,
      weight: bin.count,
      source: "auto"
    }));
    if (!all.length) return [{ r: 245, g: 245, b: 245, weight: 1, source: "auto" }];
    const byWeight = [...all].sort((a, b) => b.weight - a.weight);
    const byLuminance = [...all].sort((a, b) => colorLuminance(a) - colorLuminance(b));
    const pool = [
      ...byWeight.slice(0, Math.max(maximumCandidates, 14)),
      ...byLuminance.slice(0, 2),
      ...byLuminance.slice(-2)
    ];
    const candidates = [];
    for (const candidate of pool) {
      const duplicate = candidates.some((other) => colorDistance(candidate, other) < 24);
      if (!duplicate) candidates.push(candidate);
      if (candidates.length >= maximumCandidates) break;
    }
    return candidates;
  }

  function createFilmBaseMask(data, width, height, base, threshold) {
    const mask = new Uint8Array(width * height);
    const tolerance = 0.76 + clamp((Number(threshold) - 18) / 92, 0, 1) * 1.2;
    const redScale = Math.max(18, base.r * 0.12);
    const greenScale = Math.max(18, base.g * 0.12);
    const blueScale = Math.max(18, base.b * 0.12);
    for (let pixel = 0, offset = 0; pixel < mask.length; pixel += 1, offset += 4) {
      const red = (data[offset] - base.r) / redScale;
      const green = (data[offset + 1] - base.g) / greenScale;
      const blue = (data[offset + 2] - base.b) / blueScale;
      const distance = Math.sqrt((red * red + green * green + blue * blue) / 3);
      mask[pixel] = data[offset + 3] >= 24 && distance <= tolerance ? 1 : 0;
    }
    return mask;
  }

  function createAdaptiveForegroundMask(data, width, height) {
    const background = sampleBoundaryBackground(data, width, height);
    const mask = new Uint8Array(width * height);
    const tolerance = Math.max(30, Math.min(58, background.spread * 2.6));
    for (let pixel = 0, offset = 0; pixel < mask.length; pixel += 1, offset += 4) {
      if (data[offset + 3] < 24) continue;
      const distance = colorDistance(
        { r: data[offset], g: data[offset + 1], b: data[offset + 2] },
        background
      );
      mask[pixel] = distance > tolerance ? 1 : 0;
    }
    return mask;
  }

  function sampleBoundaryBackground(data, width, height) {
    const samples = [];
    const inset = Math.max(0, Math.round(Math.min(width, height) * 0.008));
    const step = Math.max(1, Math.round(Math.max(width, height) / 500));
    for (let x = 0; x < width; x += step) {
      samples.push(readRgb(data, width, x, inset), readRgb(data, width, x, height - 1 - inset));
    }
    for (let y = 0; y < height; y += step) {
      samples.push(readRgb(data, width, inset, y), readRgb(data, width, width - 1 - inset, y));
    }
    const bins = new Map();
    samples.forEach((color) => {
      const key = `${color.r >> 5}-${color.g >> 5}-${color.b >> 5}`;
      const bin = bins.get(key) || { count: 0, colors: [] };
      bin.count += 1;
      bin.colors.push(color);
      bins.set(key, bin);
    });
    const dominant = Array.from(bins.values()).sort((a, b) => b.count - a.count)[0];
    const r = median(dominant.colors.map((color) => color.r));
    const g = median(dominant.colors.map((color) => color.g));
    const b = median(dominant.colors.map((color) => color.b));
    const distances = dominant.colors.map((color) => colorDistance(color, { r, g, b }));
    return { r, g, b, spread: median(distances) || 12 };
  }

  function readRgb(data, width, x, y) {
    const offset = (y * width + x) * 4;
    return { r: data[offset], g: data[offset + 1], b: data[offset + 2] };
  }

  function colorLuminance(color) {
    return color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;
  }

  function colorDistance(first, second) {
    const red = first.r - second.r;
    const green = first.g - second.g;
    const blue = first.b - second.b;
    return Math.sqrt(red * red + green * green + blue * blue);
  }

  function median(values) {
    if (!values.length) return 0;
    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
  }

  function createBlackMask(data, width, height, threshold) {
    const mask = new Uint8Array(width * height);
    for (let pixel = 0, offset = 0; pixel < mask.length; pixel += 1, offset += 4) {
      const luminance = data[offset] * 0.2126 + data[offset + 1] * 0.7152 + data[offset + 2] * 0.0722;
      mask[pixel] = luminance <= threshold ? 1 : 0;
    }
    return mask;
  }

  function createForegroundMask(data, width, height) {
    const mask = new Uint8Array(width * height);
    for (let pixel = 0, offset = 0; pixel < mask.length; pixel += 1, offset += 4) {
      const red = data[offset];
      const green = data[offset + 1];
      const blue = data[offset + 2];
      const alpha = data[offset + 3];
      const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
      const chroma = Math.max(red, green, blue) - Math.min(red, green, blue);
      const isPaper = alpha < 24 || (luminance >= 238 && chroma <= 20);
      mask[pixel] = isPaper ? 0 : 1;
    }
    return mask;
  }

  function detectByOrientation(context, orientation) {
    const vertical = orientation === "vertical";
    const crossLength = vertical ? context.width : context.height;
    const alongLength = vertical ? context.height : context.width;
    const railProfile = getProfile(context.mask, context.width, context.height, vertical ? "x" : "y");
    const smoothedRails = smoothProfile(railProfile, Math.max(1, Math.round(crossLength * 0.0015)));
    const railRuns = findRuns(smoothedRails, Math.max(0.36, context.options.coverage - 0.16), Math.max(2, Math.round(crossLength * 0.002)));
    const pairedStrips = pairRailRuns(railRuns, crossLength, alongLength, context, orientation);
    const foregroundProfile = getProfile(context.foregroundMask, context.width, context.height, vertical ? "x" : "y");
    const smoothedForegroundProfile = smoothProfile(
      foregroundProfile,
      Math.max(1, Math.round(crossLength * 0.004))
    );
    const foregroundRuns = findRuns(
      smoothedForegroundProfile,
      0.14,
      Math.max(8, Math.round(crossLength * 0.025))
    );
    const recoveredStrips = recoverStripsFromForeground(
      foregroundRuns,
      railRuns,
      crossLength,
      alongLength,
      context,
      orientation
    );
    const inferredStrips = recoverMissingOuterStrips(
      pairedStrips,
      railRuns,
      smoothedForegroundProfile,
      crossLength,
      alongLength,
      context,
      orientation
    );
    const strips = mergeStripCandidates([...pairedStrips, ...inferredStrips, ...recoveredStrips]);
    const frames = [];
    const stripFrameCounts = [];
    let edgeFrameCount = 0;

    for (const strip of strips) {
      const dividerProfile = getStripDividerProfile(context.mask, context.width, context.height, strip, orientation);
      const edgeProfile = getStripDividerProfile(context.foregroundMask, context.width, context.height, strip, orientation);
      const smoothSize = Math.max(1, Math.round(alongLength * 0.001));
      const dividerRuns = findRuns(
        smoothProfile(dividerProfile, smoothSize),
        Math.max(0.54, context.options.coverage - (strip.source !== "rails" ? 0.06 : 0)),
        Math.max(2, Math.round(alongLength * 0.002))
      );
      const intervals = gapsBetweenRuns(dividerRuns, alongLength, strip.end - strip.start);
      let stripFrameCount = 0;

      for (const interval of intervals) {
        const edgeAwareInterval = trimUnboundedInterval(interval, edgeProfile, strip.end - strip.start);
        const rect = vertical
          ? { x: strip.start, y: edgeAwareInterval.start, w: strip.end - strip.start, h: edgeAwareInterval.end - edgeAwareInterval.start }
          : { x: edgeAwareInterval.start, y: strip.start, w: edgeAwareInterval.end - edgeAwareInterval.start, h: strip.end - strip.start };
        const inset = Math.round(context.options.inset / Math.max(state.scaleX, 0.001));
        const adjusted = insetRect(rect, inset, context.width, context.height);
        if (isUsableFrame(adjusted, context)) {
          frames.push({ ...adjusted, stripIndex: stripFrameCounts.length });
          stripFrameCount += 1;
          if (!interval.startBounded || !interval.endBounded) edgeFrameCount += 1;
        }
      }
      stripFrameCounts.push(stripFrameCount);
    }

    const cleanFrames = dedupeAndSort(frames);
    const activeStrips = strips.filter((strip, index) => stripFrameCounts[index] > 0);
    const activeStripFrameCounts = stripFrameCounts.filter((count) => count > 0);
    const averageStripWidth = activeStrips.length
      ? activeStrips.reduce((sum, strip) => sum + strip.end - strip.start, 0) / activeStrips.length
      : crossLength;
    return {
      frames: cleanFrames,
      stripCount: activeStrips.length,
      stripFrameCounts: activeStripFrameCounts,
      recoveredStripCount: activeStrips.filter((strip) => strip.source !== "rails").length,
      edgeFrameCount,
      layoutStrength: alongLength / Math.max(1, averageStripWidth),
      orientation
    };
  }

  function getProfile(mask, width, height, axis) {
    if (axis === "x") {
      const profile = new Float32Array(width);
      const step = Math.max(1, Math.floor(height / 900));
      const sampleCount = Math.ceil(height / step);
      for (let x = 0; x < width; x += 1) {
        let black = 0;
        for (let y = 0; y < height; y += step) black += mask[y * width + x];
        profile[x] = black / sampleCount;
      }
      return profile;
    }

    const profile = new Float32Array(height);
    const step = Math.max(1, Math.floor(width / 900));
    const sampleCount = Math.ceil(width / step);
    for (let y = 0; y < height; y += 1) {
      let black = 0;
      const row = y * width;
      for (let x = 0; x < width; x += step) black += mask[row + x];
      profile[y] = black / sampleCount;
    }
    return profile;
  }

  function getStripDividerProfile(mask, width, height, strip, orientation) {
    const vertical = orientation === "vertical";
    const length = vertical ? height : width;
    const crossStart = Math.max(0, Math.floor(strip.start));
    const crossEnd = Math.min(vertical ? width : height, Math.ceil(strip.end));
    const crossStep = Math.max(1, Math.floor((crossEnd - crossStart) / 500));
    const samples = Math.max(1, Math.ceil((crossEnd - crossStart) / crossStep));
    const profile = new Float32Array(length);

    for (let along = 0; along < length; along += 1) {
      let black = 0;
      for (let cross = crossStart; cross < crossEnd; cross += crossStep) {
        const x = vertical ? cross : along;
        const y = vertical ? along : cross;
        black += mask[y * width + x];
      }
      profile[along] = black / samples;
    }
    return profile;
  }

  function smoothProfile(profile, radius) {
    if (radius <= 0) return profile;
    const result = new Float32Array(profile.length);
    let sum = 0;
    let left = 0;
    let right = 0;
    while (right < profile.length && right <= radius) sum += profile[right++];
    for (let i = 0; i < profile.length; i += 1) {
      result[i] = sum / Math.max(1, right - left);
      const nextRight = i + radius + 1;
      const nextLeft = i - radius;
      if (nextRight < profile.length) { sum += profile[nextRight]; right = nextRight + 1; }
      if (nextLeft >= 0) { sum -= profile[nextLeft]; left = nextLeft + 1; }
    }
    return result;
  }

  function findRuns(profile, threshold, minLength) {
    const runs = [];
    let start = -1;
    let peak = 0;
    let total = 0;

    for (let i = 0; i <= profile.length; i += 1) {
      const value = i < profile.length ? profile[i] : 0;
      if (value >= threshold) {
        if (start < 0) { start = i; peak = value; total = value; }
        else { peak = Math.max(peak, value); total += value; }
      } else if (start >= 0) {
        const length = i - start;
        if (length >= minLength) runs.push({ start, end: i, peak, mean: total / length });
        start = -1;
      }
    }
    return mergeNearbyRuns(runs, Math.max(2, minLength));
  }

  function mergeNearbyRuns(runs, maxGap) {
    const merged = [];
    for (const run of runs) {
      const previous = merged[merged.length - 1];
      if (previous && run.start - previous.end <= maxGap) {
        previous.end = run.end;
        previous.peak = Math.max(previous.peak, run.peak);
        previous.mean = (previous.mean + run.mean) / 2;
      } else {
        merged.push({ ...run });
      }
    }
    return merged;
  }

  function pairRailRuns(runs, crossLength, alongLength, context, orientation) {
    const strips = [];
    const minimumGap = Math.max(36, crossLength * 0.13);
    const maximumGap = crossLength * 0.72;
    for (let i = 0; i < runs.length - 1; i += 1) {
      const start = runs[i].end;
      const end = runs[i + 1].start;
      const gap = end - start;
      if (gap < minimumGap || gap > maximumGap) continue;

      const rect = orientation === "vertical"
        ? { x: start, y: 0, w: gap, h: alongLength }
        : { x: 0, y: start, w: alongLength, h: gap };
      const stats = sampleRectStats(rect, context);
      if (stats.stdDev > 11 && stats.whiteRatio < 0.91 && stats.blackRatio < 0.78) {
        strips.push({ start, end, strength: (runs[i].mean + runs[i + 1].mean) / 2, source: "rails" });
      }
    }
    return strips;
  }

  function recoverStripsFromForeground(runs, railRuns, crossLength, alongLength, context, orientation) {
    const strips = [];
    const minimumWidth = Math.max(34, crossLength * 0.1);
    const maximumWidth = crossLength * 0.72;

    for (const run of runs) {
      const bandWidth = run.end - run.start;
      if (bandWidth < minimumWidth || bandWidth > maximumWidth) continue;
      const edgeZone = Math.max(5, bandWidth * 0.22);
      const leftRail = nearestEdgeRail(railRuns, run.start, run.start + edgeZone, "left", bandWidth);
      const rightRail = nearestEdgeRail(railRuns, run.end - edgeZone, run.end, "right", bandWidth);
      const start = leftRail ? leftRail.end : run.start;
      const end = rightRail ? rightRail.start : run.end;
      if (end - start < minimumWidth * 0.72) continue;

      const rect = orientation === "vertical"
        ? { x: start, y: 0, w: end - start, h: alongLength }
        : { x: 0, y: start, w: alongLength, h: end - start };
      const stats = sampleRectStats(rect, context);
      if (stats.stdDev > 9 && stats.whiteRatio < 0.92 && stats.blackRatio < 0.8) {
        strips.push({ start, end, strength: run.mean * 0.8, source: "foreground" });
      }
    }
    return strips;
  }

  function recoverMissingOuterStrips(
    pairedStrips,
    railRuns,
    foregroundProfile,
    crossLength,
    alongLength,
    context,
    orientation
  ) {
    if (!pairedStrips.length) return [];
    const referenceWidths = pairedStrips
      .map((strip) => strip.end - strip.start)
      .sort((a, b) => a - b);
    const referenceWidth = referenceWidths[Math.floor(referenceWidths.length / 2)];
    const minimumWidth = Math.max(34, referenceWidth * 0.52, crossLength * 0.1);
    const maximumWidth = Math.min(crossLength * 0.72, referenceWidth * 1.38);
    const searchTolerance = Math.max(crossLength * 0.06, referenceWidth * 0.45);
    const inferred = [];

    for (const strip of pairedStrips) {
      const leftSharedRail = railRuns.find((rail) => Math.abs(rail.end - strip.start) <= 3);
      if (leftSharedRail) {
        const end = leftSharedRail.start;
        const expectedStart = end - referenceWidth;
        const start = findPhotoPaperBoundary(
          foregroundProfile,
          clamp(expectedStart - searchTolerance, 0, end),
          clamp(expectedStart + searchTolerance, 0, end),
          "rising"
        );
        if (start !== null) {
          addInferredStrip(inferred, start, end, minimumWidth, maximumWidth, alongLength, context, orientation);
        }
      }

      const rightSharedRail = railRuns.find((rail) => Math.abs(rail.start - strip.end) <= 3);
      if (rightSharedRail) {
        const start = rightSharedRail.end;
        const expectedEnd = start + referenceWidth;
        const end = findPhotoPaperBoundary(
          foregroundProfile,
          clamp(expectedEnd - searchTolerance, start, crossLength),
          clamp(expectedEnd + searchTolerance, start, crossLength),
          "falling"
        );
        if (end !== null) {
          addInferredStrip(inferred, start, end, minimumWidth, maximumWidth, alongLength, context, orientation);
        }
      }
    }
    return inferred;
  }

  function findPhotoPaperBoundary(profile, rawStart, rawEnd, direction) {
    const start = Math.max(0, Math.floor(Math.min(rawStart, rawEnd)));
    const end = Math.min(profile.length, Math.ceil(Math.max(rawStart, rawEnd)));
    if (end - start < 3) return null;
    const windowSize = Math.max(2, Math.round(profile.length * 0.004));
    let bestBoundary = null;
    let bestScore = 0;

    for (let position = start; position <= end; position += 1) {
      const before = profileWindowMean(profile, position - 1, windowSize, -1);
      const after = profileWindowMean(profile, position, windowSize, 1);
      const contrast = direction === "rising" ? after - before : before - after;
      const paperSide = direction === "rising" ? before : after;
      const photoSide = direction === "rising" ? after : before;
      if (paperSide <= 0.1 && photoSide >= 0.14 && contrast > bestScore) {
        bestBoundary = position;
        bestScore = contrast;
      }
    }

    if (bestBoundary !== null) return bestBoundary;
    if (direction === "rising" && start === 0 && profileWindowMean(profile, 0, windowSize, 1) >= 0.14) return 0;
    if (direction === "falling" && end === profile.length && profileWindowMean(profile, profile.length - 1, windowSize, -1) >= 0.14) {
      return profile.length;
    }
    return null;
  }

  function addInferredStrip(strips, start, end, minimumWidth, maximumWidth, alongLength, context, orientation) {
    const width = end - start;
    if (width < minimumWidth || width > maximumWidth) return;
    const rect = orientation === "vertical"
      ? { x: start, y: 0, w: width, h: alongLength }
      : { x: 0, y: start, w: alongLength, h: width };
    const stats = sampleRectStats(rect, context);
    if (stats.stdDev > 9 && stats.whiteRatio < 0.92 && stats.blackRatio < 0.8) {
      strips.push({ start, end, strength: stats.stdDev / 100, source: "inferred" });
    }
  }

  function nearestEdgeRail(railRuns, zoneStart, zoneEnd, side, bandWidth) {
    const candidates = railRuns.filter((rail) => {
      const midpoint = (rail.start + rail.end) / 2;
      const width = rail.end - rail.start;
      return midpoint >= zoneStart && midpoint <= zoneEnd && width <= Math.max(8, bandWidth * 0.18);
    });
    if (!candidates.length) return null;
    return candidates.sort((a, b) => {
      const distanceA = side === "left" ? Math.abs(a.start - zoneStart) : Math.abs(zoneEnd - a.end);
      const distanceB = side === "left" ? Math.abs(b.start - zoneStart) : Math.abs(zoneEnd - b.end);
      return distanceA - distanceB;
    })[0];
  }

  function mergeStripCandidates(strips) {
    const sourcePriority = { rails: 3, inferred: 2, foreground: 1 };
    const ordered = [...strips].sort((a, b) => {
      if (a.source !== b.source) return (sourcePriority[b.source] || 0) - (sourcePriority[a.source] || 0);
      return b.strength - a.strength;
    });
    const kept = [];
    for (const strip of ordered) {
      const duplicate = kept.some((other) => {
        const overlap = Math.max(0, Math.min(strip.end, other.end) - Math.max(strip.start, other.start));
        return overlap / Math.max(1, Math.min(strip.end - strip.start, other.end - other.start)) > 0.68;
      });
      if (!duplicate) kept.push(strip);
    }
    return kept.sort((a, b) => a.start - b.start);
  }

  function gapsBetweenRuns(runs, alongLength, crossSize) {
    const boundaries = [{ start: 0, end: 0 }, ...runs, { start: alongLength, end: alongLength }];
    const intervals = [];
    const minimumFrame = Math.max(34, crossSize * 0.34);
    const maximumFrame = Math.max(minimumFrame * 1.2, crossSize * 2.45);
    for (let i = 0; i < boundaries.length - 1; i += 1) {
      const start = boundaries[i].end;
      const end = boundaries[i + 1].start;
      const length = end - start;
      if (length >= minimumFrame && length <= maximumFrame) {
        intervals.push({
          start,
          end,
          startBounded: i > 0,
          endBounded: i < boundaries.length - 2
        });
      }
    }
    return intervals;
  }

  function trimUnboundedInterval(interval, foregroundProfile, crossSize) {
    let { start, end } = interval;
    const threshold = 0.12;
    const confirmation = Math.max(2, Math.round(crossSize * 0.012));
    const searchLimit = Math.max(
      confirmation,
      Math.min(48, Math.floor((end - start) * 0.18), Math.floor(crossSize * 0.18))
    );

    if (!interval.startBounded) {
      const limit = Math.min(end, start + searchLimit);
      for (let position = start; position < limit; position += 1) {
        if (profileWindowMean(foregroundProfile, position, confirmation, 1) >= threshold) {
          start = position;
          break;
        }
      }
    }

    if (!interval.endBounded) {
      const limit = Math.max(start, end - searchLimit);
      for (let position = end - 1; position >= limit; position -= 1) {
        if (profileWindowMean(foregroundProfile, position, confirmation, -1) >= threshold) {
          end = position + 1;
          break;
        }
      }
    }
    return { ...interval, start, end };
  }

  function profileWindowMean(profile, start, length, direction) {
    let total = 0;
    let count = 0;
    for (let offset = 0; offset < length; offset += 1) {
      const index = start + offset * direction;
      if (index < 0 || index >= profile.length) break;
      total += profile[index];
      count += 1;
    }
    return total / Math.max(1, count);
  }

  function sampleRectStats(rect, context) {
    const data = context.imageData.data;
    const stepX = Math.max(1, Math.floor(rect.w / 70));
    const stepY = Math.max(1, Math.floor(rect.h / 70));
    let count = 0;
    let total = 0;
    let totalSquared = 0;
    let white = 0;
    let black = 0;
    const xEnd = Math.min(context.width, Math.ceil(rect.x + rect.w));
    const yEnd = Math.min(context.height, Math.ceil(rect.y + rect.h));

    for (let y = Math.max(0, Math.floor(rect.y)); y < yEnd; y += stepY) {
      for (let x = Math.max(0, Math.floor(rect.x)); x < xEnd; x += stepX) {
        const offset = (y * context.width + x) * 4;
        const value = data[offset] * .2126 + data[offset + 1] * .7152 + data[offset + 2] * .0722;
        count += 1;
        total += value;
        totalSquared += value * value;
        if (value > 244) white += 1;
        if (value < 24) black += 1;
      }
    }
    const mean = total / Math.max(1, count);
    return {
      mean,
      stdDev: Math.sqrt(Math.max(0, totalSquared / Math.max(1, count) - mean * mean)),
      whiteRatio: white / Math.max(1, count),
      blackRatio: black / Math.max(1, count)
    };
  }

  function isUsableFrame(rect, context) {
    if (rect.w < 24 || rect.h < 24) return false;
    const stats = sampleRectStats(rect, context);
    return stats.stdDev > 7 && stats.blackRatio < .82 && stats.whiteRatio < .94;
  }

  function insetRect(rect, amount, maxWidth, maxHeight) {
    const inset = Math.max(0, amount);
    const x = clamp(Math.round(rect.x + inset), 0, maxWidth - 1);
    const y = clamp(Math.round(rect.y + inset), 0, maxHeight - 1);
    const right = clamp(Math.round(rect.x + rect.w - inset), x + 1, maxWidth);
    const bottom = clamp(Math.round(rect.y + rect.h - inset), y + 1, maxHeight);
    return { x, y, w: right - x, h: bottom - y };
  }

  function scoreResult(result, analysis) {
    if (!result.frames.length) return 0;
    const coveredArea = result.frames.reduce((sum, frame) => sum + frame.w * frame.h, 0);
    const areaScore = coveredArea / (analysis.width * analysis.height);
    const nonEmptyCounts = result.stripFrameCounts.filter((count) => count > 0);
    const balance = nonEmptyCounts.length > 1
      ? Math.min(...nonEmptyCounts) / Math.max(...nonEmptyCounts)
      : 0;
    return result.frames.length * 8
      + Math.min(result.stripCount, 2) * 3
      + Math.min(9, result.layoutStrength * 1.6)
      + balance * 4
      + areaScore;
  }

  function dedupeAndSort(frames) {
    const unique = [];
    for (const frame of frames) {
      const duplicate = unique.some((other) => intersectionOverUnion(frame, other) > .82);
      if (!duplicate) unique.push(frame);
    }
    return unique.sort((a, b) => (a.x - b.x) || (a.y - b.y));
  }

  function intersectionOverUnion(a, b) {
    const left = Math.max(a.x, b.x);
    const top = Math.max(a.y, b.y);
    const right = Math.min(a.x + a.w, b.x + b.w);
    const bottom = Math.min(a.y + a.h, b.y + b.h);
    const intersection = Math.max(0, right - left) * Math.max(0, bottom - top);
    const union = a.w * a.h + b.w * b.h - intersection;
    return union ? intersection / union : 0;
  }

  function getSelectedExportJobs() {
    syncActiveJobState();
    return state.jobs.filter((job) => job.frames.some((frame) => frame.checked));
  }

  function renderJobQueue() {
    if (!els.jobList) return;
    const selectedTotal = state.jobs.reduce(
      (sum, job) => sum + job.frames.filter((frame) => frame.checked).length,
      0
    );
    els.jobQueueSummary.textContent = `${state.jobs.length} 张底片 · ${selectedTotal} 个画格待导出`;
    els.jobList.replaceChildren();

    state.jobs.forEach((job, index) => {
      const card = document.createElement("article");
      card.className = `job-card is-${job.status}${job.id === state.activeJobId ? " is-active" : ""}`;
      card.tabIndex = state.busy ? -1 : 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-current", job.id === state.activeJobId ? "true" : "false");
      card.setAttribute("aria-label", `打开底片 ${job.file.name}`);

      const selected = job.frames.filter((frame) => frame.checked).length;
      const statusText = job.status === "processing"
        ? "识别中"
        : job.status === "error"
          ? (job.error || "处理失败")
          : job.status === "pending"
            ? "等待识别"
            : `${job.frames.length} 个画格 · ${selected} 个待导出`;
      card.innerHTML = `<span class="job-card-name" title="${escapeHtml(job.file.name)}">${String(index + 1).padStart(2, "0")} · ${escapeHtml(job.file.name)}</span><small class="job-card-meta">${job.format.label} · ${formatBytes(job.file.size)}</small><small class="job-card-status">${statusText}</small><button class="job-remove" type="button" aria-label="移除 ${escapeHtml(job.file.name)}">×</button>`;
      card.addEventListener("click", (event) => {
        if (!event.target.closest(".job-remove")) void activateJob(job.id);
      });
      card.addEventListener("keydown", (event) => {
        if ((event.key === "Enter" || event.key === " ") && !state.busy) {
          event.preventDefault();
          void activateJob(job.id);
        }
      });
      card.querySelector(".job-remove").addEventListener("click", (event) => {
        event.stopPropagation();
        void removeJob(job.id);
      });
      els.jobList.append(card);
    });
  }

  async function removeJob(jobId) {
    if (state.busy) return;
    const index = state.jobs.findIndex((job) => job.id === jobId);
    if (index < 0) return;
    const wasActive = state.activeJobId === jobId;
    state.jobs.splice(index, 1);
    if (!state.jobs.length) {
      releaseRuntime();
      state.activeJobId = null;
      els.workspace.hidden = true;
      els.intro.hidden = false;
      renderJobQueue();
      updateExportState();
      return;
    }
    if (wasActive) {
      state.activeJobId = null;
      const replacement = state.jobs[Math.min(index, state.jobs.length - 1)];
      setBusy(true, `正在打开 ${replacement.file.name}…`);
      try {
        await loadJobRuntime(replacement, { render: true });
      } catch (error) {
        console.error(error);
        replacement.status = "error";
        replacement.error = "图片读取失败";
      } finally {
        setBusy(false);
      }
    }
    const activeJob = getActiveJob();
    if (activeJob?.meta) updateSourceMeta(activeJob);
    renderJobQueue();
    updateExportState();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function toOriginalRect(rect) {
    const image = state.image;
    const x = clamp(Math.round(rect.x * state.scaleX), 0, image.naturalWidth - 1);
    const y = clamp(Math.round(rect.y * state.scaleY), 0, image.naturalHeight - 1);
    const right = clamp(Math.round((rect.x + rect.w) * state.scaleX), x + 1, image.naturalWidth);
    const bottom = clamp(Math.round((rect.y + rect.h) * state.scaleY), y + 1, image.naturalHeight);
    return { x, y, w: right - x, h: bottom - y };
  }

  function renderAll() {
    syncActiveJobState();
    drawSourceOverlay();
    renderFrames();
    renderFrameEditor();
    updateExportState();
    els.resultCount.textContent = state.frames.length ? String(state.frames.length).padStart(2, "0") : "00";
    const hasFrames = state.frames.length > 0;
    els.noFrames.hidden = hasFrames;
    els.selectionActions.hidden = !hasFrames;
    renderJobQueue();
  }

  function drawSourceOverlay() {
    if (!state.analysis) return;
    const canvas = els.sourceCanvas;
    const sourceWidth = state.analysis.width;
    const sourceHeight = state.analysis.height;
    const outputSize = getRotatedSize(sourceWidth, sourceHeight, state.sourceViewRotation);
    if (canvas.width !== outputSize.width || canvas.height !== outputSize.height) {
      canvas.width = outputSize.width;
      canvas.height = outputSize.height;
    }
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    applyRotationTransform(ctx, state.sourceViewRotation, sourceWidth, sourceHeight);
    ctx.drawImage(state.analysis.canvas, 0, 0);
    ctx.lineWidth = Math.max(2, Math.min(sourceWidth, sourceHeight) / 700);
    ctx.font = `700 ${Math.max(11, sourceWidth / 85)}px Syne, sans-serif`;

    state.frames.forEach((frame, index) => {
      const x = frame.x / state.scaleX;
      const y = frame.y / state.scaleY;
      const w = frame.w / state.scaleX;
      const h = frame.h / state.scaleY;
      const active = index === state.selectedIndex;
      ctx.fillStyle = active ? "rgba(241, 91, 53, .12)" : "rgba(230, 255, 63, .08)";
      ctx.strokeStyle = active ? "#f15b35" : (frame.checked ? "#e6ff3f" : "rgba(240,238,231,.45)");
      ctx.setLineDash(frame.checked ? [] : [7, 5]);
      ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x + 1, y + 1, Math.max(0, w - 2), Math.max(0, h - 2));
      const label = String(index + 1).padStart(2, "0");
      const labelW = ctx.measureText(label).width + 14;
      const labelH = Math.max(20, sourceWidth / 55);
      ctx.fillStyle = active ? "#f15b35" : "#e6ff3f";
      ctx.fillRect(x + 1, y + 1, labelW, labelH);
      ctx.fillStyle = "#171714";
      ctx.fillText(label, x + 8, y + labelH - 6);
    });

    const samples = getActiveJob()?.baseSamples || [];
    samples.forEach((sample, index) => {
      const x = sample.x * sourceWidth;
      const y = sample.y * sourceHeight;
      const radius = Math.max(7, Math.min(sourceWidth, sourceHeight) / 85);
      ctx.setLineDash([]);
      ctx.lineWidth = Math.max(2, radius / 4);
      ctx.fillStyle = "rgba(23, 23, 20, .72)";
      ctx.strokeStyle = "#e6ff3f";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#e6ff3f";
      ctx.font = `700 ${Math.max(9, radius)}px Syne, sans-serif`;
      ctx.fillText(String(index + 1), x - radius * .28, y + radius * .34);
    });
    ctx.restore();
    els.canvasMessage.hidden = !state.busy;
  }

  function renderFrames() {
    els.framesGrid.replaceChildren();
    state.frames.forEach((frame, index) => {
      const card = document.createElement("article");
      card.className = `frame-card${index === state.selectedIndex ? " is-active" : ""}${frame.checked ? "" : " is-unchecked"}`;
      card.style.animationDelay = `${Math.min(index * 45, 360)}ms`;
      card.dataset.index = index;
      card.tabIndex = 0;
      card.setAttribute("role", "checkbox");
      card.setAttribute("aria-checked", String(frame.checked));
      const outputSize = getFrameOutputSize(frame);
      card.setAttribute("aria-label", `画格 ${index + 1}，输出 ${outputSize.width} × ${outputSize.height} 像素`);

      const preview = document.createElement("div");
      preview.className = "frame-preview";
      const canvas = createPreviewCanvas(frame);
      preview.append(canvas);

      const info = document.createElement("div");
      info.className = "frame-info";
      info.innerHTML = `<p><b>FRAME ${String(index + 1).padStart(2, "0")}</b><small>输出 ${outputSize.width} × ${outputSize.height} PX</small></p><div class="frame-tools"><div class="frame-rotation" aria-label="画格 ${index + 1} 预览与导出角度"><button class="frame-rotate-button" data-rotate="-90" type="button" aria-label="向左旋转预览与导出" title="向左旋转预览与导出">↶</button><output>${normalizeRotation(frame.previewRotation)}°</output><button class="frame-rotate-button" data-rotate="90" type="button" aria-label="向右旋转预览与导出" title="向右旋转预览与导出">↷</button></div><button class="frame-check" type="button" aria-label="${frame.checked ? "取消选择" : "选择"}画格 ${index + 1}"></button></div>`;
      card.append(preview, info);

      info.querySelectorAll(".frame-rotate-button").forEach((button) => {
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          state.selectedIndex = index;
          frame.previewRotation = normalizeRotation(frame.previewRotation + Number(button.dataset.rotate));
          updateFramePreviewCard(card, frame, index);
        });
      });

      card.addEventListener("click", (event) => {
        state.selectedIndex = index;
        if (event.target.closest(".frame-check")) frame.checked = !frame.checked;
        renderAll();
      });
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          card.click();
        } else if (event.key === " ") {
          event.preventDefault();
          state.selectedIndex = index;
          frame.checked = !frame.checked;
          renderAll();
        }
      });
      els.framesGrid.append(card);
    });
  }

  function createPreviewCanvas(frame) {
    const maxWidth = 330;
    const maxHeight = 240;
    const rotation = normalizeRotation(frame.previewRotation);
    const outputSize = getRotatedSize(frame.w, frame.h, rotation);
    const scale = Math.min(maxWidth / outputSize.width, maxHeight / outputSize.height, 1);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(outputSize.width * scale));
    canvas.height = Math.max(1, Math.round(outputSize.height * scale));
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.scale(scale, scale);
    applyRotationTransform(ctx, rotation, frame.w, frame.h);
    ctx.drawImage(
      state.image,
      frame.x, frame.y, frame.w, frame.h,
      0, 0, frame.w, frame.h
    );
    return canvas;
  }

  function updateFramePreviewCard(card, frame, index) {
    const nextCanvas = createPreviewCanvas(frame);
    const outputSize = getFrameOutputSize(frame);
    card.querySelector(".frame-preview").replaceChildren(nextCanvas);
    card.querySelector(".frame-rotation output").value = `${normalizeRotation(frame.previewRotation)}°`;
    card.querySelector(".frame-info p small").textContent = `输出 ${outputSize.width} × ${outputSize.height} PX`;
    card.setAttribute("aria-label", `画格 ${index + 1}，输出 ${outputSize.width} × ${outputSize.height} 像素`);
    els.framesGrid.querySelectorAll(".frame-card").forEach((item, itemIndex) => {
      item.classList.toggle("is-active", itemIndex === index);
    });
    drawSourceOverlay();
    renderFrameEditor();
    syncActiveJobState();
    renderJobQueue();
  }

  function renderFrameEditor() {
    const frame = state.frames[state.selectedIndex];
    els.frameEditor.hidden = !frame;
    if (!frame) return;
    els.selectedFrameNumber.textContent = String(state.selectedIndex + 1).padStart(2, "0");
    els.cropX.value = frame.x;
    els.cropY.value = frame.y;
    els.cropW.value = frame.w;
    els.cropH.value = frame.h;
  }

  function selectFrameFromCanvas(event) {
    if (!state.analysis) return;
    const sourcePoint = getSourceCanvasPoint(event);
    if (state.baseSamplingActive) {
      addFilmBaseSample(sourcePoint);
      return;
    }
    const x = sourcePoint.x * state.scaleX;
    const y = sourcePoint.y * state.scaleY;
    const index = state.frames.findIndex((frame) => x >= frame.x && x <= frame.x + frame.w && y >= frame.y && y <= frame.y + frame.h);
    if (index >= 0) {
      state.selectedIndex = index;
      renderAll();
      const card = els.framesGrid.querySelector(`[data-index="${index}"]`);
      card?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function getSourceCanvasPoint(event) {
    const bounds = els.sourceCanvas.getBoundingClientRect();
    const canvasX = (event.clientX - bounds.left) * (els.sourceCanvas.width / bounds.width);
    const canvasY = (event.clientY - bounds.top) * (els.sourceCanvas.height / bounds.height);
    return mapRotatedPointToSource(
      canvasX,
      canvasY,
      state.sourceViewRotation,
      state.analysis.width,
      state.analysis.height
    );
  }

  function addFilmBaseSample(point) {
    const job = getActiveJob();
    if (!job || !state.analysis) return;
    const sample = {
      x: clamp(point.x / state.analysis.width, 0, 1),
      y: clamp(point.y / state.analysis.height, 0, 1)
    };
    if (job.baseSamples.length >= 5) job.baseSamples.shift();
    job.baseSamples.push(sample);
    job.filmBase = {
      ...getManualFilmBase(state.analysis, job.baseSamples),
      confidence: 100,
      source: "manual"
    };
    drawSourceOverlay();
    updateFilmBaseUi(job);
    showToast(`已记录 ${job.baseSamples.length} 个片基样本，完成后点击“识别”`);
  }

  function getManualFilmBase(analysis, samples) {
    if (!analysis || !samples?.length) return null;
    const colors = samples.map((sample) => sampleFilmBasePatch(
      analysis.imageData,
      analysis.width,
      analysis.height,
      Math.round(sample.x * analysis.width),
      Math.round(sample.y * analysis.height)
    ));
    return {
      r: median(colors.map((color) => color.r)),
      g: median(colors.map((color) => color.g)),
      b: median(colors.map((color) => color.b))
    };
  }

  function sampleFilmBasePatch(imageData, width, height, centerX, centerY) {
    const radius = Math.max(3, Math.round(Math.min(width, height) / 160));
    const red = [];
    const green = [];
    const blue = [];
    for (let y = Math.max(0, centerY - radius); y <= Math.min(height - 1, centerY + radius); y += 1) {
      for (let x = Math.max(0, centerX - radius); x <= Math.min(width - 1, centerX + radius); x += 1) {
        const offset = (y * width + x) * 4;
        if (imageData.data[offset + 3] < 240) continue;
        red.push(imageData.data[offset]);
        green.push(imageData.data[offset + 1]);
        blue.push(imageData.data[offset + 2]);
      }
    }
    return { r: median(red), g: median(green), b: median(blue) };
  }

  function handleSourceModeChange() {
    const job = getActiveJob();
    if (!job || state.busy) return;
    job.options.sourceMode = els.sourceMode.value;
    if (els.sourceMode.value === "positive") stopFilmBaseSampling();
    updateFilmBaseUi(job);
    void detectFrames();
  }

  function toggleFilmBaseSampling() {
    const job = getActiveJob();
    if (!job || !state.analysis || state.busy) return;
    if (state.baseSamplingActive) {
      const shouldDetect = job.baseSamples.length > 0;
      stopFilmBaseSampling();
      if (shouldDetect) void detectFrames();
      return;
    }
    if (els.sourceMode.value !== "negative") {
      els.sourceMode.value = "negative";
      job.options.sourceMode = "negative";
    }
    state.baseSamplingActive = true;
    els.canvasShell.classList.add("is-base-sampling");
    updateFilmBaseUi(job);
    showToast("请点击画格之间的空白片基；不要点击外部扫描背景");
  }

  function stopFilmBaseSampling() {
    state.baseSamplingActive = false;
    els.canvasShell.classList.remove("is-base-sampling");
    updateFilmBaseUi(getActiveJob());
  }

  function clearFilmBaseSamples() {
    const job = getActiveJob();
    if (!job || state.busy) return;
    job.baseSamples = [];
    job.filmBase = null;
    stopFilmBaseSampling();
    drawSourceOverlay();
    void detectFrames();
  }

  function updateFilmBaseUi(job) {
    if (!job) return;
    const mode = els.sourceMode.value || job.options.sourceMode || "auto";
    els.filmBaseControl.hidden = mode === "positive";
    els.thresholdLabel.textContent = mode === "positive" ? "黑色阈值" : (mode === "negative" ? "片基容差" : "边界阈值");
    els.thresholdRangeLabels.innerHTML = mode === "positive"
      ? "<span>仅纯黑</span><span>包含深灰</span>"
      : "<span>更接近片基</span><span>扩大容差</span>";
    els.filmBaseSampleButton.classList.toggle("is-active", state.baseSamplingActive);
    els.filmBaseSampleButton.setAttribute("aria-pressed", String(state.baseSamplingActive));
    els.filmBaseSampleButton.textContent = state.baseSamplingActive ? "完成采样并识别" : "吸管校正";
    els.sourceCanvas.setAttribute(
      "aria-label",
      state.baseSamplingActive ? "点击原图中的空白片基区域进行采样" : "胶片原图与检测框"
    );
    els.filmBaseClearButton.hidden = !job.baseSamples.length;

    const color = job.baseSamples.length && state.analysis
      ? getManualFilmBase(state.analysis, job.baseSamples)
      : job.filmBase;
    if (color) {
      const rounded = { r: Math.round(color.r), g: Math.round(color.g), b: Math.round(color.b) };
      els.filmBaseSwatch.style.background = `rgb(${rounded.r} ${rounded.g} ${rounded.b})`;
      const source = job.baseSamples.length ? `${job.baseSamples.length} 个手动样本` : "自动采样";
      const confidence = !job.baseSamples.length && color.confidence ? ` · ${color.confidence}%` : "";
      els.filmBaseStatus.textContent = `${source}${confidence} · RGB ${rounded.r}/${rounded.g}/${rounded.b}`;
    } else {
      els.filmBaseSwatch.style.removeProperty("background");
      els.filmBaseStatus.textContent = job.detectionMode === "positive"
        ? "自动判断为正像 · 无需片基"
        : (mode === "auto" ? "等待自动判断" : "等待自动采样");
    }
  }

  function updateSelectedCrop() {
    const frame = state.frames[state.selectedIndex];
    if (!frame || !state.image) return;
    const x = clamp(Math.round(Number(els.cropX.value) || 0), 0, state.image.naturalWidth - 8);
    const y = clamp(Math.round(Number(els.cropY.value) || 0), 0, state.image.naturalHeight - 8);
    const w = clamp(Math.round(Number(els.cropW.value) || 8), 8, state.image.naturalWidth - x);
    const h = clamp(Math.round(Number(els.cropH.value) || 8), 8, state.image.naturalHeight - y);
    Object.assign(frame, { x, y, w, h });
    renderAll();
  }

  function rotateSourceView(delta) {
    if (!state.analysis) return;
    state.sourceViewRotation = normalizeRotation(state.sourceViewRotation + delta);
    els.sourceRotationLabel.value = `${state.sourceViewRotation}°`;
    drawSourceOverlay();
    syncActiveJobState();
  }

  function normalizeRotation(rotation) {
    return ((Number(rotation) % 360) + 360) % 360;
  }

  function defaultPreviewRotation(frame) {
    return frame.h > frame.w ? 90 : 0;
  }

  function getRotatedSize(width, height, rotation) {
    const normalized = normalizeRotation(rotation);
    return normalized === 90 || normalized === 270
      ? { width: height, height: width }
      : { width, height };
  }

  function getFrameOutputSize(frame) {
    return getRotatedSize(frame.w, frame.h, frame.previewRotation);
  }

  function applyRotationTransform(ctx, rotation, width, height) {
    switch (normalizeRotation(rotation)) {
      case 90:
        ctx.translate(height, 0);
        ctx.rotate(Math.PI / 2);
        break;
      case 180:
        ctx.translate(width, height);
        ctx.rotate(Math.PI);
        break;
      case 270:
        ctx.translate(0, width);
        ctx.rotate(-Math.PI / 2);
        break;
      default:
        break;
    }
  }

  function mapRotatedPointToSource(x, y, rotation, width, height) {
    let sourceX = x;
    let sourceY = y;
    switch (normalizeRotation(rotation)) {
      case 90:
        sourceX = y;
        sourceY = height - x;
        break;
      case 180:
        sourceX = width - x;
        sourceY = height - y;
        break;
      case 270:
        sourceX = width - y;
        sourceY = x;
        break;
      default:
        break;
    }
    return {
      x: clamp(sourceX, 0, width),
      y: clamp(sourceY, 0, height)
    };
  }

  function removeSelectedFrame() {
    if (state.selectedIndex < 0) return;
    state.frames.splice(state.selectedIndex, 1);
    state.selectedIndex = Math.min(state.selectedIndex, state.frames.length - 1);
    renderAll();
    showToast("已从导出列表排除此画格");
  }

  function setAllFrames(checked) {
    state.frames.forEach((frame) => { frame.checked = checked; });
    renderAll();
  }

  function updateExportState() {
    const selectedJobs = state.jobs.filter((job) => job.frames.some((frame) => frame.checked));
    const count = selectedJobs.reduce(
      (sum, job) => sum + job.frames.filter((frame) => frame.checked).length,
      0
    );
    els.selectedCount.textContent = selectedJobs.length > 1
      ? `${count} 张待导出 · ${selectedJobs.length} 份底片`
      : `${count} 张待导出`;
    els.exportButton.disabled = count === 0 || state.busy;
    els.exportButton.title = state.exportDirectoryHandle ? `选择窗口将从 ${state.exportDirectoryHandle.name} 打开` : "";
    if (count > 0 && supportsDirectoryExport()) {
      els.exportButtonLabel.textContent = "选择位置并导出";
      els.exportButtonHint.textContent = state.exportDirectoryHandle ? "上次位置" : "每次确认";
    } else if (count > 1) {
      els.exportButtonLabel.textContent = "批量直接下载";
      els.exportButtonHint.textContent = "浏览器";
    } else {
      els.exportButtonLabel.textContent = "导出所选画格";
      els.exportButtonHint.textContent = count === 1 ? (selectedJobs[0]?.format.label || "IMG") : "逐张";
    }
  }

  function supportsDirectoryExport() {
    return typeof window.showDirectoryPicker === "function";
  }

  function openSettingsDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(settingsDatabaseName, 1);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains(settingsStoreName)) {
          database.createObjectStore(settingsStoreName);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Unable to open settings database"));
      request.onblocked = () => reject(new Error("Settings database is blocked"));
    });
  }

  async function readRememberedExportDirectory() {
    if (typeof indexedDB === "undefined") return null;
    const database = await openSettingsDatabase();
    try {
      return await new Promise((resolve, reject) => {
        const transaction = database.transaction(settingsStoreName, "readonly");
        const request = transaction.objectStore(settingsStoreName).get(exportDirectoryKey);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error || new Error("Unable to read export directory"));
        transaction.onabort = () => reject(transaction.error || new Error("Export directory read was aborted"));
      });
    } finally {
      database.close();
    }
  }

  async function rememberExportDirectoryHandle(directoryHandle) {
    if (!directoryHandle || typeof indexedDB === "undefined") return;
    try {
      const database = await openSettingsDatabase();
      try {
        await new Promise((resolve, reject) => {
          const transaction = database.transaction(settingsStoreName, "readwrite");
          transaction.objectStore(settingsStoreName).put(directoryHandle, exportDirectoryKey);
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => reject(transaction.error || new Error("Unable to remember export directory"));
          transaction.onabort = () => reject(transaction.error || new Error("Export directory save was aborted"));
        });
      } finally {
        database.close();
      }
    } catch (error) {
      console.warn("Unable to persist the export directory handle", error);
    }
  }

  async function restoreExportDirectoryHandle() {
    try {
      const directoryHandle = await readRememberedExportDirectory();
      if (directoryHandle?.kind === "directory") state.exportDirectoryHandle = directoryHandle;
    } catch (error) {
      console.warn("Unable to restore the export directory handle", error);
    } finally {
      updateExportState();
    }
  }

  async function getWritableExportDirectory() {
    if (!supportsDirectoryExport()) return null;
    const directoryHandle = await window.showDirectoryPicker({
      id: "film-frame-export",
      mode: "readwrite",
      startIn: state.exportDirectoryHandle || "pictures"
    });
    state.exportDirectoryHandle = directoryHandle;
    await rememberExportDirectoryHandle(directoryHandle);
    updateExportState();
    return directoryHandle;
  }

  async function exportSelected() {
    const selectedJobs = getSelectedExportJobs();
    if (!selectedJobs.length || state.busy) return;

    let directoryHandle = null;
    if (supportsDirectoryExport()) {
      setBusy(true, state.exportDirectoryHandle ? "正在打开上次保存位置…" : "请选择保存位置…");
      try {
        directoryHandle = await getWritableExportDirectory();
      } catch (error) {
        setBusy(false);
        if (error?.name === "AbortError") return;
        if (error?.name === "SecurityError") {
          showToast("当前打开方式无法选择文件夹，请通过 localhost 本地服务打开工具");
          return;
        }
        console.error(error);
        showToast("无法访问所选文件夹，请重新选择");
        return;
      }
    }

    setBusy(true, "正在生成原尺寸画格…");
    await nextPaint();

    const originalJobId = state.activeJobId;
    let exportedCount = 0;
    const failedJobs = [];
    try {
      const quality = Number(els.exportQuality.value);
      for (let jobIndex = 0; jobIndex < selectedJobs.length; jobIndex += 1) {
        const job = selectedJobs[jobIndex];
        const selectedFrames = job.frames.filter((frame) => frame.checked);
        try {
          els.canvasMessage.textContent = `正在导出 ${jobIndex + 1}/${selectedJobs.length} · ${job.file.name}`;
          await loadJobRuntime(job, { render: false });
          const baseName = job.file.name.replace(/\.[^.]+$/, "") || "film";
          const digits = Math.max(2, String(selectedFrames.length).length);
          for (let frameIndex = 0; frameIndex < selectedFrames.length; frameIndex += 1) {
            const blob = await cropToBlob(selectedFrames[frameIndex], job.format, quality);
            const name = `${baseName}_${String(frameIndex + 1).padStart(digits, "0")}.${job.format.ext}`;
            if (directoryHandle) {
              await saveBlobToDirectory(blob, name, directoryHandle);
            } else {
              downloadBlob(blob, name);
            }
            exportedCount += 1;
          }
        } catch (error) {
          console.error(error);
          failedJobs.push(job.file.name);
        }
        renderJobQueue();
      }

      const suffix = failedJobs.length ? `，${failedJobs.length} 份底片失败` : "";
      showToast(directoryHandle
        ? `已将 ${exportedCount} 张画格保存至 ${directoryHandle.name}${suffix}`
        : `已发送 ${exportedCount} 个独立下载${suffix}`);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "导出失败。图片过大时，可减少所选画格后重试。");
    } finally {
      const originalJob = state.jobs.find((job) => job.id === originalJobId) || state.jobs[0];
      if (originalJob && state.activeJobId !== originalJob.id) {
        try {
          await loadJobRuntime(originalJob, { render: true });
        } catch (error) {
          console.error(error);
        }
      } else if (originalJob) {
        renderAll();
        renderJobDetectionStatus(originalJob);
      }
      setBusy(false);
    }
  }

  async function saveBlobToDirectory(blob, name, directoryHandle) {
    const target = await createUniqueFileHandle(directoryHandle, name);
    const writable = await target.handle.createWritable();
    try {
      await writable.write(blob);
      await writable.close();
    } catch (error) {
      if (typeof writable.abort === "function") {
        try { await writable.abort(); } catch (_) { /* Ignore cleanup errors. */ }
      }
      throw error;
    }
    return target.name;
  }

  async function saveFilesToDirectory(files, directoryHandle) {
    const savedFiles = [];
    for (const file of files) {
      savedFiles.push(await saveBlobToDirectory(file.blob, file.name, directoryHandle));
    }
    return savedFiles;
  }

  async function createUniqueFileHandle(directoryHandle, originalName) {
    let suffix = 0;
    while (true) {
      const candidate = suffix === 0 ? originalName : addFileNameSuffix(originalName, suffix);
      try {
        await directoryHandle.getFileHandle(candidate);
        suffix += 1;
      } catch (error) {
        if (error?.name === "TypeMismatchError") {
          suffix += 1;
          continue;
        }
        if (error?.name !== "NotFoundError") throw error;
        const handle = await directoryHandle.getFileHandle(candidate, { create: true });
        return { name: candidate, handle };
      }
    }
  }

  function addFileNameSuffix(fileName, suffix) {
    const dotIndex = fileName.lastIndexOf(".");
    if (dotIndex <= 0) return `${fileName} (${suffix})`;
    return `${fileName.slice(0, dotIndex)} (${suffix})${fileName.slice(dotIndex)}`;
  }

  function parseClassicTiffDirectory(buffer) {
    const bytes = new Uint8Array(buffer);
    if (bytes.length < 8) throw new Error("TIFF header is incomplete");
    const byteOrder = String.fromCharCode(bytes[0], bytes[1]);
    if (byteOrder !== "II" && byteOrder !== "MM") throw new Error("TIFF byte order is invalid");
    const littleEndian = byteOrder === "II";
    const view = new DataView(buffer);
    if (view.getUint16(2, littleEndian) !== 42) {
      throw new Error("BigTIFF is not supported by the current TIFF decoder");
    }

    const ifdOffset = view.getUint32(4, littleEndian);
    if (ifdOffset + 2 > bytes.length) throw new Error("TIFF directory offset is invalid");
    const entryCount = view.getUint16(ifdOffset, littleEndian);
    const directoryEnd = ifdOffset + 2 + entryCount * 12 + 4;
    if (directoryEnd > bytes.length) throw new Error("TIFF directory is incomplete");

    const typeSizes = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4, 0, 0, 8, 8, 8];
    const entries = [];
    for (let index = 0; index < entryCount; index += 1) {
      const entryOffset = ifdOffset + 2 + index * 12;
      const tag = view.getUint16(entryOffset, littleEndian);
      const type = view.getUint16(entryOffset + 2, littleEndian);
      const count = view.getUint32(entryOffset + 4, littleEndian);
      const typeSize = typeSizes[type] || 0;
      const valueLength = typeSize * count;
      if (!typeSize || !Number.isSafeInteger(valueLength)) continue;
      const valueOffset = valueLength <= 4
        ? entryOffset + 8
        : view.getUint32(entryOffset + 8, littleEndian);
      if (valueOffset + valueLength > bytes.length) continue;
      entries.push({
        tag,
        type,
        count,
        data: bytes.slice(valueOffset, valueOffset + valueLength)
      });
    }
    return { littleEndian, entries };
  }

  function createTiffSource(ifd, directory) {
    return {
      width: ifd.width,
      height: ifd.height,
      data: ifd.data,
      littleEndian: directory.littleEndian,
      entries: directory.entries,
      bitsPerSample: Array.from(ifd.t258 || [1]),
      samplesPerPixel: ifd.t277?.[0] || ifd.t258?.length || 1,
      planarConfiguration: ifd.t284?.[0] || 1,
      photometricInterpretation: ifd.t262?.[0] ?? 1,
      compression: ifd.t259?.[0] || 1,
      predictor: ifd.t317?.[0] || 1,
      hasCfaPattern: Boolean(ifd.t33422)
    };
  }

  function createUnsupportedTiffError(reason) {
    const error = new Error(`Lossless TIFF crop is unavailable: ${reason}`);
    error.userMessage = `该 TIFF 使用${reason}。为避免降为 8-bit，已停止导出；当前无损裁切支持常见的交错式 8/16-bit TIFF。`;
    return error;
  }

  function getTiffRasterInfo(source) {
    const bits = source.bitsPerSample;
    const samples = source.samplesPerPixel;
    if (source.planarConfiguration !== 1) throw createUnsupportedTiffError("分平面通道布局");
    if (source.hasCfaPattern) throw createUnsupportedTiffError("相机 RAW/CFA 像素布局");
    if (source.photometricInterpretation === 6) throw createUnsupportedTiffError("YCbCr 子采样布局");
    if (source.predictor !== 1 && source.predictor !== 2) throw createUnsupportedTiffError("不支持的像素预测器");
    if (bits.length !== samples || !bits.length) throw createUnsupportedTiffError("不规则的通道位深定义");
    if (bits.some((value) => value !== bits[0])) throw createUnsupportedTiffError("各通道位深不一致的布局");
    if (bits[0] !== 8 && bits[0] !== 16) throw createUnsupportedTiffError(`${bits[0]}-bit 打包像素布局`);

    const bytesPerPixel = samples * (bits[0] / 8);
    const expectedBytes = source.width * source.height * bytesPerPixel;
    if (!source.data || source.data.length < expectedBytes) {
      throw createUnsupportedTiffError("无法完整解压的像素数据");
    }
    return { bitDepth: bits[0], samples, bytesPerPixel, expectedBytes };
  }

  function cropTiffRaster(source, frame, rasterInfo) {
    const x = Math.round(frame.x);
    const y = Math.round(frame.y);
    const width = Math.round(frame.w);
    const height = Math.round(frame.h);
    if (x < 0 || y < 0 || width < 1 || height < 1 || x + width > source.width || y + height > source.height) {
      throw new Error("TIFF crop rectangle is outside the source image");
    }

    const rotation = normalizeRotation(frame.previewRotation);
    const outputSize = getRotatedSize(width, height, rotation);
    const bytesPerPixel = rasterInfo.bytesPerPixel;
    const output = new Uint8Array(outputSize.width * outputSize.height * bytesPerPixel);

    if (rotation === 0) {
      const rowBytes = width * bytesPerPixel;
      for (let row = 0; row < height; row += 1) {
        const sourceOffset = ((y + row) * source.width + x) * bytesPerPixel;
        output.set(source.data.subarray(sourceOffset, sourceOffset + rowBytes), row * rowBytes);
      }
      return { data: output, width, height };
    }

    for (let outputY = 0; outputY < outputSize.height; outputY += 1) {
      for (let outputX = 0; outputX < outputSize.width; outputX += 1) {
        let sourceX;
        let sourceY;
        if (rotation === 90) {
          sourceX = outputY;
          sourceY = height - 1 - outputX;
        } else if (rotation === 180) {
          sourceX = width - 1 - outputX;
          sourceY = height - 1 - outputY;
        } else {
          sourceX = width - 1 - outputY;
          sourceY = outputX;
        }
        const sourceOffset = ((y + sourceY) * source.width + x + sourceX) * bytesPerPixel;
        const outputOffset = (outputY * outputSize.width + outputX) * bytesPerPixel;
        for (let byte = 0; byte < bytesPerPixel; byte += 1) {
          output[outputOffset + byte] = source.data[sourceOffset + byte];
        }
      }
    }
    return { data: output, width: outputSize.width, height: outputSize.height };
  }

  function createTiffNumberEntry(tag, type, values, littleEndian) {
    const bytesPerValue = type === 3 ? 2 : 4;
    const data = new Uint8Array(values.length * bytesPerValue);
    const view = new DataView(data.buffer);
    values.forEach((value, index) => {
      if (type === 3) view.setUint16(index * 2, value, littleEndian);
      else view.setUint32(index * 4, value, littleEndian);
    });
    return { tag, type, count: values.length, data };
  }

  function makeTiffOutputEntries(source, width, height, pixelByteLength) {
    const rewrittenTags = new Set([
      256, 257, 258, 259, 262, 266, 273, 274, 277, 278, 279, 284, 288, 289,
      317, 322, 323, 324, 325, 330, 347, 513, 514, 515, 516, 517, 518, 519,
      520, 521, 34665, 34853, 40965, 50740
    ]);
    const entries = source.entries
      .filter((entry) => !rewrittenTags.has(entry.tag))
      .map((entry) => ({ ...entry, data: entry.data.slice() }));
    const setEntry = (entry) => {
      const previousIndex = entries.findIndex((candidate) => candidate.tag === entry.tag);
      if (previousIndex >= 0) entries.splice(previousIndex, 1);
      entries.push(entry);
    };
    const numberEntry = (tag, type, values) => createTiffNumberEntry(tag, type, values, source.littleEndian);

    setEntry(numberEntry(256, 4, [width]));
    setEntry(numberEntry(257, 4, [height]));
    setEntry(numberEntry(258, 3, source.bitsPerSample));
    setEntry(numberEntry(259, 3, [1]));
    setEntry(numberEntry(262, 3, [source.photometricInterpretation]));
    setEntry(numberEntry(273, 4, [0]));
    setEntry(numberEntry(274, 3, [1]));
    setEntry(numberEntry(277, 3, [source.samplesPerPixel]));
    setEntry(numberEntry(278, 4, [height]));
    setEntry(numberEntry(279, 4, [pixelByteLength]));
    setEntry(numberEntry(284, 3, [1]));
    return entries.sort((a, b) => a.tag - b.tag);
  }

  function alignTiffOffset(offset) {
    return offset + (offset % 2);
  }

  function writeClassicTiff(entries, pixelData, littleEndian) {
    if (entries.length > 65535) throw new Error("TIFF contains too many metadata entries");
    const ifdOffset = 8;
    const directoryEnd = ifdOffset + 2 + entries.length * 12 + 4;
    let externalOffset = alignTiffOffset(directoryEnd);
    const valueOffsets = new Array(entries.length).fill(0);

    entries.forEach((entry, index) => {
      if (entry.data.length > 4) {
        valueOffsets[index] = externalOffset;
        externalOffset = alignTiffOffset(externalOffset + entry.data.length);
      }
    });
    const pixelOffset = alignTiffOffset(externalOffset);
    const totalLength = pixelOffset + pixelData.length;
    if (pixelOffset > 0xffffffff || pixelData.length > 0xffffffff || totalLength > 0xffffffff) {
      throw new Error("Classic TIFF output would exceed 4 GiB");
    }

    const output = new Uint8Array(totalLength);
    const view = new DataView(output.buffer);
    output[0] = littleEndian ? 0x49 : 0x4d;
    output[1] = littleEndian ? 0x49 : 0x4d;
    view.setUint16(2, 42, littleEndian);
    view.setUint32(4, ifdOffset, littleEndian);
    view.setUint16(ifdOffset, entries.length, littleEndian);

    entries.forEach((entry, index) => {
      const entryOffset = ifdOffset + 2 + index * 12;
      view.setUint16(entryOffset, entry.tag, littleEndian);
      view.setUint16(entryOffset + 2, entry.type, littleEndian);
      view.setUint32(entryOffset + 4, entry.count, littleEndian);
      if (entry.tag === 273) {
        view.setUint32(entryOffset + 8, pixelOffset, littleEndian);
      } else if (entry.data.length <= 4) {
        output.set(entry.data, entryOffset + 8);
      } else {
        view.setUint32(entryOffset + 8, valueOffsets[index], littleEndian);
        output.set(entry.data, valueOffsets[index]);
      }
    });
    view.setUint32(ifdOffset + 2 + entries.length * 12, 0, littleEndian);
    output.set(pixelData, pixelOffset);
    return output.buffer;
  }

  function swap16BitSamples(bytes) {
    for (let offset = 0; offset + 1 < bytes.length; offset += 2) {
      const first = bytes[offset];
      bytes[offset] = bytes[offset + 1];
      bytes[offset + 1] = first;
    }
  }

  function encodePreservedTiffCrop(source, frame) {
    const rasterInfo = getTiffRasterInfo(source);
    const crop = cropTiffRaster(source, frame, rasterInfo);
    if (rasterInfo.bitDepth === 16 && !source.littleEndian) swap16BitSamples(crop.data);
    const entries = makeTiffOutputEntries(source, crop.width, crop.height, crop.data.length);
    return writeClassicTiff(entries, crop.data, source.littleEndian);
  }

  function encodeBmpCanvas(canvas) {
    const width = canvas.width;
    const height = canvas.height;
    const rowStride = Math.ceil((width * 3) / 4) * 4;
    const pixelBytes = rowStride * height;
    const headerBytes = 54;
    const fileSize = headerBytes + pixelBytes;
    if (!width || !height || !Number.isSafeInteger(fileSize) || fileSize > 0xffffffff) {
      throw new Error("BMP output dimensions are too large");
    }

    const rgba = canvas.getContext("2d").getImageData(0, 0, width, height).data;
    const output = new Uint8Array(fileSize);
    const view = new DataView(output.buffer);
    output[0] = 0x42;
    output[1] = 0x4d;
    view.setUint32(2, fileSize, true);
    view.setUint32(10, headerBytes, true);
    view.setUint32(14, 40, true);
    view.setInt32(18, width, true);
    view.setInt32(22, height, true);
    view.setUint16(26, 1, true);
    view.setUint16(28, 24, true);
    view.setUint32(34, pixelBytes, true);
    view.setInt32(38, 2835, true);
    view.setInt32(42, 2835, true);

    for (let outputY = 0; outputY < height; outputY += 1) {
      const sourceY = height - outputY - 1;
      const rowOffset = headerBytes + outputY * rowStride;
      for (let x = 0; x < width; x += 1) {
        const sourceOffset = (sourceY * width + x) * 4;
        const targetOffset = rowOffset + x * 3;
        output[targetOffset] = rgba[sourceOffset + 2];
        output[targetOffset + 1] = rgba[sourceOffset + 1];
        output[targetOffset + 2] = rgba[sourceOffset];
      }
    }
    return new Blob([output], { type: "image/bmp" });
  }

  function cropToBlob(frame, format, quality) {
    if (format.isTiff) {
      if (!state.tiffSource) return Promise.reject(new Error("TIFF source samples are unavailable"));
      const tiff = encodePreservedTiffCrop(state.tiffSource, frame);
      return Promise.resolve(new Blob([tiff], { type: "image/tiff" }));
    }

    const rotation = normalizeRotation(frame.previewRotation);
    const outputSize = getFrameOutputSize(frame);
    const canvas = document.createElement("canvas");
    canvas.width = outputSize.width;
    canvas.height = outputSize.height;
    const ctx = canvas.getContext("2d", { alpha: format.mime !== "image/jpeg" && !format.isBmp });
    if (format.mime === "image/jpeg" || format.isBmp) {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, outputSize.width, outputSize.height);
    }
    ctx.save();
    applyRotationTransform(ctx, rotation, frame.w, frame.h);
    ctx.drawImage(state.image, frame.x, frame.y, frame.w, frame.h, 0, 0, frame.w, frame.h);
    ctx.restore();

    if (format.isBmp) return Promise.resolve(encodeBmpCanvas(canvas));

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Canvas export failed")), format.mime, quality);
    });
  }

  function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  function setBusy(busy, message = "") {
    state.busy = busy;
    els.canvasShell.classList.toggle("is-scanning", busy);
    els.detectButton.disabled = busy;
    els.sourceMode.disabled = busy;
    els.filmBaseSampleButton.disabled = busy;
    els.filmBaseClearButton.disabled = busy;
    els.canvasMessage.hidden = !busy && Boolean(state.analysis);
    if (busy && message) els.canvasMessage.textContent = message;
    updateExportState();
  }

  function setDetectionStatus(type, title, detail) {
    els.detectedStatus.className = `detected-status is-${type}`;
    els.detectedStatus.querySelector("p").innerHTML = `<b>${title}</b><small>${detail}</small>`;
  }

  function updateRangeLabels() {
    els.blackThresholdValue.value = els.blackThreshold.value;
    els.borderCoverageValue.value = `${els.borderCoverage.value}%`;
    els.edgeInsetValue.value = `${els.edgeInset.value} px`;
  }

  let toastTimer = 0;
  function showToast(message) {
    clearTimeout(toastTimer);
    els.toast.textContent = message;
    els.toast.classList.add("is-visible");
    toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2600);
  }

  function formatBytes(bytes) {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function nextPaint() {
    return new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  }

  bindEvents();
})();
