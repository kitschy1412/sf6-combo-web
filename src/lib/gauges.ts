export function parseTokens(s: string): string[] {
  return String(s ?? '').split('>').map(t => t.trim()).filter(Boolean);
}

// OD 技（Dゲージ2）: 末尾が PP / KK のコマンドと、「溜めODワール」のように OD を含む語。
// 6KK（フリップ）は KK で終わるが通常の特殊技なので数えない
export function isOdMove(tok: string): boolean {
  if (tok === '6KK') return false;
  return /(PP|KK)$/.test(tok) || /OD/.test(tok);
}

export function calcGaugesFromSegs(pathSegs: string[]): { saGauge: number; dGauge: number } {
  const toks = pathSegs.flatMap(seg => parseTokens(seg));
  let saGauge = 0, dGauge = 0;
  for (const tok of toks) {
    if      (tok === '236236K') saGauge = 1;
    else if (tok === '214214K') saGauge = 2;
    else if (tok === '236236P') saGauge = 3;
    if      (tok === 'DR') dGauge += 3;
    else if (tok === 'CR') dGauge += 1;
    else if (tok === 'DI') dGauge += 1;
    else if (isOdMove(tok)) dGauge += 2;
  }
  return { saGauge, dGauge };
}

// 絞り込み用のゲージ区分（ルート単位）。SA を使えば SA、Dゲージ（DR・CR・DI・OD技）だけなら OD
export type GaugeClass = 'ノーゲージ' | 'OD' | 'SA';
export const GAUGE_CLASSES: GaugeClass[] = ['ノーゲージ', 'OD', 'SA'];
export function gaugeClassFromSegs(pathSegs: string[]): GaugeClass {
  const { saGauge, dGauge } = calcGaugesFromSegs(pathSegs);
  return saGauge > 0 ? 'SA' : dGauge > 0 ? 'OD' : 'ノーゲージ';
}

// 絞り込みのチップの説明（title）。OD はラッシュも含むので、名前だけだと OD技だけに見える
export const GAUGE_CLASS_HINTS: Record<GaugeClass, string> = {
  'ノーゲージ': 'Dゲージも SA ゲージも使わない',
  'OD': 'Dゲージを使う（OD技・ラッシュ・CR）。SA は使わない',
  'SA': 'SA を使う',
};

// コンボのルートに出てくるゲージ区分（GAUGE_CLASSES の順・重複なし）。一覧は、どれか1つのルートがチップに合えば出す
export const gaugeClassesOf = (routes: { pathSegments: string[] }[]): GaugeClass[] =>
  GAUGE_CLASSES.filter(g => routes.some(r => gaugeClassFromSegs(r.pathSegments) === g));
