// YouTube の URL から動画 ID と開始秒を取り出す（エディタの URL 欄・取り込みで使う）。
// 対応: youtu.be/ID?t=83 / watch?v=ID&t=1m23s / &t=83s / shorts/ID / embed/ID?start=83 / 秒数なし / ID だけ
// tests/scenarios.mjs（Node）から直接読むので、値の import をするときは拡張子まで書く

export type YoutubeRef = { id: string; startSec: number | null };

const ID_RE = /^[A-Za-z0-9_-]{11}$/;

// "83" / "83s" / "1m23s" / "1h2m3s" → 秒。読めなければ null
export function parseYoutubeTime(t: string): number | null {
  const s = t.trim();
  if (/^\d+$/.test(s)) return Number(s);
  const m = s.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!m || !(m[1] || m[2] || m[3])) return null;
  return Number(m[1] ?? 0) * 3600 + Number(m[2] ?? 0) * 60 + Number(m[3] ?? 0);
}

export function parseYoutubeUrl(input: string): YoutubeRef | null {
  const raw = input.trim();
  if (!raw) return null;
  if (ID_RE.test(raw)) return { id: raw, startSec: null };
  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^(www\.|m\.|music\.)/, '');
  let id: string | null = null;
  if (host === 'youtu.be') {
    id = url.pathname.split('/')[1] ?? null;
  } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    const [, kind, rest] = url.pathname.split('/');
    if (kind === 'watch') id = url.searchParams.get('v');
    else if (kind === 'shorts' || kind === 'embed' || kind === 'live' || kind === 'v') id = rest ?? null;
  }
  if (!id || !ID_RE.test(id)) return null;
  // t は ?t= のほか #t= に付くこともある。embed は start
  const hash = new URLSearchParams(url.hash.replace(/^#/, ''));
  const t = url.searchParams.get('t') ?? url.searchParams.get('start') ?? hash.get('t');
  return { id, startSec: t == null ? null : parseYoutubeTime(t) };
}

// 83 → "1:23"、3723 → "1:02:03"
export function formatMmSs(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
}
