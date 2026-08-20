// SF6 Combo Web — シナリオテスト
//
// 使い方:
//   1) 別ターミナルで `npm run dev`
//   2) `npm run test:scenarios`（別ポートなら BASE=http://localhost:4322 npm run test:scenarios）
//
// ユーザー動線ごとに実際のHTTPレスポンスと src/lib のロジックを検証する。
// 破壊的操作はしない（/api/vote はバリデーション拒否パスのみ叩く）。

const BASE = process.env.BASE ?? 'http://localhost:4321';

let pass = 0, fail = 0, skip = 0;
const failures = [];
let currentScenario = '';

function scenario(name) {
  currentScenario = name;
  console.log(`\n\x1b[1m▶ ${name}\x1b[0m`);
}
function ok(label) { pass++; console.log(`  \x1b[32m✓\x1b[0m ${label}`); }
function ng(label, detail) {
  fail++;
  failures.push({ scenario: currentScenario, label, detail });
  console.log(`  \x1b[31m✗\x1b[0m ${label}\n      → ${detail}`);
}
function sk(label, why) { skip++; console.log(`  \x1b[33m-\x1b[0m ${label} (skip: ${why})`); }

function check(label, cond, detail = '') { cond ? ok(label) : ng(label, detail || '条件を満たしませんでした'); }

async function get(path) {
  const res = await fetch(BASE + path, { redirect: 'manual' });
  const body = await res.text();
  return { status: res.status, body, headers: res.headers };
}
const count = (html, re) => (html.match(re) ?? []).length;

