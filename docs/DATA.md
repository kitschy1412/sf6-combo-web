# データ層

## Supabase テーブル
スキーマ定義の正本は `sf6-combo-archiver/schema.sql`。本サイトは読み取り主体（`votes` のみ INSERT）。

- `characters` — キャラクターマスタ
- `combos` — コンボデータ。`youtube_id` + `start_sec` で埋め込みURL生成
- `votes` — 投票（`combo_id`, `is_working`, `has_error`, `ip_hash`, `created_at`）

## 並び順（sortOrder）

一覧の D&D 並び替え（SortableJS）は現状 DOM 操作のみで、並び替えた結果はページリロードで失われる。
永続化する場合の受け皿として `Combo.sortOrder?: number` を用意している（`src/mock-data/rashid.ts`）。

- 同一 `(categoryMajor, categoryMinor)` の小分類内で昇順に並べるための相対値
- `combos` テーブルに `sort_order integer` カラムを追加し、D&D の drop 確定時に同じ小分類内の並びをまとめて再採番して保存する想定
- 未設定（`null`/`undefined`）の行は挿入順・作成日時などフォールバック順で末尾に配置

## YouTube 埋め込みURL
```
https://www.youtube.com/embed/{youtube_id}?start={start_sec}
```

## クライアント
- `src/lib/supabase.ts` — Supabaseクライアント
- `src/lib/movenames.ts` / `src/lib/notation.ts` — 技名・表記変換
- `src/mock-data/` — 開発用モック（本番ビルド時は使わない）

## 環境変数
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_KEY`（anon キー）

書き込みは `src/pages/api/vote.ts` のみ。サーバ側でIP制限を行うため anon キーで十分。

Phase 2 のスキーマ設計案（コンボ分岐ツリー・〆分類・ノート）は `docs/DATA_PHASE2.md` を参照。
