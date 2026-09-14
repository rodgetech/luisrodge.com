import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(projectRoot, "public");
const outputDir = path.join(publicDir, "social");
const outputPath = path.join(outputDir, "made-by-lr-og.png");

const WIDTH = 1200;
const HEIGHT = 630;
const PAPER = "#fdfdfc";
const INK = "#171b22";
const MUTED_INK = "#62666d";
const RULE = "#e1e1de";
const MAT = "#d6d6d6";

async function loadWordmark() {
  return sharp(path.join(publicDir, "brand/madebylr-wordmark.png"))
    .resize({ width: 300 })
    .png()
    .toBuffer();
}

async function makeProjectTile(imagePath, width, height, padding = 10) {
  const screenshot = await sharp(imagePath)
    .resize(width - padding * 2, height - padding * 2, {
      fit: "cover",
      position: "centre",
    })
    .png()
    .toBuffer();

  const tile = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: MAT,
    },
  })
    .composite([{ input: screenshot, left: padding, top: padding }])
    .png()
    .toBuffer();

  const mask = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" rx="8" fill="#fff"/></svg>`,
  );

  return sharp(tile).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
}

const textLayer = Buffer.from(`
  <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${WIDTH}" height="${HEIGHT}" fill="${PAPER}"/>
    <rect x="556" width="644" height="${HEIGHT}" fill="#eeeeec"/>
    <line x1="522.5" y1="54" x2="522.5" y2="576" stroke="${RULE}"/>
    <rect x="522" y="54" width="2" height="76" fill="${INK}"/>

    <text x="64" y="216" fill="${INK}" font-family="Helvetica Neue, Arial, sans-serif" font-size="47" font-weight="600" letter-spacing="-2.1">
      <tspan x="64" dy="0">Websites worth</tspan>
      <tspan x="64" dy="51">remembering.</tspan>
    </text>
    <text x="64" y="327" fill="${INK}" font-family="Georgia, Times New Roman, serif" font-size="39" font-style="italic" letter-spacing="-1.1">Products people return to.</text>

    <text x="64" y="395" fill="${MUTED_INK}" font-family="Helvetica Neue, Arial, sans-serif" font-size="21" font-weight="400">
      <tspan x="64" dy="0">Give people a clear reason to choose you</tspan>
      <tspan x="64" dy="32">and a good reason to come back.</tspan>
    </text>

    <line x1="64" y1="520.5" x2="470" y2="520.5" stroke="${RULE}"/>
    <rect x="64" y="519" width="72" height="3" fill="${INK}"/>
    <text x="64" y="562" fill="${INK}" font-family="Helvetica Neue, Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="-.3">luisrodge.com</text>
  </svg>
`);

await mkdir(outputDir, { recursive: true });

const [wordmark, heroProject, secondaryProject, tertiaryProject] = await Promise.all([
  loadWordmark(),
  makeProjectTile(path.join(publicDir, "projects/reels/jetcars.webp"), 588, 341, 12),
  makeProjectTile(path.join(publicDir, "projects/reels/jd-architecture.webp"), 282, 166, 9),
  makeProjectTile(path.join(publicDir, "projects/reels/esigna.webp"), 282, 166, 9),
]);

await sharp(textLayer)
  .composite([
    { input: wordmark, left: 64, top: 58 },
    { input: heroProject, left: 584, top: 48 },
    { input: secondaryProject, left: 584, top: 415 },
    { input: tertiaryProject, left: 890, top: 415 },
  ])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

console.log(outputPath);
