import { createPageMetadata } from '@/lib/seo'
import ProductsPage from './ProductsPage'
import Link from 'next/link'

export const metadata = createPageMetadata({
  title: 'RF & Microwave Products',
  description:
    "Browse Anand Technologies' RF and microwave catalog, including antennas, filters, duplexers, diplexers, cable assemblies, splitters, couplers, and related components.",
  path: '/products',
})

export default function Page() {
  return (
    <>
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-4">
            <Link href="/" className="hover:text-[#00B8B8] transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <span className="text-[#0A0A0A]">Products</span>
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#E0F9F9] text-[#00B8B8]">
            Product Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] mb-4">RF &amp; Microwave Products</h1>
          <p className="text-lg text-[#6B7280] max-w-2xl">
            Precision-engineered RF and microwave components across 400 MHz to 40 GHz. Browse by category or search by specification.
          </p>
        </div>
      </section>
      <ProductsPage />
    </>
  )
}
