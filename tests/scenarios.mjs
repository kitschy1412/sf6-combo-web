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
  check(`モックデータ58件（手書き38 + archiver取り込み20）のコンボが全部描画される (combo-group=${groups})`, groups === 58, `combo-group=${groups}`);
  check('archiver取り込みの大分類と、推定できなかった項目の一覧が出る',
    majors.has('archiver取り込み') && h.includes('archiver取り込み: 推定できなかった項目'), `majors=${[...majors].join(',')}`);
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
  const { numpadToArrows, readNotationPrefs, formatToken } = await import(lib('notation.ts'));
  const { getMoveTable } = await import(lib('movenames.ts'));

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

  // 表記設定（localStorage の sf6-dir / sf6-name）
  const storage = (items) => ({ getItem: (k) => items[k] ?? null });
  const prefsOf = (items) => JSON.stringify(readNotationPrefs(storage(items)));
  check('表記設定の既定は 数字 / コマンド', prefsOf({}) === '{"dir":"numpad","name":"command"}', prefsOf({}));
  check('保存済みの 矢印 / 技名 を読む',
    prefsOf({ 'sf6-dir': 'arrows', 'sf6-name': 'name' }) === '{"dir":"arrows","name":"name"}',
    prefsOf({ 'sf6-dir': 'arrows', 'sf6-name': 'name' }));
  check('想定外の値はコマンド扱い（以前エディタの方向トグルで sf6-name に入った "arrows" など）',
    readNotationPrefs(storage({ 'sf6-name': 'arrows' })).name === 'command', prefsOf({ 'sf6-name': 'arrows' }));
  const rashid = getMoveTable('Rashid');
  const arrowsName = { dir: 'arrows', name: 'name' };
  check('技名モード: 技名テーブルにある技は技名で出す（236LP → 弱ミキサー）',
    formatToken('236LP', arrowsName, rashid) === '弱ミキサー', formatToken('236LP', arrowsName, rashid));
  check('技名モード: テーブルにない通常技は方向だけ変換する（2MK → ↓MK）',
    formatToken('2MK', arrowsName, rashid) === '↓MK', formatToken('2MK', arrowsName, rashid));
  check('コマンドモードでは技名にしない',
    formatToken('236LP', { dir: 'numpad', name: 'command' }, rashid) === '236LP',
    formatToken('236LP', { dir: 'numpad', name: 'command' }, rashid));
}

