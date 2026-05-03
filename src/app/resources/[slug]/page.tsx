import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { resourceArticles } from '@/lib/data'
import ArticlePage from './ArticlePage'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return resourceArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = resourceArticles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const article = resourceArticles.find((a) => a.slug === slug)
  if (!article) notFound()
  return <ArticlePage article={article} />
}
