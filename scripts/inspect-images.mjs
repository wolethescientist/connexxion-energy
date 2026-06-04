import sharp from "sharp";
import fs from "node:fs";

const files = [
  ...fs.readdirSync("public").filter((f) => /\.(jpe?g)$/i.test(f)).map((f) => "public/" + f),
  ...fs.readdirSync("public/images").map((f) => "public/images/" + f),
];

for (const f of files) {
  const m = await sharp(f).metadata();
  const kb = (fs.statSync(f).size / 1024).toFixed(0);
  const dim = `${m.width}x${m.height}`;
  console.log(`${kb.padStart(5)} KB  ${dim.padEnd(11)}  ${f}`);
}
