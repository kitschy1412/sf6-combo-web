# SF6 Combo Web

SF6コンボをYouTubeタイムスタンプ付きで検索・閲覧・投票できるWebサイト。
データは `sf6-combo-archiver` パイプラインが Supabase に投入したものを参照する。

## Stack
Astro 6 + TypeScript (strict) / @supabase/supabase-js / TailwindCSS v4 / Vercel デプロイ

## ルール
- TypeScript strict。環境変数は `.env`（ハードコード禁止）
- データ取得は `src/lib/` に集約、UI は `src/components/`
- Tailwind のみ使用（独自CSS禁止）

## 参考ドキュメント（on-demand）
作業領域に応じて必要な時だけ読む：
- `docs/ROADMAP.md` — プロジェクト全体の目的・現状・Phase 計画
- `docs/UI.md` — UI/Tailwind 規約（色・レイアウト・キャラバッジ等）
- `docs/DATA.md` — Supabase スキーマ、YouTube埋め込みURL生成（Phase 2 設計案は `docs/DATA_PHASE2.md`）
- `docs/VOTING.md` — 投票システム（Wilson Score + IP制限）
- `docs/backlog.md` — やりたいことリスト（`/sy-next-task` で先頭から実装）。完了時は項目を削除し `docs/done.md` の先頭に移す
- `docs/done.md` — 完了タスクの履歴

## 接続先
Supabase は `sf6-combo-archiver` と同一プロジェクト。
