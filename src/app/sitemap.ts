import type { MetadataRoute } from 'next'
import { sampleProducts, resourceArticles } from '@/lib/data'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_URL, priority: 1.0, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/products`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/industries`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/solutions`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/resources`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${SITE_URL}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${SITE_URL}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${SITE_URL}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const productPages = sampleProducts.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    priority: 0.8 as const,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(p.created_at),
  }))

  const articlePages = resourceArticles.map((a) => ({
    url: `${SITE_URL}/resources/${a.slug}`,
    priority: 0.6 as const,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(a.date),
  }))

  return [...staticPages, ...productPages, ...articlePages]
}
