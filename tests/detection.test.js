const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const appSource = fs.readFileSync(require("node:path").join(__dirname, "..", "app.js"), "utf8");
const instrumented = appSource.replace(
  /\n  bindEvents\(\);\n\}\)\(\);\s*$/,
  "\n  globalThis.__filmFrameTest = { runDetection, state, getFileFormat, defaultPreviewRotation, getRotatedSize, getFrameOutputSize, mapRotatedPointToSource, cropToBlob, encodePreservedTiffCrop, getWritableExportDirectory, saveFilesToDirectory, addFileNameSuffix, getSelectedExportJobs };\n})();"
);

const elementStub = {
  addEventListener() {},
  classList: { add() {}, remove() {}, toggle() {} },
  querySelector() { return elementStub; },
  value: "",
  hidden: false,
  disabled: false
};

const canvasRecords = [];

function createCanvasStub() {
  const record = { translations: [], rotations: [], drawCalls: [] };
  const context = {
    fillStyle: "",
    save() {},
    restore() {},
    fillRect() {},
    getImageData(x, y, width, height) {
      const data = new Uint8ClampedArray(width * height * 4);
      for (let offset = 0; offset < data.length; offset += 4) {
        data[offset] = 10;
        data[offset + 1] = 20;
        data[offset + 2] = 30;
        data[offset + 3] = 255;
      }
      return { data };
    },
    translate(x, y) { record.translations.push([x, y]); },
    rotate(angle) { record.rotations.push(angle); },
    drawImage(...args) { record.drawCalls.push(args); }
  };
  const canvas = {
    width: 0,
    height: 0,
    getContext() { return context; },
    toBlob(callback, mime) { callback(new Blob([Uint8Array.from([1])], { type: mime })); }
  };
  record.canvas = canvas;
  canvasRecords.push(record);
  return canvas;
}

const sandbox = {
  console,
  Blob,
  TextEncoder,
  Uint8Array,
  Uint32Array,
  Float32Array,
  DataView,
  Date,
  Math,
  setTimeout,
  clearTimeout,
  document: {
    querySelector: () => Object.create(elementStub),
    createElement: (tagName) => tagName === "canvas" ? createCanvasStub() : Object.create(elementStub)
  },
  window: { addEventListener() {} },
  URL: { revokeObjectURL() {} }
};
sandbox.globalThis = sandbox;
vm.runInNewContext(instrumented, sandbox, { filename: "app.js" });

const {
  runDetection,
  state,
  getFileFormat,
  defaultPreviewRotation,
  getRotatedSize,
  getFrameOutputSize,
  mapRotatedPointToSource,
  cropToBlob,
  encodePreservedTiffCrop,
  getWritableExportDirectory,
  saveFilesToDirectory,
  addFileNameSuffix,
  getSelectedExportJobs
} = sandbox.__filmFrameTest;
const UTIF = require("utif");

function makeSyntheticScan() {
  const width = 1000;
  const height = 1200;
  const data = new Uint8ClampedArray(width * height * 4);

  function paint(x0, y0, x1, y1, colorAt) {
    for (let y = y0; y < y1; y += 1) {
      for (let x = x0; x < x1; x += 1) {
        const offset = (y * width + x) * 4;
        const color = typeof colorAt === "function" ? colorAt(x, y) : colorAt;
        data[offset] = color[0];
        data[offset + 1] = color[1];
        data[offset + 2] = color[2];
        data[offset + 3] = 255;
      }
    }
  }

  paint(0, 0, width, height, [248, 247, 241]);
  const strips = [[50, 430], [560, 940]];
  for (const [left, right] of strips) {
    paint(left, 0, right, height, (x, y) => [
      72 + ((x + y) % 145),
      85 + ((x * 2 + y) % 130),
      92 + ((x + y * 3) % 120)
    ]);
    paint(left - 15, 0, left, height, [4, 4, 3]);
    paint(right, 0, right + 15, height, [4, 4, 3]);
    [[40, 60], [570, 590], [1100, 1120]].forEach(([top, bottom]) => {
      paint(left, top, right, bottom, [3, 3, 2]);
    });
  }

  return { width, height, imageData: { data } };
}

