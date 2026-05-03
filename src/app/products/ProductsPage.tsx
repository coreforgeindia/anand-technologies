'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Search, ArrowRight, ChevronRight } from 'lucide-react'
import { productCategories, sampleProducts } from '@/lib/data'

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') || ''

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(categoryParam)

  useEffect(() => {
    setActiveCategory(categoryParam)
  }, [categoryParam])

  const filteredProducts = sampleProducts.filter((p) => {
    const matchesCategory = activeCategory ? p.category === activeCategory : true
    const matchesSearch =
      searchQuery
        ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.short_spec.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.frequency_range.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    return matchesCategory && matchesSearch
  })

  const activeCategoryLabel = productCategories.find((c) => c.slug === activeCategory)?.name || 'All Products'

  return (
    <>
      {/* Page header */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-4">
            <Link href="/" className="hover:text-[#00B8B8] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0A0A0A]">Products</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#E0F9F9] text-[#00B8B8]">
              Product Catalog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] mb-4">RF & Microwave Products</h1>
            <p className="text-lg text-[#6B7280] max-w-2xl">
              Precision-engineered RF and microwave components across 400 MHz to 40 GHz. Browse by category or search by specification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Search */}
      <section className="py-8 bg-[#F5F7F8] border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search products, specs, frequencies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:border-[#00B8B8] transition-colors"
                style={{ '--tw-ring-color': '#00B8B8' } as React.CSSProperties}
              />
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setActiveCategory('')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === ''
                    ? 'text-white'
                    : 'text-[#6B7280] bg-white border border-gray-200 hover:border-[#00B8B8] hover:text-[#00B8B8]'
                }`}
                style={activeCategory === '' ? { background: '#00B8B8' } : {}}
              >
                All
              </button>
              {productCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeCategory === cat.slug
                      ? 'text-white'
                      : 'text-[#6B7280] bg-white border border-gray-200 hover:border-[#00B8B8] hover:text-[#00B8B8]'
                  }`}
                  style={activeCategory === cat.slug ? { background: '#00B8B8' } : {}}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-[#0A0A0A]">{activeCategoryLabel}</h2>
              <p className="text-sm text-[#6B7280] mt-1">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">No products found</h3>
              <p className="text-[#6B7280]">Try adjusting your search or category filter.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('') }}
                className="mt-4 text-sm font-semibold underline"
                style={{ color: '#00B8B8' }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="group block bg-white rounded-2xl border border-gray-100 hover:border-[#00B8B8]/40 hover:shadow-lg hover:shadow-[#00B8B8]/5 transition-all overflow-hidden h-full"
                  >
                    {/* Top accent */}
                    <div className="h-1 w-full" style={{ background: '#00B8B8' }} />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#E0F9F9] text-[#00B8B8]">
                          {productCategories.find((c) => c.slug === product.category)?.name || product.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0A0A0A] mb-1 group-hover:text-[#00B8B8] transition-colors font-mono">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-[#6B7280] mb-3">{product.short_spec}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-[#F5F7F8] text-[#2A2A2A] font-mono">
                          {product.frequency_range}
                        </span>
                      </div>
                      <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1 text-sm font-semibold text-[#00B8B8]">
                          View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <span className="text-xs text-[#6B7280]">Request datasheet</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* Custom enquiry banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#0A0A0A] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Don't see exactly what you need?</h3>
              <p className="text-[#6B7280] text-sm">
                We engineer custom RF components to your exact specification. Share your requirement and our team will respond within 24 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 px-6 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
              style={{ background: '#00B8B8' }}
            >
              Request Custom Design
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-[#6B7280]">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
