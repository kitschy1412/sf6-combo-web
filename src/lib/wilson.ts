/**
 * Wilson Score Lower Bound（95%信頼区間）
 * 投票数が少ないコンボの過信頼を防ぐ
 */
export function wilsonScore(positive: number, total: number): number {
  if (total === 0) return 0;
  const z = 1.96;
  const p = positive / total;
  const numerator =
    p + (z * z) / (2 * total) -
    z * Math.sqrt((p * (1 - p) + (z * z) / (4 * total)) / total);
  const denominator = 1 + (z * z) / total;
  return Math.max(0, numerator / denominator);
}

/** Wilson Scoreをラベルに変換 */
export function scoreLabel(score: number, total: number = 0): string {
  if (total === 0) return '❓ 未検証';
  if (score >= 0.8) return '✅ 高信頼';
  if (score >= 0.6) return '🟡 確認中';
  if (score >= 0.3) return '🔴 要注意';
  return '⚠️ データ少';
}
