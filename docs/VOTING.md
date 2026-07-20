# 投票システム

## エンドポイント
`POST /api/vote` — `src/pages/api/vote.ts`

リクエスト: `{ combo_id: number, is_working: boolean, has_error?: boolean }`
レスポンス: `{ working, total, errors, score }`

## IP制限
- `clientAddress`（fallback: `x-forwarded-for`）を SHA-256 ハッシュ化して `votes.ip_hash` に保存
- 同一 `combo_id` × `ip_hash` で 24時間以内の重複投票は 429
- 生IPは保存しない

## スコアリング
`src/lib/wilson.ts` の `wilsonScore(positive, total)` — 95%信頼区間下限。
少数票での過信頼を防ぐため平均成功率ではなくこれを使う。
ラベル変換は `scoreLabel(score, total)`（✅高信頼 / 🟡確認中 / 🔴要注意 / ⚠️データ少 / ❓未検証）。
