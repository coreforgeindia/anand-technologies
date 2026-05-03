'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { industries } from '@/lib/data'

const industryColors: Record<string, string> = {
  telecom: '#00B8B8',
  defense: '#2A2A2A',
  automotive: '#1A7AC4',
  industrial: '#E08020',
  iot: '#6C5CE7',
}

export default function IndustriesServed() {
  return (
    <section className="py-20 bg-[#F5F7F8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#E0F9F9] text-[#00B8B8]">
            Industries Served
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4">
            RF Precision Across Every Sector
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Trusted by procurement teams and system integrators across India's most demanding verticals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/industries#${industry.slug}`}
                className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00B8B8]/30 hover:shadow-lg hover:shadow-[#00B8B8]/5 transition-all h-full"
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-white mb-4"
                  style={{ background: industryColors[industry.slug] || '#00B8B8' }}
                >
                  {industry.name}
                </div>
                <h3 className="text-base font-semibold text-[#0A0A0A] mb-2 group-hover:text-[#00B8B8] transition-colors">
                  {industry.description.split('.')[0]}
                </h3>
                <ul className="space-y-1.5 mt-3 mb-4">
                  {industry.solutions.slice(0, 2).map((sol) => (
                    <li key={sol} className="flex items-start gap-2 text-xs text-[#6B7280]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#00B8B8' }} />
                      {sol}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#00B8B8]">
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
