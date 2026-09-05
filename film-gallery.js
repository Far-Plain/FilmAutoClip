(function () {
  "use strict";

  const hero = document.querySelector("#filmHero");
  const motionPath = document.querySelector("#filmMotionPath");
  const photoLayer = document.querySelector("#filmPhotoLayer");
  const sprocketLayer = document.querySelector("#filmSprocketLayer");
  if (!hero || !motionPath || !photoLayer || !sprocketLayer) return;

  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const SUPPORTED_IMAGE = /\.(?:avif|bmp|gif|jpe?g|png|webp)$/i;
  const fileNameSorter = new Intl.Collator("zh-CN", {
    numeric: true,
    sensitivity: "base"
  });
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const frameHeight = 126;
  const frameGap = 12;
  const travelSpeed = 0.018;
  const sprocketPitch = 27;
  const sprocketOffset = 79;
  const frames = [];
  const sprockets = [];
  const pathLength = motionPath.getTotalLength();
  let cycleLength = pathLength;
  let travelled = 0;
  let lastTimestamp = 0;
  let paused = false;

  function createSvgElement(tagName, attributes = {}) {
    const element = document.createElementNS(SVG_NAMESPACE, tagName);
    Object.entries(attributes).forEach(([name, value]) => {
      element.setAttribute(name, String(value));
    });
    return element;
  }

  function galleryItemFromName(value) {
    if (typeof value !== "string") return null;

    const fileName = value
      .trim()
      .replace(/\\/g, "/")
      .replace(/^\.?\/?image\//i, "");

    if (!fileName || fileName.includes("/") || fileName.includes("..") || !SUPPORTED_IMAGE.test(fileName)) {
      return null;
    }

    return {
      fileName,
      source: `image/${encodeURIComponent(fileName)}`
    };
  }

  function manifestImages() {
    const manifest = Array.isArray(window.FILM_GALLERY_IMAGES)
      ? window.FILM_GALLERY_IMAGES
      : [];

    return manifest
      .map(galleryItemFromName)
      .filter(Boolean)
      .sort((left, right) => fileNameSorter.compare(left.fileName, right.fileName));
  }

  async function directoryImages() {
    if (window.location.protocol === "file:") return [];

    try {
      const directoryUrl = new URL("image/", document.baseURI);
      const response = await fetch(directoryUrl, { cache: "no-store" });
      if (!response.ok) return [];

      const listing = new DOMParser().parseFromString(await response.text(), "text/html");
      const items = Array.from(listing.querySelectorAll("a[href]"), (link) => {
        try {
          const resolved = new URL(link.getAttribute("href"), response.url);
          if (!resolved.pathname.startsWith(directoryUrl.pathname)) return null;

          const relativePath = resolved.pathname.slice(directoryUrl.pathname.length);
          if (!relativePath || relativePath.includes("/")) return null;

          const fileName = decodeURIComponent(relativePath);
          if (!SUPPORTED_IMAGE.test(fileName)) return null;
          return { fileName, source: resolved.href };
        } catch (_error) {
          return null;
        }
      }).filter(Boolean);

      const uniqueItems = new Map();
      items.forEach((item) => uniqueItems.set(item.fileName.toLocaleLowerCase(), item));
      return Array.from(uniqueItems.values())
        .sort((left, right) => fileNameSorter.compare(left.fileName, right.fileName));
    } catch (_error) {
      return [];
    }
  }

  async function getGalleryImages() {
    const discovered = await directoryImages();
    return discovered.length ? discovered : manifestImages();
  }

  function fillGallery(items) {
    if (!items.length) return [];

    const minimumFrameCount = 12;
    const filled = [];
    while (filled.length < Math.max(minimumFrameCount, items.length)) {
      filled.push(...items);
    }
    return filled.slice(0, Math.max(minimumFrameCount, items.length));
  }

  function setFrameGeometry(frame, ratio) {
    frame.width = Math.max(92, Math.min(226, frameHeight * ratio));
    const inset = 4;
    const x = -frame.width / 2;
    const y = -frameHeight / 2;

    frame.backdrop.setAttribute("x", String(x));
    frame.backdrop.setAttribute("y", String(y));
    frame.backdrop.setAttribute("width", String(frame.width));
    frame.backdrop.setAttribute("height", String(frameHeight));
    frame.image.setAttribute("x", String(x + inset));
    frame.image.setAttribute("y", String(y + inset));
    frame.image.setAttribute("width", String(frame.width - inset * 2));
    frame.image.setAttribute("height", String(frameHeight - inset * 2));
  }

  function layoutFrames() {
    let cursor = 0;
    frames.forEach((frame) => {
      frame.baseDistance = cursor + frame.width / 2;
      cursor += frame.width + frameGap;
    });
    cycleLength = Math.max(cursor, pathLength + 1);
  }

  function createPhotoFrame(item) {
    const group = createSvgElement("g", {
      class: "svg-film-frame",
      "aria-hidden": "true"
    });
    const backdrop = createSvgElement("rect", {
      class: "svg-film-frame-backdrop",
      rx: 1
    });
    const image = createSvgElement("image", {
      class: "svg-film-photo",
      href: item.source,
      preserveAspectRatio: "xMidYMid meet"
    });
    const frame = {
      group,
      backdrop,
      image,
      width: 170,
      baseDistance: 0
    };

    setFrameGeometry(frame, 4 / 3);
    group.append(backdrop, image);
    photoLayer.append(group);

    const probe = new Image();
    probe.decoding = "async";
    probe.addEventListener("load", () => {
      setFrameGeometry(frame, probe.naturalWidth / probe.naturalHeight);
      layoutFrames();
      renderScene();
    }, { once: true });
    probe.addEventListener("error", () => group.classList.add("is-broken"), { once: true });
    probe.src = item.source;

    return frame;
  }

  function pathPosition(distance) {
    const sampleDistance = 3;
    const position = Math.max(0, Math.min(pathLength, distance));
    const before = motionPath.getPointAtLength(Math.max(0, position - sampleDistance));
    const after = motionPath.getPointAtLength(Math.min(pathLength, position + sampleDistance));
    const point = motionPath.getPointAtLength(position);
    const angle = Math.atan2(after.y - before.y, after.x - before.x);

    return {
      point,
      angle,
      angleDegrees: angle * 180 / Math.PI,
      normalX: -Math.sin(angle),
      normalY: Math.cos(angle)
    };
  }

  function renderFrames() {
    frames.forEach((frame) => {
      const distance = (frame.baseDistance + travelled) % cycleLength;
      if (distance > pathLength) {
        frame.group.setAttribute("visibility", "hidden");
        return;
      }

      const { point, angleDegrees } = pathPosition(distance);
      frame.group.setAttribute("visibility", "visible");
      frame.group.setAttribute(
        "transform",
        `translate(${point.x.toFixed(2)} ${point.y.toFixed(2)}) rotate(${angleDegrees.toFixed(2)})`
      );
    });
  }

  function createSprockets() {
    const count = Math.ceil(pathLength / sprocketPitch) + 2;
    for (let index = 0; index < count; index += 1) {
      const upper = createSvgElement("rect", {
        class: "svg-film-sprocket",
        x: -7,
        y: -5,
        width: 14,
        height: 10,
        rx: 1
      });
      const lower = upper.cloneNode(false);
      sprocketLayer.append(upper, lower);
      sprockets.push({ upper, lower, baseDistance: index * sprocketPitch });
    }
  }

  function renderSprockets() {
    const phase = travelled % sprocketPitch;
    sprockets.forEach((pair) => {
      const distance = pair.baseDistance + phase - sprocketPitch;
      if (distance < 0 || distance > pathLength) {
        pair.upper.setAttribute("visibility", "hidden");
        pair.lower.setAttribute("visibility", "hidden");
        return;
      }

      const { point, normalX, normalY, angleDegrees } = pathPosition(distance);
      const upperX = point.x - normalX * sprocketOffset;
      const upperY = point.y - normalY * sprocketOffset;
      const lowerX = point.x + normalX * sprocketOffset;
      const lowerY = point.y + normalY * sprocketOffset;

      pair.upper.setAttribute("visibility", "visible");
      pair.lower.setAttribute("visibility", "visible");
      pair.upper.setAttribute("transform", `translate(${upperX.toFixed(2)} ${upperY.toFixed(2)}) rotate(${angleDegrees.toFixed(2)})`);
      pair.lower.setAttribute("transform", `translate(${lowerX.toFixed(2)} ${lowerY.toFixed(2)}) rotate(${angleDegrees.toFixed(2)})`);
    });
  }

  function renderScene() {
    renderFrames();
    renderSprockets();
  }

  function animate(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    if (!paused && !document.hidden) {
      travelled = (travelled + (timestamp - lastTimestamp) * travelSpeed) % cycleLength;
    }
    lastTimestamp = timestamp;
    renderScene();
    window.requestAnimationFrame(animate);
  }

  async function initializeGallery() {
    const items = fillGallery(await getGalleryImages());
    items.forEach((item) => frames.push(createPhotoFrame(item)));
    layoutFrames();
    createSprockets();
    renderScene();

    if (!reduceMotion) {
      window.requestAnimationFrame(animate);
    }
  }

  hero.addEventListener("pointerenter", () => { paused = true; });
  hero.addEventListener("pointerleave", () => { paused = false; });
  document.addEventListener("visibilitychange", () => { lastTimestamp = 0; });
  initializeGallery();
})();
