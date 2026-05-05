'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Download, Mail, Phone, CheckCircle2 } from 'lucide-react'

type Props = {
  product: (typeof import('@/lib/data').sampleProducts)[0] & {
    product_name: string
    datasheet_url: string | null
  }
  category?: (typeof import('@/lib/data').productCategories)[0]
}

export default function ProductDetailPage({ product, category }: Props) {
  const [activeTab, setActiveTab] = useState<'overview' | 'specifications'>('overview')

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

      {/* Product hero — Tab 1: Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left: main content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Category + frequency badges */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#E0F9F9] text-[#00B8B8]">
                    {category?.name || product.category}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#F5F7F8] text-[#2A2A2A]">
                    {product.frequency_range}
                  </span>
                </div>

                {/* Product name + part number */}
                <h1 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-1">{product.product_name}</h1>
                <p className="text-base text-[#6B7280] font-medium mb-2">
                  Part Number: <span className="font-mono font-semibold text-[#2A2A2A]">{product.name}</span>
                </p>
                <p className="text-lg text-[#6B7280] font-medium mb-6">{product.short_spec}</p>

                {/* Product image */}
                {product.image_url && (
                  <div className="mb-8 rounded-2xl border border-gray-100 overflow-hidden bg-[#F5F7F8] flex items-center justify-center p-6" style={{ minHeight: 220 }}>
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      width={360}
                      height={220}
                      className="object-contain max-h-52"
                    />
                  </div>
                )}

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-8">
                  <div className="flex gap-0">
                    {(['overview', 'specifications'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors capitalize ${
                          activeTab === tab
                            ? 'border-[#00B8B8] text-[#00B8B8]'
                            : 'border-transparent text-[#6B7280] hover:text-[#0A0A0A]'
                        }`}
                      >
                        {tab === 'overview' ? 'Overview' : 'Specifications & Datasheet'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab 1: Overview */}
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">Product Overview</h2>
                    <p className="text-base text-[#2A2A2A] leading-relaxed mb-8">{product.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      <div className="bg-[#F5F7F8] rounded-xl p-5 border border-gray-100">
                        <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">Product Name</div>
                        <div className="font-bold text-[#0A0A0A]">{product.product_name}</div>
                        <div className="text-xs font-mono text-[#6B7280] mt-1">{product.name}</div>
                      </div>
                      <div className="bg-[#F5F7F8] rounded-xl p-5 border border-gray-100">
                        <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">Frequency Range</div>
                        <div className="font-mono font-bold text-[#0A0A0A]">{product.frequency_range}</div>
                      </div>
                    </div>

                    {/* Key specs preview */}
                    <h3 className="text-base font-bold text-[#0A0A0A] mb-3">Key Specifications</h3>
                    <div className="rounded-2xl border border-gray-100 overflow-hidden mb-8">
                      {Object.entries(product.specs).slice(0, 4).map(([key, value], idx) => (
                        <div
                          key={key}
                          className={`flex items-center justify-between px-5 py-3.5 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F5F7F8]'}`}
                        >
                          <span className="text-sm font-medium text-[#6B7280]">{key}</span>
                          <span className="text-sm font-semibold text-[#0A0A0A] font-mono">{value}</span>
                        </div>
                      ))}
                      {Object.keys(product.specs).length > 4 && (
                        <button
                          onClick={() => setActiveTab('specifications')}
                          className="w-full px-5 py-3 text-sm font-semibold text-center text-[#00B8B8] bg-[#E0F9F9] hover:bg-[#00B8B8]/10 transition-colors"
                        >
                          View all {Object.keys(product.specs).length} specifications →
                        </button>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
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
                        <button
                          onClick={() => setActiveTab('specifications')}
                          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0A0A0A] rounded-xl border border-gray-200 hover:border-[#00B8B8] hover:text-[#00B8B8] transition-all"
                        >
                          <Download className="w-4 h-4" /> View Datasheet Info
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Tab 2: Specifications & Datasheet */}
                {activeTab === 'specifications' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Technical Specifications */}
                    <h2 className="text-xl font-bold text-[#0A0A0A] mb-5">Technical Specifications</h2>
                    <div className="rounded-2xl border border-gray-100 overflow-hidden mb-8">
                      {Object.entries(product.specs).map(([key, value], idx) => (
                        <div
                          key={key}
                          className={`flex items-center justify-between px-5 py-3.5 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F5F7F8]'}`}
                        >
                          <span className="text-sm font-medium text-[#6B7280]">{key}</span>
                          <span className="text-sm font-semibold text-[#0A0A0A] font-mono">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Mechanical Specifications placeholder */}
                    <h2 className="text-xl font-bold text-[#0A0A0A] mb-5">Mechanical Specifications</h2>
                    <div className="rounded-2xl border border-gray-100 overflow-hidden mb-8">
                      {[
                        ['Housing', 'ABS / Aluminium (varies by model)'],
                        ['Operating Temperature', '-40°C to +85°C'],
                        ['Storage Temperature', '-55°C to +100°C'],
                        ['Humidity', 'Up to 95% non-condensing'],
                      ].map(([key, value], idx) => (
                        <div
                          key={key}
                          className={`flex items-center justify-between px-5 py-3.5 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F5F7F8]'}`}
                        >
                          <span className="text-sm font-medium text-[#6B7280]">{key}</span>
                          <span className="text-sm font-semibold text-[#0A0A0A] font-mono">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Datasheet */}
                    <h2 className="text-xl font-bold text-[#0A0A0A] mb-5">Datasheet</h2>
                    {product.datasheet_url ? (
                      <div className="rounded-2xl border border-[#00B8B8]/30 bg-[#E0F9F9] p-6 flex items-center justify-between gap-4">
                        <div>
                          <div className="font-semibold text-[#0A0A0A] mb-1">{product.name} — Product Datasheet</div>
                          <div className="text-sm text-[#6B7280]">PDF — Official Anand Technologies specification sheet</div>
                        </div>
                        <a
                          href={product.datasheet_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                          style={{ background: '#00B8B8' }}
                        >
                          <Download className="w-4 h-4" /> Download PDF
                        </a>
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-gray-200 p-6 flex items-center justify-between gap-4">
                        <div>
                          <div className="font-semibold text-[#0A0A0A] mb-1">Datasheet available on request</div>
                          <div className="text-sm text-[#6B7280]">Contact our team to receive the full product specification sheet.</div>
                        </div>
                        <Link
                          href={`/contact?product=${encodeURIComponent(product.name)}`}
                          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                          style={{ background: '#00B8B8' }}
                        >
                          <Mail className="w-4 h-4" /> Request Datasheet
                        </Link>
                      </div>
                    )}

                    {/* Quote CTA */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                        style={{ background: '#00B8B8' }}
                      >
                        Request Quote <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
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
                    href="tel:+918025723143"
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
                    '35+ years of RF engineering',
                    'In-house design & manufacturing',
                    '100% tested before shipment',
                    'MIL-SPEC capability',
                    'MSME & Defence sector authorised',
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
    'gsm-lte-antennas': ['GSM/4G modems and routers', 'M2M and IoT gateways', 'Vehicle tracking units', 'Industrial SCADA telemetry'],
    'gps-gnss-antennas': ['Vehicle navigation systems', 'Fleet tracking devices', 'SCADA / RTK applications', 'Defense positioning systems'],
    'wifi-antennas': ['Wi-Fi access points and CPE', 'Industrial wireless routers', 'Outdoor mesh networks', 'Smart city deployments'],
    'vhf-uhf-antennas': ['Land mobile radio handsets', 'Military tactical comms', 'TETRA / P25 base stations', 'Radio scanners'],
    'high-gain-antennas': ['Microwave backhaul links', 'SATCOM VSAT terminals', 'Long-range point-to-point', 'SIGINT / ELINT systems'],
    'rfid-antennas': ['Asset tracking systems', 'Access control', 'Logistics and warehousing', 'Smart manufacturing'],
    'lpa-antennas': ['EMC / EMI pre-compliance testing', 'SIGINT and spectrum monitoring', 'Wideband RF measurement', 'Electronic warfare'],
    'duplexers': ['5G NR base station TRx', 'Military radio FDD systems', 'TETRA / P25 land mobile', 'Microwave backhaul'],
    'diplexers': ['Multi-band antenna combining', '4G/5G RRU dual-band', 'IoT gateway multi-protocol', 'Automotive V2X'],
    'power-splitters': ['DAS / repeater distribution', 'Test and measurement', 'GPS signal splitting', 'Multi-antenna systems'],
    'attenuators': ['RF lab bench setups', 'Transmit power control', 'Receiver front-end protection', 'Test equipment calibration'],
    'couplers': ['Power monitoring systems', 'Signal sampling / tapping', 'Antenna VSWR measurement', 'Feedback loop control'],
    'band-pass-filters': ['LTE / 5G base station chains', 'Radar front-end', 'ISM band interference rejection', 'SATCOM receivers'],
    'rf-cable-assemblies': ['Antenna-to-RRU jumpers', 'Lab instrument connections', 'Tower-top feeders', 'Vehicle-mounted RF systems'],
    'power-amplifiers': ['PA driver stages', 'Receiver LNA front-ends', 'Test bench amplification', 'Repeater signal boosting'],
    'waveguide': ['Microwave subsystem integration', 'High-power radar', 'mmWave research', 'Defence EW systems'],
  }
  return map[category] || ['Custom RF systems', 'Telecom infrastructure', 'Defense applications']
}