function makeEdgeDualScan() {
  const width = 370;
  const height = 556;
  const data = new Uint8ClampedArray(width * height * 4);

  function paint(x0, y0, x1, y1, colorAt) {
    for (let y = y0; y < y1; y += 1) {
      for (let x = x0; x < x1; x += 1) {
        const offset = (y * width + x) * 4;
        const color = typeof colorAt === "function" ? colorAt(x, y) : colorAt;
        data[offset] = color[0];
        data[offset + 1] = color[1];
        data[offset + 2] = color[2];
        data[offset + 3] = 255;
      }
    }
  }

  const photo = (x, y) => [
    68 + ((x + y * 2) % 148),
    78 + ((x * 3 + y) % 142),
    84 + ((x + y * 5) % 136)
  ];
  paint(0, 0, width, height, [250, 249, 244]);

  // Left strip: its outer rail is completely missing. Both strips also lack
  // a top border, and the final frames run directly into the scan edge.
  [[20, 198], [207, 377], [386, 556]].forEach(([top, bottom]) => {
    paint(28, top, 145, bottom, photo);
    paint(196, top, 312, bottom, photo);
  });
  paint(145, 20, 149, height, [3, 3, 2]);
  paint(192, 20, 196, height, [3, 3, 2]);
  paint(312, 20, 316, height, [3, 3, 2]);
  [[198, 207], [377, 386]].forEach(([top, bottom]) => {
    paint(28, top, 149, bottom, [3, 3, 2]);
    paint(192, top, 316, bottom, [3, 3, 2]);
  });

  return { width, height, imageData: { data } };
}

function makeBorderlessPairScan() {
  const width = 904;
  const height = 550;
  const data = new Uint8ClampedArray(width * height * 4);

  function paint(x0, y0, x1, y1, colorAt) {
    for (let y = y0; y < y1; y += 1) {
      for (let x = x0; x < x1; x += 1) {
        const offset = (y * width + x) * 4;
        const color = typeof colorAt === "function" ? colorAt(x, y) : colorAt;
        data[offset] = color[0];
        data[offset + 1] = color[1];
        data[offset + 2] = color[2];
        data[offset + 3] = 255;
      }
    }
  }

  const photo = (x, y) => [
    76 + ((x + y) % 138),
    92 + ((x * 2 + y * 3) % 124),
    66 + ((x * 4 + y) % 146)
  ];
  paint(0, 0, width, height, [251, 250, 246]);
  [[22, 381], [531, 887]].forEach(([left, right]) => {
    paint(left, 5, right, 533, photo);
    paint(left - 4, 5, left, 533, [2, 2, 2]);
    paint(right, 5, right + 4, 533, [2, 2, 2]);
  });
  return { width, height, imageData: { data } };
}

function makeSharedRailScan() {
  const width = 926;
  const height = 339;
  const data = new Uint8ClampedArray(width * height * 4);

  function paint(x0, y0, x1, y1, colorAt) {
    for (let y = y0; y < y1; y += 1) {
      for (let x = x0; x < x1; x += 1) {
        const offset = (y * width + x) * 4;
        const color = typeof colorAt === "function" ? colorAt(x, y) : colorAt;
        data[offset] = color[0];
        data[offset + 1] = color[1];
        data[offset + 2] = color[2];
        data[offset + 3] = 255;
      }
    }
  }

  const fadedPhoto = (x, y) => [
    128 + ((x + y) % 108),
    132 + ((x * 2 + y) % 102),
    119 + ((x + y * 3) % 112)
  ];
  const photo = (x, y) => [
    72 + ((x + y * 2) % 145),
    88 + ((x * 3 + y) % 132),
    62 + ((x + y * 4) % 151)
  ];
  paint(0, 0, width, height, [251, 250, 246]);
  paint(55, 15, 423, 329, fadedPhoto);
  paint(445, 15, 911, 329, photo);
  paint(423, 0, 445, height, [3, 3, 2]);
  paint(911, 0, 925, height, [3, 3, 2]);
  [[6, 15], [329, 338]].forEach(([top, bottom]) => {
    paint(55, top, 423, bottom, [3, 3, 2]);
    paint(445, top, 911, bottom, [3, 3, 2]);
  });
  return { width, height, imageData: { data } };
}

