'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Clock, Tag } from 'lucide-react'
import { resourceArticles } from '@/lib/data'

const categoryColors: Record<string, { bg: string; text: string }> = {
  'RF Guides': { bg: '#E0F9F9', text: '#00B8B8' },
  'Application Notes': { bg: '#DBEAFE', text: '#1A7AC4' },
  'Technical Blogs': { bg: '#EDE9FE', text: '#5B21B6' },
}

export default function ResourcesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
            <Link href="/" className="hover:text-[#00B8B8]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0A0A0A]">Resources</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#E0F9F9] text-[#00B8B8]">
              Technical Resources
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] mb-5">
              RF Engineering Knowledge Base
            </h1>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              Technical guides, application notes, and engineering articles to help you specify, select, and deploy RF and microwave components with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceArticles.map((article, i) => {
              const catColor = categoryColors[article.category] || categoryColors['Technical Blogs']
              return (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    href={`/resources/${article.slug}`}
                    className="group block bg-white rounded-2xl border border-gray-100 hover:border-[#00B8B8]/30 hover:shadow-lg hover:shadow-[#00B8B8]/5 transition-all overflow-hidden h-full"
                  >
                    <div className="h-1" style={{ background: '#00B8B8' }} />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold"
                          style={{ background: catColor.bg, color: catColor.text }}
                        >
                          <Tag className="w-3 h-3" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#6B7280]">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-[#0A0A0A] mb-3 leading-snug group-hover:text-[#00B8B8] transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-[#6B7280] leading-relaxed mb-5 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-xs text-[#6B7280]">{article.date}</span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-[#00B8B8]">
                          Read article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Newsletter subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#0A0A0A] rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">Stay Updated on RF Engineering</h3>
            <p className="text-[#6B7280] text-sm mb-6 max-w-xl mx-auto">
              Receive new technical articles, application notes, and product updates directly from our engineering team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@company.com"
                className="w-full sm:flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#00B8B8]"
              />
              <button
                type="button"
                className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all flex-shrink-0"
                style={{ background: '#00B8B8' }}
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
