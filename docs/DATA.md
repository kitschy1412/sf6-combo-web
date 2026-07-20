# データ層

## Supabase テーブル
スキーマ定義の正本は `sf6-combo-archiver/schema.sql`。本サイトは読み取り主体（`votes` のみ INSERT）。

- `characters` — キャラクターマスタ
- `combos` — コンボデータ。`youtube_id` + `start_sec` で埋め込みURL生成
- `votes` — 投票（`combo_id`, `is_working`, `has_error`, `ip_hash`, `created_at`）

## YouTube 埋め込みURL
```
https://www.youtube.com/embed/{youtube_id}?start={start_sec}
```

## クライアント
- `src/lib/supabase.ts` — Supabaseクライアント
- `src/lib/movenames.ts` / `src/lib/notation.ts` — 技名・表記変換
- `src/mock-data/` — 開発用モック（本番ビルド時は使わない）

## 環境変数
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

書き込みは `src/pages/api/vote.ts` のみ。サーバ側でIP制限を行うため anon キーで十分。

Phase 2 のスキーマ設計案（コンボ分岐ツリー・〆分類・ノート）は `docs/DATA_PHASE2.md` を参照。
