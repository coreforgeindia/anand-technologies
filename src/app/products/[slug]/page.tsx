import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sampleProducts, productCategories, getDatasheetUrl, getProductName } from '@/lib/data'
import { createPageMetadata, SITE_URL } from '@/lib/seo'
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
  const titleName =
    productName.length <= 25
      ? productName
      : productName.slice(0, 25).replace(/\s+\S*$/, '') || productName.slice(0, 25)
  const title = `${titleName} | ${product.id.toUpperCase()}`
  return createPageMetadata({
    title,
    description: `${product.description} Part number: ${product.name}.`,
    path: `/products/${product.slug}`,
  })
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
  const productStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: enriched.product_name,
    sku: product.name,
    description: product.description,
    url: `${SITE_URL}/products/${product.slug}`,
    brand: { '@type': 'Brand', name: 'Anand Technologies' },
    category: category?.name ?? product.category,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <ProductDetailPage product={enriched} category={category} />
    </>
  )
}
