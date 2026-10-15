import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { resourceArticles } from '@/lib/data'
import { createPageMetadata, SITE_URL } from '@/lib/seo'
import ArticlePage from './ArticlePage'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return resourceArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = resourceArticles.find((a) => a.slug === slug)
  if (!article) return {}
  return createPageMetadata({
    title: article.seoTitle,
    description: article.excerpt,
    path: `/resources/${article.slug}`,
    openGraphType: 'article',
  })
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const article = resourceArticles.find((a) => a.slug === slug)
  if (!article) notFound()
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: 'Anand Technologies Engineering Team' },
    publisher: { '@type': 'Organization', name: 'Anand Technologies', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/resources/${article.slug}`,
    inLanguage: 'en-IN',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <ArticlePage article={article} />
    </>
  )
}
