"use strict";

const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const imageDirectory = path.join(projectRoot, "image");
const manifestPath = path.join(projectRoot, "image-manifest.js");
const supportedImage = /\.(?:avif|bmp|gif|jpe?g|png|webp)$/i;

const files = fs.readdirSync(imageDirectory, { withFileTypes: true })
  .filter((entry) => entry.isFile() && supportedImage.test(entry.name))
  .map((entry) => entry.name)
  .sort(new Intl.Collator("zh-CN", { numeric: true, sensitivity: "base" }).compare);

const manifest = `window.FILM_GALLERY_IMAGES = Object.freeze(${JSON.stringify(files, null, 2)});\n`;
fs.writeFileSync(manifestPath, manifest, "utf8");

console.log(`Gallery manifest updated: ${files.length} image(s).`);
