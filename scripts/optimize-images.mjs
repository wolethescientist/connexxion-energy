/**
 * One-off image optimizer.
 * - Backs up every source image to image-originals/ (only once).
 * - Recompresses in place: portraits capped at 600px, hero/service at 1600px.
 * - Prints base64 blur placeholders for the hero slides (paste into content.ts).
 *
 * Run: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const BACKUP = "image-originals";

const portraits = [
  "public/emerhor1.jpg",
  "public/maxwell.jpeg",
  "public/rotimi.jpeg",
  "public/lauretta.jpeg",
];

const scenes = fs
  .readdirSync("public/images")
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .map((f) => "public/images/" + f);

const heroFiles = [
  "public/images/hero-oilpump.jpg",
  "public/images/downstream-refinery.jpg",
  "public/images/midstream-pipeline.jpg",
  "public/images/marine-tanker.jpg",
];

function backup(file) {
  const dest = path.join(BACKUP, file);
  if (fs.existsSync(dest)) return; // never overwrite an existing backup
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(file, dest);
}

async function recompress(file, maxWidth, quality) {
  backup(file);
  const before = fs.statSync(file).size;
  const input = path.join(BACKUP, file); // optimize from the pristine original
  const buf = await sharp(input)
    .rotate() // respect EXIF orientation
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(file, buf);
  const after = fs.statSync(file).size;
  console.log(
    `  ${file.padEnd(38)} ${(before / 1024).toFixed(0).padStart(5)} KB -> ${(after / 1024)
      .toFixed(0)
      .padStart(4)} KB`
  );
}

async function blurDataURL(file) {
  const buf = await sharp(path.join(BACKUP, file))
    .rotate()
    .resize({ width: 20 })
    .jpeg({ quality: 45 })
    .toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

console.log("Recompressing portraits (max 600px, q82):");
for (const f of portraits) await recompress(f, 600, 82);

console.log("\nRecompressing scenes (max 1600px, q80):");
for (const f of scenes) await recompress(f, 1600, 80);

console.log("\nHero blur placeholders — paste each into the matching slide in content.ts:\n");
for (const f of heroFiles) {
  const url = await blurDataURL(f);
  console.log(`/${f.replace(/^public\//, "")}\n${url}\n`);
}
