import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(projectRoot, "public");
const outputDir = path.join(publicDir, "social");
const outputPath = path.join(outputDir, "luis-rodriguez-og.png");

const WIDTH = 1200;
const HEIGHT = 630;
const INK = "#0a0a0a";
const MUTED = "#737373";

async function roundedCircle(file, size) {
  const mask = Buffer.from(`<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`);
  return sharp(file).resize(size, size, { fit: "cover" }).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
}

async function screenshotCard(file, width, height) {
  const shot = await sharp(file).resize(width, height, { fit: "cover", position: "top" }).png().toBuffer();
  const mask = Buffer.from(`<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="18" fill="#fff"/></svg>`);
  return sharp(shot).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
}

// Dot grid fading out from the top, like the homepage's identity column.
const dots = Array.from({ length: Math.ceil(WIDTH / 22) * 12 }, (_, i) => {
  const x = (i % Math.ceil(WIDTH / 22)) * 22 + 1;
  const y = Math.floor(i / Math.ceil(WIDTH / 22)) * 22 + 1;
  return `<circle cx="${x}" cy="${y}" r="1" fill="${INK}" fill-opacity="${Math.max(0, 0.12 - y / 2200).toFixed(3)}"/>`;
}).join("");

const base = Buffer.from(`
  <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${WIDTH}" height="${HEIGHT}" fill="#fff"/>
    ${dots}
    <text x="64" y="252" fill="${INK}" font-family="Helvetica Neue, Arial, sans-serif" font-size="54" font-weight="600" letter-spacing="-1.8">Luis Rodriguez</text>
    <text fill="${MUTED}" font-family="Helvetica Neue, Arial, sans-serif" font-size="25" letter-spacing="-.2">
      <tspan x="64" y="306">Software engineer from Belize.</tspan>
      <tspan x="64" y="342">I build products people use every day.</tspan>
    </text>
    <rect x="64" y="404" width="268" height="44" rx="22" fill="#f5f5f5"/>
    <circle cx="88" cy="426" r="6" fill="#35c26d"/>
    <text x="104" y="433" fill="${INK}" font-family="Helvetica Neue, Arial, sans-serif" font-size="19" font-weight="500">esigna · $500+ revenue</text>
    <text x="64" y="566" fill="${INK}" font-family="Helvetica Neue, Arial, sans-serif" font-size="20" font-weight="600">luisrodge.com</text>
    <rect x="620" y="96" width="532" height="438" rx="20" fill="#fff" stroke="#00000014" stroke-width="2"/>
  </svg>
`);

await mkdir(outputDir, { recursive: true });

const [avatar, shot] = await Promise.all([
  roundedCircle(path.join(publicDir, "me.png"), 96),
  screenshotCard(path.join(publicDir, "projects/esigna.webp"), 516, 422),
]);

await sharp(base)
  .composite([
    { input: avatar, left: 64, top: 96 },
    { input: shot, left: 628, top: 104 },
  ])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

console.log(outputPath);
