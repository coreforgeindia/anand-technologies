import { SITE_URL } from '@/lib/seo'

export function GET() {
  const sitemapUrls = [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/image-sitemap.xml`]
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapUrls.map((url) => `<sitemap><loc>${url}</loc></sitemap>`),
    '</sitemapindex>',
  ].join('')

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