function makeTiffEntry(tag, type, data, count) {
  return { tag, type, count, data: Uint8Array.from(data) };
}

function makeLittleEndianValues(type, values) {
  const bytesPerValue = type === 3 ? 2 : 4;
  const data = new Uint8Array(values.length * bytesPerValue);
  const view = new DataView(data.buffer);
  values.forEach((value, index) => {
    if (type === 3) view.setUint16(index * 2, value, true);
    else view.setUint32(index * 4, value, true);
  });
  return data;
}

function makeLittleEndianRational(numerator, denominator) {
  const data = new Uint8Array(8);
  const view = new DataView(data.buffer);
  view.setUint32(0, numerator, true);
  view.setUint32(4, denominator, true);
  return data;
}

function make16BitTiffSource() {
  const width = 4;
  const height = 3;
  const samples = 3;
  const data = new Uint8Array(width * height * samples * 2);
  const view = new DataView(data.buffer);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * samples * 2;
      view.setUint16(offset, 1000 + y * 100 + x * 3, true);
      view.setUint16(offset + 2, 20000 + y * 200 + x * 5, true);
      view.setUint16(offset + 4, 65000 - y * 300 - x * 7, true);
    }
  }

  const software = new TextEncoder().encode("Film scanner\0");
  const iccProfile = Uint8Array.from([0, 17, 34, 51, 68, 85, 102, 119]);
  return {
    width,
    height,
    data,
    littleEndian: true,
    bitsPerSample: [16, 16, 16],
    samplesPerPixel: samples,
    planarConfiguration: 1,
    photometricInterpretation: 2,
    compression: 5,
    predictor: 2,
    hasCfaPattern: false,
    entries: [
      makeTiffEntry(282, 5, makeLittleEndianRational(300, 1), 1),
      makeTiffEntry(283, 5, makeLittleEndianRational(300, 1), 1),
      makeTiffEntry(296, 3, makeLittleEndianValues(3, [2]), 1),
      makeTiffEntry(305, 2, software, software.length),
      makeTiffEntry(339, 3, makeLittleEndianValues(3, [1, 1, 1]), 3),
      makeTiffEntry(34675, 7, iccProfile, iccProfile.length)
    ],
    iccProfile
  };
}

