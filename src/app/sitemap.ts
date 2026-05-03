import { MetadataRoute } from 'next'
import { sampleProducts, resourceArticles } from '@/lib/data'

const BASE_URL = 'https://anandtech.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/products`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/industries`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/solutions`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/resources`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  const productPages = sampleProducts.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    priority: 0.8 as const,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(p.created_at),
  }))

  const articlePages = resourceArticles.map((a) => ({
    url: `${BASE_URL}/resources/${a.slug}`,
    priority: 0.6 as const,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(a.date),
  }))

  return [...staticPages, ...productPages, ...articlePages]
}
