import type { Metadata } from 'next'

export const SITE_URL = 'https://anandtechnologies.co.in'

const SOCIAL_IMAGE = `${SITE_URL}/opengraph-image`
const DESCRIPTION_LIMIT = 159

function limitDescription(description: string): string {
  const normalized = description.trim().replace(/\s+/g, ' ')
  if (normalized.length <= DESCRIPTION_LIMIT) return normalized

  const shortened = normalized.slice(0, DESCRIPTION_LIMIT - 3)
  const lastSpace = shortened.lastIndexOf(' ')
  return `${shortened.slice(0, lastSpace > 0 ? lastSpace : DESCRIPTION_LIMIT - 3).trimEnd()}...`
}

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  openGraphType?: 'website' | 'article'
  keywords?: string[]
}

export function createPageMetadata({
  title,
  description,
  path,
  openGraphType = 'website',
  keywords,
}: PageMetadataOptions): Metadata {
  const canonical = path === '/' ? '/' : path.replace(/\/+$/, '')
  const limitedDescription = limitDescription(description)

  return {
    title: { absolute: title },
    description: limitedDescription,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
      languages: {
        'en-IN': canonical,
        'x-default': canonical,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
    openGraph: {
      type: openGraphType,
      locale: 'en_IN',
      url: canonical,
      siteName: 'Anand Technologies',
      title,
      description: limitedDescription,
      images: [
        {
          url: SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: 'Anand Technologies RF and microwave engineering',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: limitedDescription,
      images: [SOCIAL_IMAGE],
    },
  }
}
