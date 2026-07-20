import { COMBOS, OKIZEME_SETUPS, type Combo, type OkizemeSetup } from './rashid';

export type Visibility = 'private' | 'unlisted' | 'public';

export type ComboNote = {
  id: string;
  kind: 'combo';
  title: string;
  visibility: Visibility;
  description?: string;
  itemIds: string[];
};

export type OkizemeNote = {
  id: string;
  kind: 'okizeme';
  title: string;
  visibility: Visibility;
  description?: string;
  itemIds: string[];
};

export type Note = ComboNote | OkizemeNote;

export const NOTES: Note[] = [
  {
    id: 'note_c_001',
    kind: 'combo',
    title: '基本コンボまとめ',
    visibility: 'public',
    description: '初心者向けの画面中央コンボ集。ゲージなしで安定して入るものを厳選。',
    itemIds: ['c_001', 'c_002', 'c_005'],
  },
  {
    id: 'note_c_002',
    kind: 'combo',
    title: 'ゲージ使い分けメモ',
    visibility: 'private',
    itemIds: ['c_005', 'c_006'],
  },
  {
    id: 'note_o_001',
    kind: 'okizeme',
    title: '弱イーグル後の択まとめ',
    visibility: 'public',
    description: '弱イーグルスパイク〆後の起き攻め全パターン。相手の行動ごとに有効な択を整理。',
    itemIds: ['o_001', 'o_002', 'o_003'],
  },
  {
    id: 'note_o_002',
    kind: 'okizeme',
    title: '詐欺飛び集',
    visibility: 'unlisted',
    itemIds: ['o_001', 'o_004'],
  },
];

export const COMBO_NOTES = NOTES.filter((n): n is ComboNote => n.kind === 'combo');
export const OKIZEME_NOTES = NOTES.filter((n): n is OkizemeNote => n.kind === 'okizeme');

export function getComboNoteById(id: string): ComboNote | undefined {
  return COMBO_NOTES.find(n => n.id === id);
}

export function getOkizemeNoteById(id: string): OkizemeNote | undefined {
  return OKIZEME_NOTES.find(n => n.id === id);
}

export function getComboNoteItems(note: ComboNote): Combo[] {
  return note.itemIds
    .map(id => COMBOS.find(c => c.id === id))
    .filter((c): c is Combo => !!c);
}

export function getOkizemeNoteItems(note: OkizemeNote): OkizemeSetup[] {
  return note.itemIds
    .map(id => OKIZEME_SETUPS.find(o => o.id === id))
    .filter((o): o is OkizemeSetup => !!o);
}
