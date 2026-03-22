import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Character = {
  id: number;
  name: string;
  name_en: string;
};

export type Combo = {
  id: number;
  character: string;
  title: string;
  inputs: string;
  damage: number;
  gauge: number;
  situation: string[];
  youtube_id: string;
  start_sec: number;
  patch_version: string;
  confidence: number;
  created_at: string;
};