// ────────────────────────────────────────────────────────────
// S9. 起き攻めの紐付け（〆分類基準。同じ有利フレームの別〆は参考）
// ────────────────────────────────────────────────────────────
scenario('S9 起き攻めの紐付け: 同じコンボにはどの画面でも同じ起き攻めが出る');
{
  // 起き攻め1件ごとに data-okizeme-id と data-okizeme-rel（main=〆分類が同じ / ref=参考）を出している。
  // 一覧のパネル行（data-okizeme-panel）・詳細の #combo-okizeme・ダウン状況の #situation-okizeme で画面を突き合わせるので、
  // 起き攻めの見た目を作り直すときもこれらの属性は残す
  const okizemeIn = (html) => [...new Set([...(html ?? '').matchAll(/<[^>]*\bdata-okizeme-id="([^"]+)"[^>]*>/g)]
    .map(m => `${/data-okizeme-rel="(\w+)"/.exec(m[0])?.[1]}:${m[1]}`))].sort().join(' ');
  const panelOf = (html, leafId) => { // 一覧の行で開く起き攻めパネル（tr 1行）
    const i = html.indexOf(`data-okizeme-panel="${leafId}"`);
    return i < 0 ? null : html.slice(i, html.indexOf('</tr>', i));
  };
  const sectionOf = (html, id) => {
    const i = html.indexOf(`id="${id}"`);
    return i < 0 ? null : html.slice(i, html.indexOf('</section>', i));
  };
  const hub = (await get('/mock/character/rashid')).body;
  const explore = (await get('/mock/explore/rashid')).body;
  const detail = async (id) => okizemeIn(sectionOf((await get(`/mock/combo/${id}`)).body, 'combo-okizeme'));
  const situation = async (id) => okizemeIn(sectionOf((await get(`/mock/situation/${id}`)).body, 'situation-okizeme'));

  // c_002（公開・1本道）はダウン状況 s_002 の由来コンボなので、4画面すべてに出る
  const c002 = okizemeIn(panelOf(hub, 'n_c002_r'));
  const c002Others = [okizemeIn(panelOf(explore, 'n_c002_r')), await detail('c_002'), await situation('s_002')];
  check('c_002: キャラハブ・公開一覧・コンボ詳細・ダウン状況で同じ起き攻め',
    c002 !== '' && c002Others.every(s => s === c002), `hub=${c002} / others=${c002Others.join(' | ')}`);
  // c_001 は非公開なので公開一覧には出ない
  const c001 = okizemeIn(panelOf(hub, 'n_c001_r'));
  const c001Others = [await detail('c_001'), await situation('s_001')];
  check('c_001: キャラハブ・コンボ詳細・ダウン状況で同じ起き攻め（非公開なので公開一覧には出ない）',
    c001 !== '' && c001Others.every(s => s === c001) && panelOf(explore, 'n_c001_r') === null,
    `hub=${c001} / others=${c001Others.join(' | ')}`);

  const exploreLeaves = [...explore.matchAll(/data-okizeme-panel="([^"]+)"/g)].map(m => m[1]);
  const differs = exploreLeaves.filter(l => okizemeIn(panelOf(hub, l)) !== okizemeIn(panelOf(explore, l)));
  check(`公開一覧の全ルート (${exploreLeaves.length}件) でキャラハブと同じ起き攻め`,
    exploreLeaves.length > 0 && differs.length === 0, `違うルート: ${differs.join(', ')}`);

  // 中イーグル〆（c_012）と投げ後（s_003）は同じ +30F なので、互いの起き攻めが参考に出る
  const c012 = okizemeIn(panelOf(hub, 'n_c012_r'));
  const s003 = await situation('s_003');
  const rel = (s, r) => s.split(' ').filter(x => x.startsWith(`${r}:`)).map(x => x.slice(r.length + 1)).join(' ');
  check('同じ有利フレームの別〆は「参考」として分けて出る（中イーグル〆 ↔ 投げ後）',
    rel(c012, 'ref') !== '' && rel(c012, 'ref') === rel(s003, 'main') && rel(c012, 'main') === rel(s003, 'ref'),
    `c_012=${c012} / s_003=${s003}`);
  check('c_012: コンボ詳細もキャラハブと同じ（参考を含む）', (await detail('c_012')) === c012);
  check('公開一覧にも参考付きのルートがある', exploreLeaves.some(l => okizemeIn(panelOf(explore, l)).includes('ref:')));

  // 〆分類管理の件数は手書きではなく実データから数える（キャラハブのコンボ行・ダウン状況と突き合わせる）。
  // コンボ行の〆は〆分類列の title 属性で拾っているので、行を作り直したらここも合わせる
  const list = (await get('/mock/ender-class/list')).body;
  const groups = hub.split('<tbody class="combo-group"').slice(1).map(s => s.slice(0, s.indexOf('</tbody>')));
  const rows = [...list.matchAll(/<tr[^>]*data-ender-class="([^"]+)"[^>]*>([\s\S]*?)<\/tr>/g)].map(m => ({
    id: m[1],
    name: /class="col-title"[^>]*>([^<]+)</.exec(m[2])?.[1],
    combos: Number(/data-count="combos"[^>]*>(\d+)</.exec(m[2])?.[1]),
    okizeme: Number(/data-count="okizeme"[^>]*>(\d+)</.exec(m[2])?.[1]),
  }));
  const wrongCombos = rows.filter(r => r.combos !== groups.filter(g => g.includes(`title="${r.name}"`)).length);
  check(`〆分類管理のコンボ数がキャラハブのコンボ行と一致 (${rows.length}分類)`,
    rows.length > 0 && wrongCombos.length === 0, `ずれ: ${wrongCombos.map(r => `${r.name}=${r.combos}`).join(', ')}`);
  const sitOf = { ec_weak_eagle: 's_001', ec_strong_eagle: 's_002', ec_throw: 's_003', ec_arabian: 's_004' };
  const wrongOki = [];
  for (const [ec, sid] of Object.entries(sitOf)) {
    const shown = rel(await situation(sid), 'main').split(' ').filter(Boolean).length;
    const row = rows.find(r => r.id === ec);
    if (row?.okizeme !== shown) wrongOki.push(`${ec}: 一覧=${row?.okizeme} 状況=${shown}`);
  }
  check('〆分類管理の起き攻め数がダウン状況に出る件数と一致', wrongOki.length === 0, wrongOki.join(', '));
}

