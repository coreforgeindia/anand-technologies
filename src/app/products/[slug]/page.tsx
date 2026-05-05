import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sampleProducts, productCategories, getDatasheetUrl, getProductName } from '@/lib/data'
import ProductDetailPage from './ProductDetailPage'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return sampleProducts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = sampleProducts.find((p) => p.slug === slug)
  if (!product) return {}
  const productName = getProductName(product.id) || product.short_spec
  return {
    title: `${productName} | ${product.name}`,
    description: product.description.slice(0, 155),
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const product = sampleProducts.find((p) => p.slug === slug)
  if (!product) notFound()
  const category = productCategories.find((c) => c.slug === product.category)
  const enriched = {
    ...product,
    product_name: getProductName(product.id) || product.short_spec,
    datasheet_url: getDatasheetUrl(product.id),
  }
  return <ProductDetailPage product={enriched} category={category} />
}
