import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { wilsonScore } from '../../lib/wilson';

async function hashIp(ip: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(ip)
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const json = await request.json().catch(() => null);
  if (!json || typeof json.combo_id !== 'number' || typeof json.is_working !== 'boolean') {
    return new Response(JSON.stringify({ error: 'invalid request' }), { status: 400 });
  }

  const { combo_id, is_working } = json;
  const ip = clientAddress ?? request.headers.get('x-forwarded-for') ?? 'unknown';
  const ip_hash = await hashIp(ip);

  // 24時間以内の重複投票チェック
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { data: existing } = await supabase
    .from('votes')
    .select('id')
    .eq('combo_id', combo_id)
    .eq('ip_hash', ip_hash)
    .gte('created_at', since)
    .maybeSingle();

  if (existing) {
    return new Response(
      JSON.stringify({ error: '24時間以内に投票済みです' }),
      { status: 429 }
    );
  }

  await supabase.from('votes').insert({ combo_id, is_working, ip_hash });

  // 最新の集計を返す
  const { data: votes } = await supabase
    .from('votes')
    .select('is_working')
    .eq('combo_id', combo_id);

  const total = votes?.length ?? 0;
  const working = votes?.filter((v) => v.is_working).length ?? 0;
  const score = wilsonScore(working, total);

  return new Response(
    JSON.stringify({ working, total, score }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
