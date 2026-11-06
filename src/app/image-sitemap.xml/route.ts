import { sampleProducts } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function GET() {
  const entries = sampleProducts
    .filter((product) => product.image_url)
    .map((product) => {
      const pageUrl = `${SITE_URL}/products/${product.slug}`
      const imageUrl = new URL(product.image_url, SITE_URL).toString()
      return `<url><loc>${escapeXml(pageUrl)}</loc><image:image><image:loc>${escapeXml(imageUrl)}</image:loc></image:image><lastmod>${product.created_at}</lastmod></url>`
    })

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries,
    '</urlset>',
  ].join('')

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