// ────────────────────────────────────────────────────────────
// S10. 表記設定（数字/矢印・コマンド/技名）を全ページで反映する
// ────────────────────────────────────────────────────────────
// 反映は Layout.astro のスクリプトが行い、技名は <body data-character> のキャラの表で引く。
// ここでは JS を動かせないので、反映できる形になっているか（チップ + キャラ指定）を見る
scenario('S10 表記設定: コマンドを出すページはどれも保存済みの表記で表示できる');
{
  const chipRe = /class="cmd-chip[^"]*" data-token="/g;
  const pages = [
    '/mock/character/rashid', '/mock/explore/rashid', '/mock/combo/c_001', '/mock/combo/c_006',
    '/mock/me/notes/combos/note_c_001', '/mock/me/notes/okizeme/note_o_001',
    '/mock/situation/s_001', '/mock/okizeme/new',
  ];
  const notReady = [];
  for (const p of pages) {
    const r = await get(p);
    const chips = count(r.body, chipRe);
    const hasCharacter = /<body[^>]*\sdata-character="Rashid"/.test(r.body);
    if (r.status !== 200 || chips === 0 || !hasCharacter) {
      notReady.push(`${p} (status=${r.status} chips=${chips} character=${hasCharacter})`);
    }
  }
  check(`コマンドを出す ${pages.length} ページすべてがチップ表示で、技名に使うキャラが body に入っている`,
    notReady.length === 0, notReady.join(', '));

  const detail = await get('/mock/combo/c_006');
  check('コンボ詳細に表記トグル（方向・必殺技）がある',
    /data-group="dir"/.test(detail.body) && /data-group="name"/.test(detail.body), 'トグルが見つかりません');

  // ノート詳細: c_002（DR > 5HP > 2MK > 214MK > 5HP > 214HK）がチップで並び、プレーンテキストで出ていない
  const note = await get('/mock/me/notes/combos/note_c_001');
  const noteTokens = [...note.body.matchAll(/class="cmd-chip[^"]*" data-token="([^"]+)"/g)].map(m => m[1]).join(' > ');
  check('コンボノート詳細のコマンドがチップ表示になっている',
    noteTokens.includes('DR > 5HP > 2MK > 214MK > 5HP > 214HK') && !/DR (&gt;|>) 5HP (&gt;|>) 2MK/.test(note.body),
    `チップ: ${noteTokens}`);
  check('ノートの分岐コンボ（c_005）は共通部分の後に「…の後に分岐」と出る', note.body.includes('…の後に分岐'));

  // キャラハブ: 一覧のトグルはエディタ内のトグル（data-editor-toggle）と別扱い
  const hub = await get('/mock/character/rashid');
  const pageToggles = count(hub.body, /class="ntoggle-btn" data-group=/g);
  const editorToggles = count(hub.body, /class="ntoggle-btn" data-editor-toggle=/g);
  check('キャラハブの一覧トグルとエディタ内トグルが別の属性で区別されている',
    pageToggles === 4 && editorToggles === 4, `一覧=${pageToggles} エディタ=${editorToggles}`);
}

// ────────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(60)}`);
console.log(`\x1b[1m結果: ${pass} pass / ${fail} fail / ${skip} skip\x1b[0m`);
if (failures.length) {
  console.log('\n失敗一覧:');
  for (const f of failures) console.log(`  [${f.scenario}] ${f.label}\n      ${f.detail}`);
}
process.exit(fail > 0 ? 1 : 0);
