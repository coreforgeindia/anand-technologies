import type { Metadata } from 'next'

export const SITE_URL = 'https://anandtechnologies.co.in'

const SOCIAL_IMAGE = `${SITE_URL}/opengraph-image`
const DESCRIPTION_LIMIT = 145

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
}

export function createPageMetadata({
  title,
  description,
  path,
  openGraphType = 'website',
}: PageMetadataOptions): Metadata {
  return {
    title,
    description: limitDescription(description),
    alternates: { canonical: path },
    openGraph: {
      type: openGraphType,
      locale: 'en_IN',
      url: path,
      siteName: 'Anand Technologies',
      title,
      description: limitDescription(description),
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
      description: limitDescription(description),
      images: [SOCIAL_IMAGE],
    },
  }
}
