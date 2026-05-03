'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react'
import { industries } from '@/lib/data'

const industryColors: Record<string, { bg: string; text: string; accent: string }> = {
  telecom: { bg: '#E0F9F9', text: '#00B8B8', accent: '#00B8B8' },
  defense: { bg: '#E8E8E8', text: '#2A2A2A', accent: '#2A2A2A' },
  automotive: { bg: '#DBEAFE', text: '#1A7AC4', accent: '#1A7AC4' },
  industrial: { bg: '#FEF3C7', text: '#92400E', accent: '#E08020' },
  iot: { bg: '#EDE9FE', text: '#5B21B6', accent: '#6C5CE7' },
}

export default function IndustriesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
            <Link href="/" className="hover:text-[#00B8B8]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0A0A0A]">Industries</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#E0F9F9] text-[#00B8B8]">
              Industries Served
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] mb-5">
              RF Precision Across Every Critical Sector
            </h1>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              Anand Technologies supports India's most demanding RF applications — from 5G network infrastructure to defense-grade microwave systems and connected vehicle communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-4 bg-[#F5F7F8] border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {industries.map((ind) => (
              <a
                key={ind.slug}
                href={`#${ind.slug}`}
                className="flex-shrink-0 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors text-[#6B7280] hover:text-[#00B8B8] hover:bg-white"
              >
                {ind.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry sections */}
      {industries.map((industry, i) => {
        const colors = industryColors[industry.slug] || industryColors.telecom
        return (
          <section
            key={industry.slug}
            id={industry.slug}
            className={`py-20 scroll-mt-24 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F5F7F8]'}`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="grid lg:grid-cols-2 gap-14 items-start">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={i % 2 !== 0 ? 'lg:order-2' : ''}
                >
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold mb-5"
                    style={{ background: colors.bg, color: colors.text }}
                  >
                    {industry.name}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">
                    {industry.description}
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280] mb-3">
                      Key Challenges
                    </h3>
                    <p className="text-[#2A2A2A] leading-relaxed bg-[#F5F7F8] rounded-xl p-4 text-sm">
                      {industry.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280] mb-3">
                      Anand Technologies Solutions
                    </h3>
                    <ul className="space-y-3">
                      {industry.solutions.map((sol) => (
                        <li key={sol} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.accent }} />
                          <span className="text-sm text-[#2A2A2A] leading-relaxed">{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                    style={{ color: colors.accent }}
                  >
                    Discuss your {industry.name} RF requirement <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Products panel */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={i % 2 !== 0 ? 'lg:order-1' : ''}
                >
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6B7280] mb-4">
                      Relevant Product Categories
                    </h3>
                    <div className="space-y-3 mb-6">
                      {industry.products.map((prod) => (
                        <div key={prod} className="flex items-center justify-between p-3.5 rounded-xl bg-[#F5F7F8]">
                          <span className="text-sm font-semibold text-[#0A0A0A]">{prod}</span>
                          <ArrowRight className="w-4 h-4 text-[#6B7280]" />
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/products?category=${industry.products[0].toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                      style={{ background: colors.accent }}
                    >
                      Browse Related Products <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Stats */}
                  <div
                    className="mt-4 rounded-2xl p-6 text-white"
                    style={{ background: colors.accent === '#2A2A2A' ? '#2A2A2A' : '#0A0A0A' }}
                  >
                    <p className="text-sm text-white/70 italic leading-relaxed">
                      "Anand Technologies has been a reliable RF component partner for our infrastructure programs. Their engineering engagement and delivery consistency is exceptional."
                    </p>
                    <div className="mt-3 text-xs text-white/50">— Procurement Lead, Major Indian Telecom OEM</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Industry, Your RF Challenge — We Solve It
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Our engineering team has deep vertical expertise. Bring us your application requirement and we'll engineer the right solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl hover:opacity-90 transition-all"
              style={{ background: '#00B8B8' }}
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
