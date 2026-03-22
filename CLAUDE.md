# SF6 Combo Web — Project Guide

## Vision
SF6コンボをYouTubeタイムスタンプ付きで検索・閲覧・投票できるWebサイト。
パイプライン（sf6-combo-archiver）が収集したデータをSupabaseから取得して表示する。

## Tech Stack
- **Framework**: Astro + TypeScript
- **DB Client**: @supabase/supabase-js
- **Deploy**: Vercel
- **Styling**: CSS（ライブラリなし、シンプルに保つ）

## Coding Rules
- TypeScript 必須（strict モード）
- 環境変数は `.env` で管理、コードにハードコードしない
- コンポーネントは src/components/ に配置
- データ取得は src/lib/ に集約

## Project Structure
```
sf6-combo-web/
├── src/
│   ├── pages/
│   │   ├── index.astro          # キャラ一覧
│   │   ├── [character].astro    # キャラ別コンボ一覧
│   │   └── combo/[id].astro     # コンボ詳細（YouTube埋め込み）
│   ├── components/
│   │   ├── ComboCard.astro      # コンボカード
│   │   └── VoteButton.astro     # 投票ボタン
│   └── lib/
│       └── supabase.ts          # Supabaseクライアント
├── .env                         # (gitignore済み)
├── CLAUDE.md
└── TODO.md
```

## Supabase テーブル（参照元: sf6-combo-archiver/schema.sql）
- `characters`: キャラクターマスタ
- `combos`: コンボデータ（youtube_id, start_sec でYouTube埋め込みURL生成）
- `votes`: 投票データ

## YouTube埋め込みURL生成
```
https://www.youtube.com/embed/{youtube_id}?start={start_sec}
```

## 接続先Supabase
- パイプライン（sf6-combo-archiver）と同じプロジェクトを参照する

## Status
- [x] Astroプロジェクト初期化
- [ ] Phase 4: ページ実装（現在）
- [ ] Phase 5: 投票システム
- [ ] Phase 6: Vercelデプロイ
