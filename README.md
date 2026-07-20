# SF6 Combo Web

SF6コンボをYouTubeタイムスタンプ付きで閲覧・投票できるサイト。Astro + Supabase + Vercel。

## Setup

```sh
npm install
cp .env.example .env  # SUPABASE_URL / SUPABASE_ANON_KEY を設定
npm run dev           # http://localhost:4321
```

## Commands

| Command           | Action                       |
| :---------------- | :--------------------------- |
| `npm run dev`     | dev サーバ起動               |
| `npm run build`   | `./dist/` にビルド           |
| `npm run preview` | ビルド成果物のローカル確認   |

## Docs
- 開発の指針: [CLAUDE.md](./CLAUDE.md)
- UI 規約: [docs/UI.md](./docs/UI.md)
- データ層: [docs/DATA.md](./docs/DATA.md)
- 投票ロジック: [docs/VOTING.md](./docs/VOTING.md)
