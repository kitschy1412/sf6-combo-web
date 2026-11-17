// キャラ対策を「相手キャラ → 強い技・連携 → 対策」にまとめる（/mock/vs/ の一覧と相手キャラのページで共通）。
// 入力の MatchupEntry は動画1本 × 相手キャラ1人ぶん（src/mock-data/rashid.ts）。
// tests/scenarios.mjs（Node）から直接読むので、値の import をするときは拡張子まで書く
import type { MatchupEntry, MatchupPerspective, MatchupPoint } from '../mock-data/rashid';
import { CHARACTERS, type CharacterInfo } from './characters.ts';

// ポイントに、出典の動画（entry）を付けたもの
export type SourcedPoint = MatchupPoint & { entry: MatchupEntry };

export type ThreatGroup = {
  anchor: string;            // ページ内リンク用（t1, t2, …。並び順で振る）
  name: string;
  about?: string;
  points: SourcedPoint[];    // 共通 → ラシード目線、それぞれ新しい動画から
  perspectives: MatchupPerspective[];
};

export type OpponentMatchups = CharacterInfo & {
  entries: MatchupEntry[];
  threats: ThreatGroup[];    // 対策の多い順（同じなら先に出てきた順）
  general: SourcedPoint[];   // 特定の技・連携に結びつかない、立ち回り全般の対策
  pointCount: number;
  videoCount: number;
};

const PERSPECTIVE_ORDER: Record<MatchupPerspective, number> = { '共通': 0, 'ラシード': 1 };

// 新しい順（同じ日なら共通を先）
const byEntry = (a: MatchupEntry, b: MatchupEntry) =>
  PERSPECTIVE_ORDER[a.perspective] - PERSPECTIVE_ORDER[b.perspective] || b.publishedAt.localeCompare(a.publishedAt);

export function groupOpponent(info: CharacterInfo, all: MatchupEntry[]): OpponentMatchups {
  const entries = all.filter((e) => e.opponent === info.en).sort(byEntry);
  const groups = new Map<string, { name: string; about?: string; points: SourcedPoint[]; first: number }>();
  const general: SourcedPoint[] = [];
  let seq = 0;
  for (const entry of entries) {
    for (const t of entry.threats) {
      const g = groups.get(t.name);
      if (!g) groups.set(t.name, { name: t.name, about: t.about, points: [], first: seq++ });
      else if (!g.about && t.about) g.about = t.about;
    }
    for (const p of entry.points) {
      const sp: SourcedPoint = { ...p, entry };
      if (p.threats.length === 0) { general.push(sp); continue; }
      for (const name of p.threats) {
        let g = groups.get(name);
        if (!g) { g = { name, points: [], first: seq++ }; groups.set(name, g); }
        g.points.push(sp);
      }
    }
  }
  const threats = [...groups.values()]
    .filter((g) => g.points.length > 0)
    .sort((a, b) => b.points.length - a.points.length || a.first - b.first)
    .map((g, i) => ({
      anchor: `t${i + 1}`,
      name: g.name,
      ...(g.about ? { about: g.about } : {}),
      points: g.points,
      perspectives: [...new Set(g.points.map((p) => p.entry.perspective))].sort((a, b) => PERSPECTIVE_ORDER[a] - PERSPECTIVE_ORDER[b]),
    }));
  return {
    ...info,
    entries,
    threats,
    general,
    pointCount: entries.reduce((n, e) => n + e.points.length, 0),
    videoCount: new Set(entries.map((e) => e.youtubeId)).size,
  };
}

// キャラ一覧の順に全員（対策が無いキャラも入る）
export function groupAll(all: MatchupEntry[]): OpponentMatchups[] {
  return CHARACTERS.map((c) => groupOpponent(c, all));
}

// 出す対策。共通が既定で、キャラを選んでいればそのキャラ目線の対策を足す（2026-11-16 ユーザー回答）。
// 目線（perspective）の値はキャラの日本語名（'ラシード'）なので、選んだキャラの ja と比べる
export function visibleMatchups(all: MatchupEntry[], selected?: CharacterInfo): MatchupEntry[] {
  return all.filter((e) => e.perspective === '共通' || e.perspective === selected?.ja);
}

// 古い時期（Year 3 より前）の動画か。注意の印を付ける
export const isOldEra = (patchVersion: string) => patchVersion === 'Y1' || patchVersion === 'Y2';
