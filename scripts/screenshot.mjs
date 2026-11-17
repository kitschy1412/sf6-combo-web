// ヘッドレス Edge で画面のスクリーンショットを撮る（依存なし・CDP 直叩き）。
// 使い方: node scripts/screenshot.mjs <shots.json> <出力フォルダ>
//   shots.json: [{ name, url, width?, height?, chunk?: 1000, maxChunks?: 4, startY?, startSelector?, actions?: [JS式], hover?: セレクタ, evals?: [JS式] }]
//   - 縦長のページは chunk(px) ごとに name_0.png, name_1.png… に分けて保存する
//   - actions はクリック等を行う JS（例: "document.getElementById('btn-add-combo-top').click()"）
//   - hover は actions の後でその要素の中心へマウスを動かす（:hover は JS の click では出せない）。撮影後にマウスは左上へ戻す
//   - startSelector を指定するとその要素の位置から撮る。固定ヘッダーが重なるときは actions で position を static にする
//   - 出力はプロジェクト外（スクラッチパッド等）に置く。Edge は終了せず 9333 番で起動したまま残る
import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const [, , shotsPath, outDir] = process.argv;
const shots = JSON.parse(readFileSync(shotsPath, 'utf8'));
mkdirSync(outDir, { recursive: true });

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const PORT = 9333;
const profile = join(tmpdir(), 'sf6-screenshot-edge-profile');
let proc = null;
try { await fetch(`http://127.0.0.1:${PORT}/json/version`); } catch {
  proc = spawn(EDGE, [
    '--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', '--disable-gpu', '--hide-scrollbars',
    '--disable-extensions', 'about:blank',
  ], { stdio: 'ignore', detached: true });
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
let targets = [];
for (let i = 0; i < 150; i++) {
  try {
    targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
    if (targets.some(t => t.type === 'page')) break;
  } catch {}
  await sleep(200);
}
const page = targets.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r, { once: true }));

let id = 0;
const pending = new Map();
const listeners = [];
ws.addEventListener('message', (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { res, rej } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? rej(new Error(JSON.stringify(msg.error))) : res(msg.result);
  } else if (msg.method) {
    for (const l of listeners) l(msg);
  }
});
const send = (method, params = {}) => new Promise((res, rej) => {
  const i = ++id;
  pending.set(i, { res, rej });
  ws.send(JSON.stringify({ id: i, method, params }));
});
const waitEvent = (name, timeout = 15000) => new Promise((res) => {
  const t = setTimeout(() => res(null), timeout);
  const l = (m) => { if (m.method === name) { clearTimeout(t); listeners.splice(listeners.indexOf(l), 1); res(m); } };
  listeners.push(l);
});
const logs = [];
listeners.push((m) => {
  if (m.method === 'Runtime.exceptionThrown') logs.push(`[exception] ${m.params.exceptionDetails.exception?.description ?? m.params.exceptionDetails.text}`);
  if (m.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(m.params.type)) logs.push(`[console.${m.params.type}] ${m.params.args.map(a => a.value ?? a.description).join(' ')}`);
});

await send('Page.enable');
await send('Runtime.enable');

const evaluate = async (expr) => {
  const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) return `!! ${r.exceptionDetails.exception?.description ?? r.exceptionDetails.text}`;
  return r.result.value;
};

for (const s of shots) {
  const width = s.width ?? 1440, height = s.height ?? 1000;
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
  logs.length = 0;
  const loaded = waitEvent('Page.loadEventFired');
  await send('Page.navigate', { url: s.url });
  await loaded;
  await sleep(600);
  for (const a of s.actions ?? []) {
    const r = await evaluate(a);
    if (r !== undefined) console.log(`  [${s.name}] action -> ${typeof r === 'string' ? r : JSON.stringify(r)}`);
    await sleep(350);
  }
  if (s.hover) {
    const point = await evaluate(`(() => { const el = document.querySelector(${JSON.stringify(s.hover)}); el.scrollIntoView({ block: 'center' }); const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; })()`);
    await send('Input.dispatchMouseEvent', { type: 'mouseMoved', ...point });
    await sleep(350);
  }
  for (const e of s.evals ?? []) {
    const r = await evaluate(e);
    console.log(`  [${s.name}] eval -> ${typeof r === 'string' ? r : JSON.stringify(r)}`);
  }
  const metrics = await send('Page.getLayoutMetrics');
  const fullH = Math.ceil(metrics.cssContentSize.height);
  const chunk = s.chunk ?? 1000, maxChunks = s.maxChunks ?? 4;
  let y = s.startY ?? 0, n = 0;
  if (s.startSelector) {
    const top = await evaluate(`(() => { const el = document.querySelector(${JSON.stringify(s.startSelector)}); return el ? Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - 40)) : 0; })()`);
    y = typeof top === 'number' ? top : 0;
  }
  while (y < fullH && n < maxChunks) {
    const h = Math.min(chunk, fullH - y);
    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y, width, height: h, scale: 1 } });
    const file = join(outDir, `${s.name}_${n}.png`);
    writeFileSync(file, Buffer.from(shot.data, 'base64'));
    y += chunk; n++;
  }
  if (s.hover) await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 0, y: 0 });
  console.log(`${s.name}: fullHeight=${fullH}px, saved ${n} chunk(s)${logs.length ? '\n    ' + logs.join('\n    ') : ''}`);
}

ws.close();
// keep browser running for later batches
process.exit(0);
