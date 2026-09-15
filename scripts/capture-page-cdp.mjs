import { writeFile } from "node:fs/promises";

const [url, outputPath, widthArg = "1252", heightArg = "900", scaleArg = "1"] = process.argv.slice(2);

if (!url || !outputPath) {
  throw new Error("Usage: node scripts/capture-page-cdp.mjs <url> <output.png> [width] [height] [deviceScaleFactor]");
}

const width = Number(widthArg);
const height = Number(heightArg);
const deviceScaleFactor = Number(scaleArg);
const targets = await fetch("http://127.0.0.1:9223/json").then((response) => response.json());
const target = targets.find((candidate) => candidate.type === "page" && candidate.webSocketDebuggerUrl);

if (!target) {
  throw new Error("No inspectable Chrome page found on port 9223");
}

const socket = new WebSocket(target.webSocketDebuggerUrl);
const pending = new Map();
let nextId = 0;

const opened = new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

await opened;

const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++nextId;
  pending.set(id, { resolve, reject });
  socket.send(JSON.stringify({ id, method, params }));
});

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
await send("Emulation.setDeviceMetricsOverride", {
  width,
  height,
  deviceScaleFactor,
  mobile: width <= 600,
});
await send("Page.navigate", { url });
await new Promise((resolve) => setTimeout(resolve, 4500));
await send("Runtime.evaluate", {
  expression: `(async () => {
    await document.fonts.ready;
    for (let y = 0; y < document.documentElement.scrollHeight; y += ${height}) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 450));
    }
    await Promise.race([
      Promise.all(Array.from(document.images, (image) => image.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          }))),
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]);
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
    window.scrollTo(0, 0);
    const style = document.createElement('style');
    style.textContent = '[data-scroll-reveal] { opacity: 1 !important; transform: none !important; translate: none !important; clip-path: none !important; visibility: visible !important; } html { scroll-behavior: auto !important; }';
    document.head.append(style);
    document.querySelectorAll('[data-reveal-pending]').forEach(el => el.removeAttribute('data-reveal-pending'));
    document.getAnimations().forEach(animation => { try { animation.finish(); } catch {} });
  })()`,
  awaitPromise: true,
});
await new Promise((resolve) => setTimeout(resolve, 2000));
const nav = await send("Runtime.evaluate", { expression: `(() => {
  const header = document.querySelector('header[data-scrolled]');
  if (!header) throw new Error('Navigation not found');
  header.style.setProperty('position', 'fixed', 'important');
  header.style.setProperty('top', '0', 'important');
  header.style.setProperty('background', '#092c3a', 'important');
  header.style.setProperty('transform', 'none', 'important');
  const r = header.getBoundingClientRect();
  return { x: 0, y: 0, width: innerWidth, height: r.height, scale: 1 };
})()`, returnByValue: true });
const navigation = await send('Page.captureScreenshot', { format: 'png', clip: nav.result.value });
await writeFile(outputPath.replace('.png', '-nav.png'), Buffer.from(navigation.data, 'base64'));
await send('Runtime.evaluate', { expression: `document.querySelector('header[data-scrolled]').style.setProperty('visibility', 'hidden', 'important')` });

const { cssContentSize } = await send("Page.getLayoutMetrics");
const screenshot = await send("Page.captureScreenshot", {
  format: "png",
  fromSurface: true,
  captureBeyondViewport: true,
  clip: {
    x: 0,
    y: 0,
    width: cssContentSize.width,
    height: cssContentSize.height,
    scale: 1,
  },
});

await writeFile(outputPath, Buffer.from(screenshot.data, "base64"));
socket.close();

console.log(JSON.stringify({
  url,
  outputPath,
  width: cssContentSize.width,
  height: cssContentSize.height,
  deviceScaleFactor,
}));