// ────────────────────────────────────────────────────────────
// S1. 公開閲覧フロー（Phase 0 / Supabase 実データ）
// ────────────────────────────────────────────────────────────
scenario('S1 公開閲覧フロー: トップ → キャラ一覧 → コンボ詳細（Supabase実データ）');
{
  const top = await get('/');
  check('GET / が 200', top.status === 200, `status=${top.status}`);
  check('トップに「キャラクターを選択」見出しがある', top.body.includes('キャラクターを選択'));

  const charLinks = [...top.body.matchAll(/href="\/([A-Za-z0-9_%-]+)"/g)]
    .map(m => m[1])
    .filter(s => !['favicon.svg', 'mock'].includes(s));

  if (charLinks.length === 0) {
    sk('キャラページ遷移', 'トップにキャラリンクが0件（Supabase未接続 or combos が空）');
    sk('コンボ詳細ページ', '同上');
  } else {
    ok(`トップに ${charLinks.length} 件のキャラリンク`);
    const char = charLinks[0];
    const cp = await get(`/${char}`);
    check(`GET /${char} が 200`, cp.status === 200, `status=${cp.status}`);

    const comboIds = [...cp.body.matchAll(/href="\/combo\/(\d+)"/g)].map(m => m[1]);
    if (comboIds.length === 0) {
      sk('コンボ詳細ページ', `/${char} にコンボリンクが0件`);
    } else {
      ok(`/${char} に ${comboIds.length} 件のコンボリンク`);
      const cd = await get(`/combo/${comboIds[0]}`);
      check(`GET /combo/${comboIds[0]} が 200`, cd.status === 200, `status=${cd.status}`);
      check('YouTube 埋め込み iframe がある', /youtube(-nocookie)?\.com\/embed\//.test(cd.body),
        'embed URL が見つかりません');
      check('埋め込みURLに開始秒(start=)が含まれる', /embed\/[^"']*[?&]start=\d+/.test(cd.body),
        'start パラメータがありません（DATA.md の埋め込み仕様）');
      check('投票UIがある', /is_working|投票|vote/i.test(cd.body));
    }
  }

  const missing = await get('/combo/999999999');
  check('存在しないコンボIDでも500にならない', missing.status !== 500, `status=${missing.status}`);
  ok(`  (実際の応答: ${missing.status})`);
}

// ────────────────────────────────────────────────────────────
// S2. Wiki型キャラページ（モック / 最新の未コミット変更の中心）
// ────────────────────────────────────────────────────────────
scenario('S2 Wiki型キャラページ: 一覧・分類・フィルタ・編集UI');
{
  const r = await get('/mock/character/rashid');
  check('GET /mock/character/rashid が 200', r.status === 200, `status=${r.status}`);
  const h = r.body;

  const majors = new Set([...h.matchAll(/data-major="([^"]+)"/g)].map(m => m[1]));
  const minors = new Set([...h.matchAll(/data-minor="([^"]+)"/g)].map(m => m[1]));
  check(`大分類が複数描画される (${majors.size}件)`, majors.size >= 3, `majors=${majors.size}`);
  check(`小分類が複数描画される (${minors.size}件)`, minors.size >= 5, `minors=${minors.size}`);

  const groups = count(h, /class="combo-group"/g);
  const edits = count(h, /class="btn-edit"/g);
  const dels = count(h, /class="btn-delete"/g);
  const ups = count(h, /class="btn-upload"/g);
  check(`モックデータ38件のコンボが全部描画される (combo-group=${groups})`, groups === 38, `combo-group=${groups}`);
  check(`各コンボ行に編集/削除ボタンが1組ずつ (edit=${edits}, delete=${dels})`,
    edits === groups && dels === groups, `groups=${groups} edit=${edits} delete=${dels}`);
  check(`アップロードボタンは共有済みを除いた行に出る (upload=${ups})`,
    ups > 0 && ups <= groups, `upload=${ups} groups=${groups}`);
  check('分類の削除UIがある（小分類・大分類）',
    count(h, /btn-minor-delete/g) > 0 && count(h, /btn-major-delete/g) > 0,
    `minor=${count(h, /btn-minor-delete/g)} major=${count(h, /btn-major-delete/g)}`);

  check('フィルタUI（大分類/小分類/自分のみ）がある',
    h.includes('id="filter-major"') && h.includes('id="filter-minor"') && h.includes('id="filter-self-only"'));
  check('D&D 用ドロップゾーンがある', /drop-zone/.test(h));
  check('列表示切替メニューがある', h.includes('id="col-vis-toggle"') && h.includes('id="col-vis-menu"'));

  check('インラインエディタがホストされている',
    h.includes('id="inline-editor-host"') && h.includes('id="combo-form"'));
  check('保存先の選択肢が2つある（自分のメモ / アップロード）',
    h.includes('id="dest-personal"') && h.includes('id="dest-upload"'));
  check('重複確認モーダルがある', h.includes('id="dup-modal"'));
  check('ツリー編集操作（分岐追加・ノート削除）がある',
    h.includes('id="btn-add-sibling"') && h.includes('id="btn-delete-node"'));
  check('全コンボ行がリンク付きで詳細へ遷移できる',
    count(h, /href="\/mock\/combo\/c_\d+"/g) > 0,
    'コンボ詳細へのリンクがありません');

  const unknown = await get('/mock/character/unknownchar');
  check('未知のキャラ名は /mock/ へリダイレクト',
    unknown.status === 302 && unknown.headers.get('location') === '/mock/',
    `status=${unknown.status} location=${unknown.headers.get('location')}`);
}

// ────────────────────────────────────────────────────────────
// S3. コンボ詳細（モック）: 単一ルート vs 分岐ツリー
// ────────────────────────────────────────────────────────────
scenario('S3 コンボ詳細: 単一ルートと分岐ツリーの描画差');
{
  const single = await get('/mock/combo/c_001');
  const branch = await get('/mock/combo/c_006');
  check('GET /mock/combo/c_001 が 200', single.status === 200, `status=${single.status}`);
  check('GET /mock/combo/c_006 が 200', branch.status === 200, `status=${branch.status}`);

  const sB = count(single.body, /class="ctree-branch[ "]/g);
  const bB = count(branch.body, /class="ctree-branch[ "]/g);
  check(`分岐コンボの方が枝が多い (c_001=${sB} < c_006=${bB})`, bB > sB, `c_001=${sB} c_006=${bB}`);
  check('分岐コンボにルートラベルが出る', /ctree-route-label/.test(branch.body));
  check('葉ごとの投票バーが出る', /vote-bar/.test(branch.body));
  check('youtubeId を持つ c_001 に開始秒つきの埋め込みが出る',
    /youtube\.com\/embed\/dQw4w9WgXcQ\?start=12/.test(single.body), '埋め込みURLが見つかりません');
  check('c_001 の YouTube ボタンが実URLを指す',
    /youtube\.com\/watch\?v=dQw4w9WgXcQ(&|&amp;|&#38;)t=12s/.test(single.body), 'ダミーリンクのままです');
  check('youtubeId を持たない c_006 には埋め込みもボタンも出ない',
    !/youtube\.com\/embed/.test(branch.body) && !/▶ YouTube/.test(branch.body),
    '不要な埋め込み/ボタンが出ています');

  const missing = await get('/mock/combo/c_999');
  check('存在しないコンボIDで500にならない', missing.status !== 500, `status=${missing.status}`);
  ok(`  (実際の応答: ${missing.status})`);
}

// ────────────────────────────────────────────────────────────
// S4. マイノート動線
// ────────────────────────────────────────────────────────────
scenario('S4 マイノート: 一覧 → コンボノート / 起き攻めノート');
{
  const list = await get('/mock/me/notes');
  check('GET /mock/me/notes が 200', list.status === 200, `status=${list.status}`);
  check('コンボノートと起き攻めノートが両方並ぶ',
    list.body.includes('基本コンボまとめ') && list.body.includes('弱イーグル後の択まとめ'));
  check('visibility バッジが表示される',
    /public|private|unlisted|公開|非公開|限定/.test(list.body));

  const cn = await get('/mock/me/notes/combos/note_c_001');
  check('コンボノート詳細が 200', cn.status === 200, `status=${cn.status}`);
  check('ノートに登録した3件のコンボが並ぶ',
    ['c_001', 'c_002', 'c_005'].every(id => cn.body.includes(id)),
    'itemIds のコンボが揃っていません');

  const on = await get('/mock/me/notes/okizeme/note_o_001');
  check('起き攻めノート詳細が 200', on.status === 200, `status=${on.status}`);

  const bad = await get('/mock/me/notes/combos/note_x_999');
  check('存在しないノートIDで500にならない', bad.status !== 500, `status=${bad.status}`);
  ok(`  (実際の応答: ${bad.status})`);
}

// ────────────────────────────────────────────────────────────
// S5. 起き攻め / シチュエーション
// ────────────────────────────────────────────────────────────
scenario('S5 起き攻め: 状況詳細と新規作成フォーム');
{
  const s = await get('/mock/situation/s_001');
  check('GET /mock/situation/s_001 が 200', s.status === 200, `status=${s.status}`);
  check('〆分類（弱イーグル）に紐づく状況が表示される', s.body.includes('イーグル'));

  const sn = await get('/mock/situation/new');
  const on = await get('/mock/okizeme/new');
  check('状況の新規作成フォームが 200', sn.status === 200, `status=${sn.status}`);
  check('起き攻めの新規作成フォームが 200', on.status === 200, `status=${on.status}`);
  check('新規フォームに入力欄がある', /<(form|input|select|textarea)/.test(on.body));
}

// ────────────────────────────────────────────────────────────
// S6. 管理系
// ────────────────────────────────────────────────────────────
scenario('S6 管理: 〆分類一覧 / 現ver不可リスト');
{
  const ec = await get('/mock/ender-class/list');
  check('GET /mock/ender-class/list が 200', ec.status === 200, `status=${ec.status}`);
  const shown = ['弱イーグルスパイク〆', '強イーグルスパイク〆', 'ODスピニングミキサー〆', '投げ後']
    .filter(n => ec.body.includes(n));
  check(`ENDER_CLASSES が表示される (${shown.length}/4 サンプル一致)`, shown.length === 4,
    `不足: ${['弱イーグルスパイク〆','強イーグルスパイク〆','ODスピニングミキサー〆','投げ後'].filter(n => !ec.body.includes(n))}`);

  const bl = await get('/mock/admin/broken-list');
  check('GET /mock/admin/broken-list が 200', bl.status === 200, `status=${bl.status}`);
  check('「現ver不可」票を集計した行が出る', /不可|broken/i.test(bl.body));
}

// ────────────────────────────────────────────────────────────
// S7. 投票API（バリデーションのみ / 実投票はしない）
// ────────────────────────────────────────────────────────────
scenario('S7 投票API: 不正リクエストの拒否（DBへの書き込みは行わない）');
{
  const post = async (payload, raw = false) => {
    const res = await fetch(BASE + '/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: raw ? payload : JSON.stringify(payload),
    });
    return { status: res.status, body: await res.text() };
  };

  const cases = [
    ['空ボディ', '', true],
    ['壊れたJSON', '{oops', true],
    ['combo_id 欠落', { is_working: true }],
    ['combo_id が文字列', { combo_id: '1', is_working: true }],
    ['is_working 欠落', { combo_id: 1 }],
    ['is_working が文字列', { combo_id: 1, is_working: 'yes' }],
  ];
  for (const [label, payload, raw] of cases) {
    const r = await post(payload, raw);
    check(`${label} → 400`, r.status === 400, `status=${r.status} body=${r.body.slice(0, 120)}`);
  }

  const g = await fetch(BASE + '/api/vote');
  check('GET /api/vote は許可されない', g.status !== 200, `status=${g.status}`);
  ok(`  (実際の応答: ${g.status})`);
}

// ────────────────────────────────────────────────────────────
// S8. ドメインロジック（src/lib）
// ────────────────────────────────────────────────────────────
scenario('S8 ロジック: Wilson Score / ゲージ計算 / 表記変換');
{
  const lib = (f) => new URL(`../src/lib/${f}`, import.meta.url).href;
  const { wilsonScore, scoreLabel } = await import(lib('wilson.ts'));
  const { calcGaugesFromSegs, parseTokens } = await import(lib('gauges.ts'));
  const { numpadToArrows } = await import(lib('notation.ts'));

  // Wilson
  check('投票0件はスコア0', wilsonScore(0, 0) === 0, `=${wilsonScore(0, 0)}`);
  check('全員good(10/10)でも1未満（少数票を過信しない）',
    wilsonScore(10, 10) > 0.6 && wilsonScore(10, 10) < 1, `=${wilsonScore(10, 10)}`);
  check('同じ勝率なら票数が多いほど高スコア',
    wilsonScore(100, 100) > wilsonScore(10, 10), `100件=${wilsonScore(100,100)} 10件=${wilsonScore(10,10)}`);
  check('全員badでスコア0', wilsonScore(0, 20) === 0, `=${wilsonScore(0, 20)}`);
  check('スコアは0〜1に収まる',
    [[3,7],[1,2],[50,60],[0,1]].every(([p, t]) => { const s = wilsonScore(p, t); return s >= 0 && s <= 1; }));
  check('未投票ラベルは「未検証」', scoreLabel(0, 0).includes('未検証'), scoreLabel(0, 0));
  check('高スコアは「高信頼」', scoreLabel(0.85, 30).includes('高信頼'), scoreLabel(0.85, 30));
  check('中スコアは「確認中」', scoreLabel(0.65, 10).includes('確認中'), scoreLabel(0.65, 10));
  check('低スコアは「要注意」', scoreLabel(0.35, 5).includes('要注意'), scoreLabel(0.35, 5));

  // ゲージ
  check('トークン分割', JSON.stringify(parseTokens('2MK > 236LP >  ')) === '["2MK","236LP"]',
    JSON.stringify(parseTokens('2MK > 236LP >  ')));
  const g1 = calcGaugesFromSegs(['2MK > 236LP']);
  check('通常技のみならゲージ消費0', g1.saGauge === 0 && g1.dGauge === 0, JSON.stringify(g1));
  const g2 = calcGaugesFromSegs(['DR > 2MP > 236PP']);
  check('DR(3)+OD技(2) でドライブ5', g2.dGauge === 5, JSON.stringify(g2));
  const g3 = calcGaugesFromSegs(['2MK', '236236P']);
  check('SA3 で saGauge=3', g3.saGauge === 3, JSON.stringify(g3));
  const g4 = calcGaugesFromSegs(['CR > 5MP', 'DI > 214214K']);
  check('CR(1)+DI(1)=2, SA2 で saGauge=2', g4.dGauge === 2 && g4.saGauge === 2, JSON.stringify(g4));
  const g5 = calcGaugesFromSegs(['214KK > 236236K']);
  check('OD(KK)=2 と SA1 を同時に拾う', g5.dGauge === 2 && g5.saGauge === 1, JSON.stringify(g5));
  check('分岐パス（複数セグメント）を合算する',
    calcGaugesFromSegs(['DR > 2MP', '236PP']).dGauge === 5,
    JSON.stringify(calcGaugesFromSegs(['DR > 2MP', '236PP'])));

  // 表記変換
  check('623HP → →↓↘HP', numpadToArrows('623HP') === '→↓↘HP', numpadToArrows('623HP'));
  check('2MK > 214214P を変換', numpadToArrows('2MK > 214214P') === '↓MK > ↓↙←↓↙←P',
    numpadToArrows('2MK > 214214P'));
  check('5(ニュートラル)は省略される', numpadToArrows('5HK') === 'HK', numpadToArrows('5HK'));
  check('OD技(PP/KK)も変換対象', numpadToArrows('236PP') === '↓↘→PP', numpadToArrows('236PP'));
  check('ボタンを伴わない数字は変換しない', numpadToArrows('DR') === 'DR' && numpadToArrows('x3') === 'x3',
    `${numpadToArrows('DR')} / ${numpadToArrows('x3')}`);
}

// ────────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(60)}`);
console.log(`\x1b[1m結果: ${pass} pass / ${fail} fail / ${skip} skip\x1b[0m`);
if (failures.length) {
  console.log('\n失敗一覧:');
  for (const f of failures) console.log(`  [${f.scenario}] ${f.label}\n      ${f.detail}`);
}
process.exit(fail > 0 ? 1 : 0);
