export function parseTokens(s: string): string[] {
  return String(s ?? '').split('>').map(t => t.trim()).filter(Boolean);
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
    else if (/PP$/.test(tok) || /KK$/.test(tok)) dGauge += 2;
  }
  return { saGauge, dGauge };
}

// 絞り込み用のゲージ区分（ルート単位）。SA を使えば SA、Dゲージ（DR・CR・DI・OD技）だけなら OD
export type GaugeClass = 'ノーゲージ' | 'OD' | 'SA';
export function gaugeClassFromSegs(pathSegs: string[]): GaugeClass {
  const { saGauge, dGauge } = calcGaugesFromSegs(pathSegs);
  return saGauge > 0 ? 'SA' : dGauge > 0 ? 'OD' : 'ノーゲージ';
}
