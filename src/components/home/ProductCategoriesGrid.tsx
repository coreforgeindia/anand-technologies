'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight, Filter, ArrowLeftRight, Split, Cable,
  Radio, Waves, Tag, Activity, Minus, Share2, Zap, GitBranch, Wifi, Signal
} from 'lucide-react'
import { productCategories } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  'gsm-lte-antennas': <Radio className="w-6 h-6" />,
  'gps-gnss-antennas': <Signal className="w-6 h-6" />,
  'wifi-antennas': <Wifi className="w-6 h-6" />,
  'vhf-uhf-antennas': <Waves className="w-6 h-6" />,
  'high-gain-antennas': <Activity className="w-6 h-6" />,
  'rfid-antennas': <Tag className="w-6 h-6" />,
  'lpa-antennas': <Activity className="w-6 h-6" />,
  'duplexers': <ArrowLeftRight className="w-6 h-6" />,
  'diplexers': <Split className="w-6 h-6" />,
  'power-splitters': <GitBranch className="w-6 h-6" />,
  'attenuators': <Minus className="w-6 h-6" />,
  'couplers': <Share2 className="w-6 h-6" />,
  'band-pass-filters': <Filter className="w-6 h-6" />,
  'lightning-arrestors': <Zap className="w-6 h-6" />,
  'rf-cable-assemblies': <Cable className="w-6 h-6" />,
  'power-amplifiers': <Zap className="w-6 h-6" />,
  'waveguide': <Waves className="w-6 h-6" />,
}

export default function ProductCategoriesGrid() {
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
            Product Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4">
            Engineered for Every RF Challenge
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            1,700+ products across 17 categories — from MHz-range VHF antennas to X-band waveguide components.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={`/products?category=${cat.slug}`}
                className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00B8B8]/30 hover:shadow-lg hover:shadow-[#00B8B8]/5 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E0F9F9] group-hover:bg-[#00B8B8] flex items-center justify-center mb-4 transition-colors">
                  <span className="text-[#00B8B8] group-hover:text-white transition-colors">
                    {iconMap[cat.slug] || <Radio className="w-6 h-6" />}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[#0A0A0A] mb-2 group-hover:text-[#00B8B8] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#00B8B8] opacity-0 group-hover:opacity-100 transition-opacity">
                  View products <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90"
            style={{ background: '#00B8B8' }}
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
