import { defineMiddleware } from 'astro:middleware';

// 仮公開中は検索エンジンに載せない（2026-11-17）。一般公開するときに外す
export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
});
