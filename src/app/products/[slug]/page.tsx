import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sampleProducts, productCategories } from '@/lib/data'
import ProductDetailPage from './ProductDetailPage'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return sampleProducts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = sampleProducts.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: `${product.name} — ${product.short_spec}`,
    description: product.description.slice(0, 155),
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const product = sampleProducts.find((p) => p.slug === slug)
  if (!product) notFound()
  const category = productCategories.find((c) => c.slug === product.category)
  return <ProductDetailPage product={product} category={category} />
}
