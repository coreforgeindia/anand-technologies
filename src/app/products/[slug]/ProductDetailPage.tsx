'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Download, Mail, Phone, CheckCircle2 } from 'lucide-react'
import type { Product } from '@/lib/supabase'

type Props = {
  product: (typeof import('@/lib/data').sampleProducts)[0]
  category?: (typeof import('@/lib/data').productCategories)[0]
}

export default function ProductDetailPage({ product, category }: Props) {
  return (
    <>
      {/* Breadcrumb */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Link href="/" className="hover:text-[#00B8B8] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-[#00B8B8] transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            {category && (
              <>
                <Link href={`/products?category=${category.slug}`} className="hover:text-[#00B8B8] transition-colors">
                  {category.name}
                </Link>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
            <span className="text-[#0A0A0A] font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product hero */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: details */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#E0F9F9] text-[#00B8B8]">
                    {category?.name || product.category}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#F5F7F8] text-[#2A2A2A]">
                    {product.frequency_range}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] font-mono mb-2">{product.name}</h1>
                <p className="text-xl text-[#6B7280] font-medium mb-6">{product.short_spec}</p>

                <p className="text-base text-[#2A2A2A] leading-relaxed mb-8">{product.description}</p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mb-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                    style={{ background: '#00B8B8' }}
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  {product.datasheet_url ? (
                    <a
                      href={product.datasheet_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0A0A0A] rounded-xl border border-gray-200 hover:border-[#00B8B8] hover:text-[#00B8B8] transition-all"
                    >
                      <Download className="w-4 h-4" /> Download Datasheet
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0A0A0A] rounded-xl border border-gray-200 hover:border-[#00B8B8] hover:text-[#00B8B8] transition-all"
                    >
                      <Download className="w-4 h-4" /> Request Datasheet
                    </Link>
                  )}
                </div>

                {/* Technical Specifications */}
                <div>
                  <h2 className="text-xl font-bold text-[#0A0A0A] mb-5">Technical Specifications</h2>
                  <div className="rounded-2xl border border-gray-100 overflow-hidden">
                    {Object.entries(product.specs).map(([key, value], idx) => (
                      <div
                        key={key}
                        className={`flex items-center justify-between px-5 py-3.5 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-[#F5F7F8]'
                        }`}
                      >
                        <span className="text-sm font-medium text-[#6B7280]">{key}</span>
                        <span className="text-sm font-semibold text-[#0A0A0A] font-mono">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5"
            >
              {/* Enquiry card */}
              <div className="bg-[#F5F7F8] rounded-2xl p-6 border border-gray-100">
                <h3 className="text-base font-bold text-[#0A0A0A] mb-4">Enquire About This Product</h3>
                <p className="text-sm text-[#6B7280] mb-5">
                  Get pricing, availability, and custom spec options from our sales team.
                </p>
                <div className="space-y-3">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                    style={{ background: '#00B8B8' }}
                  >
                    <Mail className="w-4 h-4" /> Email Enquiry
                  </Link>
                  <a
                    href="tel:+918000000000"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-[#0A0A0A] rounded-xl border border-gray-200 hover:border-[#00B8B8] hover:text-[#00B8B8] transition-all"
                  >
                    <Phone className="w-4 h-4" /> Call Sales
                  </a>
                </div>
              </div>

              {/* Use cases */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-base font-bold text-[#0A0A0A] mb-4">Typical Applications</h3>
                <ul className="space-y-2.5">
                  {getUseCases(product.category).map((uc) => (
                    <li key={uc} className="flex items-start gap-2.5 text-sm text-[#2A2A2A]">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00B8B8' }} />
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Anand */}
              <div className="rounded-2xl p-6 border text-white" style={{ background: '#00B8B8' }}>
                <h3 className="text-base font-bold mb-3">Why Anand Technologies?</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  {[
                    'In-house design & manufacturing',
                    '100% tested before shipment',
                    'Custom specs on request',
                    'MIL-SPEC capability',
                    'Fast turnaround on prototypes',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

function getUseCases(category: string): string[] {
  const map: Record<string, string[]> = {
    filters: [
      'LTE/5G base station RF chains',
      'Radar front-end signal conditioning',
      'ISM band interference rejection',
      'SATCOM ground station receivers',
      'Electronic warfare filter banks',
    ],
    duplexers: [
      '5G NR macro base station TRx',
      'Military radio FDD transceivers',
      'TETRA/P25 land mobile radio',
      'Microwave backhaul equipment',
    ],
    diplexers: [
      'Multi-band antenna port combining',
      '4G/5G RRU dual-band operation',
      'IoT gateway multi-protocol support',
      'Automotive V2X coexistence',
    ],
    'rf-cable-assemblies': [
      'Antenna-to-RRU jump cables',
      'Lab bench instrument connections',
      'Tower-top feeder systems',
      'Vehicle-mounted RF systems',
    ],
    'low-gain-antennas': [
      'IoT sensor node connectivity',
      'SCADA field terminal telemetry',
      'Wi-Fi/cellular access points',
      'Vehicle tracking units',
    ],
    'high-gain-antennas': [
      'Microwave backhaul links',
      'SATCOM VSAT terminals',
      'Radar systems',
      'Electronic intelligence (ELINT)',
    ],
    'microwave-devices': [
      'PA protection isolators',
      'Power distribution networks',
      'Test and measurement setups',
      'Phased array beam networks',
    ],
    'precision-rf-components': [
      'Defense subsystem integration',
      'Avionics RF assemblies',
      'Space-qualified electronics',
      'High-reliability industrial systems',
    ],
  }
  return map[category] || ['Custom RF systems', 'Telecom infrastructure', 'Defense applications']
}