async function main() {
  const analysis = makeSyntheticScan();
  state.image = { naturalWidth: analysis.width, naturalHeight: analysis.height };
  state.scaleX = 1;
  state.scaleY = 1;

  const vertical = runDetection(analysis, {
    threshold: 54,
    coverage: 0.72,
    inset: 2,
    orientation: "vertical"
  });
  assert.equal(vertical.stripCount, 2, "should detect two vertical film strips");
  assert.equal(vertical.frames.length, 4, "should detect four complete frames");
  assert.equal(vertical.frames[0].x, 52, "should inset from the left rail");
  assert.equal(vertical.frames[0].w, 376, "should inset from both side rails");
  assert.ok(vertical.frames[0].y >= 60 && vertical.frames[0].y <= 63, "should start below the top divider");
  assert.ok(vertical.frames[0].y + vertical.frames[0].h <= 570, "should end before the next divider");

  const automatic = runDetection(analysis, {
    threshold: 54,
    coverage: 0.72,
    inset: 0,
    orientation: "auto"
  });
  assert.equal(automatic.frames.length, 4, "automatic orientation should keep all frames");

  const edgeAnalysis = makeEdgeDualScan();
  state.image = { naturalWidth: edgeAnalysis.width, naturalHeight: edgeAnalysis.height };
  const edgeResult = runDetection(edgeAnalysis, {
    threshold: 54,
    coverage: 0.72,
    inset: 2,
    orientation: "auto"
  });
  assert.equal(edgeResult.orientation, "vertical", "dual vertical strips should win automatic orientation");
  assert.equal(edgeResult.stripCount, 2, "a strip with one missing rail should still be recovered");
  assert.deepEqual(Array.from(edgeResult.stripFrameCounts), [3, 3], "both strips should be split independently");
  assert.equal(edgeResult.recoveredStripCount, 1, "only the strip with a missing rail should use foreground recovery");
  assert.equal(edgeResult.edgeFrameCount, 4, "the first and last frame of each strip should use edge recovery");
  assert.equal(edgeResult.frames.length, 6, "edge-touching first and last photos should be retained");
  assert.ok(edgeResult.frames[0].y >= 19 && edgeResult.frames[0].y <= 23, "white margin before an unbounded edge frame should be trimmed");
  assert.ok(edgeResult.frames[2].y + edgeResult.frames[2].h >= 553, "the last frame should extend to the scan edge");

  const borderlessAnalysis = makeBorderlessPairScan();
  state.image = { naturalWidth: borderlessAnalysis.width, naturalHeight: borderlessAnalysis.height };
  const borderlessResult = runDetection(borderlessAnalysis, {
    threshold: 54,
    coverage: 0.72,
    inset: 2,
    orientation: "auto"
  });
  assert.equal(borderlessResult.stripCount, 2, "two rails should remain two independent strips");
  assert.deepEqual(Array.from(borderlessResult.stripFrameCounts), [1, 1], "a strip without horizontal dividers should still yield one edge frame");
  assert.equal(borderlessResult.edgeFrameCount, 2, "both borderless photos should be marked as edge frames");
  assert.equal(borderlessResult.frames.length, 2, "both borderless edge photos should be retained");

  const sharedRailAnalysis = makeSharedRailScan();
  state.image = { naturalWidth: sharedRailAnalysis.width, naturalHeight: sharedRailAnalysis.height };
  const sharedRailResult = runDetection(sharedRailAnalysis, {
    threshold: 54,
    coverage: 0.72,
    inset: 2,
    orientation: "vertical"
  });
  assert.equal(sharedRailResult.stripCount, 2, "a shared center rail should recover the strip with a missing outer rail");
  assert.deepEqual(Array.from(sharedRailResult.stripFrameCounts), [1, 1], "both sides of a shared rail should yield a frame");
  assert.equal(sharedRailResult.recoveredStripCount, 1, "only the missing outer-rail strip should be inferred");
  assert.equal(sharedRailResult.frames.length, 2, "the faded left photo should no longer be dropped");
  assert.ok(sharedRailResult.frames[0].x >= 54 && sharedRailResult.frames[0].x <= 59, "the left boundary should follow the white-paper to photo transition");
  assert.ok(sharedRailResult.frames[0].x + sharedRailResult.frames[0].w <= 423, "the shared center rail should be excluded from the left frame");
  const sharedRailAutomatic = runDetection(sharedRailAnalysis, {
    threshold: 54,
    coverage: 0.72,
    inset: 2,
    orientation: "auto"
  });
  assert.equal(sharedRailAutomatic.orientation, "vertical", "automatic layout should keep the shared-rail pair as two vertical strips");
  assert.equal(sharedRailAutomatic.frames.length, 2, "automatic layout should retain both sides of the shared rail");

  assert.equal(defaultPreviewRotation({ w: 120, h: 180 }), 90, "portrait crops should default to landscape preview");
  assert.equal(defaultPreviewRotation({ w: 180, h: 120 }), 0, "landscape crops should keep their preview angle");
  assert.deepEqual(
    JSON.parse(JSON.stringify(getRotatedSize(120, 180, 90))),
    { width: 180, height: 120 },
    "quarter-turn previews should swap display dimensions"
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(mapRotatedPointToSource(50, 20, 90, 100, 60))),
    { x: 20, y: 10 },
    "clicks on a rotated source view should map back to source coordinates"
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(mapRotatedPointToSource(80, 50, 180, 100, 60))),
    { x: 20, y: 10 },
    "half-turn source clicks should map back to source coordinates"
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(mapRotatedPointToSource(10, 80, 270, 100, 60))),
    { x: 20, y: 10 },
    "counter-clockwise source clicks should map back to source coordinates"
  );

  const rotatedFrame = { x: 0, y: 0, w: 120, h: 180, previewRotation: 90 };
  assert.deepEqual(
    JSON.parse(JSON.stringify(getFrameOutputSize(rotatedFrame))),
    { width: 180, height: 120 },
    "export dimensions should follow the preview rotation"
  );
  const exportedBlob = await cropToBlob(rotatedFrame, { mime: "image/png" }, 1);
  const exportRecord = canvasRecords[canvasRecords.length - 1];
  assert.equal(exportRecord.canvas.width, 180, "rotated export canvas should use preview width");
  assert.equal(exportRecord.canvas.height, 120, "rotated export canvas should use preview height");
  assert.deepEqual(exportRecord.translations[0], [180, 0], "rotated export should apply a quarter-turn transform");
  assert.equal(exportedBlob.type, "image/png", "rotated export should preserve the selected file format");

  assert.equal(getFileFormat({ name: "SCAN.BMP", type: "" }).mime, "image/bmp", "BMP should work without browser MIME data");
  assert.equal(getFileFormat({ name: "scan.bmp", type: "image/x-ms-bmp" }).ext, "bmp", "legacy BMP MIME data should be accepted");
  const bmpBlob = await cropToBlob(
    { x: 0, y: 0, w: 3, h: 2, previewRotation: 90 },
    { mime: "image/bmp", isBmp: true },
    1
  );
  const bmpBytes = new Uint8Array(await bmpBlob.arrayBuffer());
  const bmpView = new DataView(bmpBytes.buffer);
  assert.equal(bmpBlob.type, "image/bmp", "BMP export should use the BMP MIME type");
  assert.equal(String.fromCharCode(bmpBytes[0], bmpBytes[1]), "BM", "BMP export should contain a bitmap file header");
  assert.equal(bmpView.getInt32(18, true), 2, "rotated BMP width should follow the preview");
  assert.equal(bmpView.getInt32(22, true), 3, "rotated BMP height should follow the preview");
  assert.equal(bmpView.getUint16(28, true), 24, "BMP export should use lossless 24-bit BGR pixels");
  assert.equal(bmpBytes.length, 78, "BMP rows should use the required four-byte alignment");
  assert.deepEqual(Array.from(bmpBytes.slice(54, 57)), [30, 20, 10], "BMP pixels should be encoded in BGR order");

  const directoryEntries = new Map();
  const writtenFiles = [];
  const makeFileHandle = (name) => ({
    async createWritable() {
      return {
        async write(blob) { writtenFiles.push({ name, size: blob.size }); },
        async close() {}
      };
    }
  });
  directoryEntries.set("scan_01.jpg", makeFileHandle("scan_01.jpg"));
  const directoryHandle = {
    name: "exports",
    async getFileHandle(name, options = {}) {
      if (directoryEntries.has(name)) return directoryEntries.get(name);
      if (options.create) {
        const handle = makeFileHandle(name);
        directoryEntries.set(name, handle);
        return handle;
      }
      const error = new Error("Missing file");
      error.name = "NotFoundError";
      throw error;
    }
  };
  assert.equal(addFileNameSuffix("scan.tiff", 2), "scan (2).tiff", "file suffixes should preserve extensions");
  const savedNames = await saveFilesToDirectory([
    { name: "scan_01.jpg", blob: new Blob([Uint8Array.from([1, 2])]) },
    { name: "scan_02.jpg", blob: new Blob([Uint8Array.from([3])]) }
  ], directoryHandle);
  assert.deepEqual(Array.from(savedNames), ["scan_01 (1).jpg", "scan_02.jpg"], "batch save should avoid overwriting existing files");
  assert.deepEqual(writtenFiles.map((file) => file.name), Array.from(savedNames), "all files should be written after one directory selection");

  state.jobs = [
    { id: "film-a", frames: [{ checked: true }, { checked: false }] },
    { id: "film-b", frames: [{ checked: true }, { checked: true }] },
    { id: "film-c", frames: [{ checked: false }] }
  ];
  state.activeJobId = null;
  assert.deepEqual(
    Array.from(getSelectedExportJobs(), (job) => job.id),
    ["film-a", "film-b"],
    "cross-film export should include every job with selected frames"
  );
  state.jobs = [];

  let pickerCalls = 0;
  const pickerStartLocations = [];
  const rememberedDirectory = {
    kind: "directory",
    name: "remembered-exports"
  };
  sandbox.window.showDirectoryPicker = async (options) => {
    pickerCalls += 1;
    pickerStartLocations.push(options.startIn);
    return { kind: "directory", name: pickerCalls === 1 ? "new-exports" : "newer-exports" };
  };
  state.exportDirectoryHandle = rememberedDirectory;
  const replacementDirectory = await getWritableExportDirectory();
  assert.equal(pickerCalls, 1, "every export should open the directory picker");
  assert.equal(pickerStartLocations[0], rememberedDirectory, "the picker should start in the remembered directory");
  assert.equal(replacementDirectory.name, "new-exports", "the user may choose a different directory in the picker");
  assert.equal(state.exportDirectoryHandle.name, "new-exports", "the new choice should replace the remembered start location");
  await getWritableExportDirectory();
  assert.equal(pickerCalls, 2, "the next export should still open the picker");
  assert.equal(pickerStartLocations[1].name, "new-exports", "the next picker should start from the most recent choice");
  delete sandbox.window.showDirectoryPicker;
  state.exportDirectoryHandle = null;

  assert.equal(getFileFormat({ name: "SCAN.TIF", type: "" }).mime, "image/tiff", "TIFF should work without browser MIME data");
  assert.equal(getFileFormat({ name: "scan.tiff", type: "image/x-tiff" }).ext, "tiff", "TIFF should preserve its extension");

  const rgba = new Uint8Array(16 * 12 * 4);
  for (let i = 0; i < rgba.length; i += 4) {
    rgba[i] = i % 251;
    rgba[i + 1] = (i * 3) % 251;
    rgba[i + 2] = (i * 7) % 251;
    rgba[i + 3] = 255;
  }
  const encodedTiff = UTIF.encodeImage(rgba.buffer, 16, 12);
  const tiffIfds = UTIF.decode(encodedTiff);
  UTIF.decodeImage(encodedTiff, tiffIfds[0]);
  const decodedRgba = UTIF.toRGBA8(tiffIfds[0]);
  assert.equal(tiffIfds[0].width, 16, "exported TIFF should preserve width");
  assert.equal(tiffIfds[0].height, 12, "exported TIFF should preserve height");
  assert.equal(decodedRgba.length, rgba.length, "exported TIFF should contain all RGBA pixels");

  const source16 = make16BitTiffSource();
  state.tiffSource = source16;
  const preservedBlob = await cropToBlob(
    { x: 1, y: 0, w: 2, h: 3, previewRotation: 90 },
    { mime: "image/tiff", isTiff: true },
    1
  );
  const preservedBuffer = await preservedBlob.arrayBuffer();
  const preservedIfds = UTIF.decode(preservedBuffer);
  UTIF.decodeImage(preservedBuffer, preservedIfds[0], preservedIfds);
  assert.equal(preservedBlob.type, "image/tiff", "16-bit export should remain a TIFF blob");
  assert.equal(preservedIfds[0].width, 3, "rotated 16-bit crop should swap output width");
  assert.equal(preservedIfds[0].height, 2, "rotated 16-bit crop should swap output height");
  assert.deepEqual(Array.from(preservedIfds[0].t258), [16, 16, 16], "all RGB channels should retain 16-bit depth");
  assert.equal(preservedIfds[0].t259[0], 1, "lossless sample export should use uncompressed TIFF storage");
  assert.equal(preservedIfds[0].t282[0], 300, "horizontal resolution metadata should be preserved");
  assert.equal(preservedIfds[0].t283[0], 300, "vertical resolution metadata should be preserved");
  assert.deepEqual(Array.from(preservedIfds[0].t34675), Array.from(source16.iccProfile), "ICC profile bytes should be preserved");
  const preservedSamples = new DataView(
    preservedIfds[0].data.buffer,
    preservedIfds[0].data.byteOffset,
    preservedIfds[0].data.byteLength
  );
  assert.equal(preservedSamples.getUint16(0, true), 1203, "rotation should keep the first source pixel's full 16-bit red sample");
  assert.equal(preservedSamples.getUint16(2, true), 20405, "rotation should keep the first source pixel's full 16-bit green sample");
  assert.equal(preservedSamples.getUint16(4, true), 64393, "rotation should keep the first source pixel's full 16-bit blue sample");

  const directTiff = encodePreservedTiffCrop(source16, { x: 0, y: 1, w: 2, h: 1, previewRotation: 0 });
  const directIfd = UTIF.decode(directTiff)[0];
  assert.deepEqual(Array.from(directIfd.t258), [16, 16, 16], "direct TIFF crop should never pass through RGBA8");

  const bigEndianSource = {
    ...source16,
    littleEndian: false,
    entries: [makeTiffEntry(34675, 7, source16.iccProfile, source16.iccProfile.length)]
  };
  const bigEndianTiff = encodePreservedTiffCrop(bigEndianSource, { x: 1, y: 2, w: 1, h: 1, previewRotation: 0 });
  const bigEndianIfd = UTIF.decode(bigEndianTiff)[0];
  UTIF.decodeImage(bigEndianTiff, bigEndianIfd);
  const bigEndianSamples = new DataView(bigEndianIfd.data.buffer, bigEndianIfd.data.byteOffset, bigEndianIfd.data.byteLength);
  assert.equal(bigEndianSamples.getUint16(0, true), 1203, "big-endian TIFF should preserve the complete 16-bit sample value");
  assert.throws(
    () => encodePreservedTiffCrop({ ...source16, planarConfiguration: 2 }, { x: 0, y: 0, w: 1, h: 1 }),
    /Lossless TIFF crop is unavailable/,
    "unsupported layouts should stop instead of silently falling back to RGBA8"
  );

  console.log("Detection: 2 strips / 4 frames — OK");
  console.log("Edge recovery: missing rail / 2 strips / 6 frames — OK");
  console.log("Borderless pair: 2 strips / 2 edge frames — OK");
  console.log("Shared rail: inferred left boundary / 2 strips / 2 frames — OK");
  console.log("Rotation: flicker-free preview geometry and rotated export — OK");
  console.log("BMP: import detection and lossless 24-bit rotated export — OK");
  console.log("Batch save: picker opens at remembered directory / collision-safe files — OK");
  console.log("TIFF: 16-bit samples, rotation and metadata preservation — OK");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
