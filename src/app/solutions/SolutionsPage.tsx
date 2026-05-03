'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight, CheckCircle2, FileText, FlaskConical, Cpu, TestTube, Factory, Truck } from 'lucide-react'

const workflowSteps = [
  {
    step: '01',
    icon: <FileText className="w-6 h-6" />,
    title: 'Requirement Analysis',
    description:
      'We start by thoroughly understanding your RF requirement — frequency plan, performance specs, environmental conditions, size constraints, and integration interface. NDA signed on request.',
    deliverable: 'Technical requirements document + feasibility confirmation',
  },
  {
    step: '02',
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'Design & Simulation',
    description:
      'Our RF engineers use ANSYS HFSS, CST Microwave Studio, and AWR for EM simulation and circuit-level design. Multiple design iterations are evaluated before hardware is built.',
    deliverable: 'Simulation report, predicted S-parameters, 3D mechanical design',
  },
  {
    step: '03',
    icon: <Cpu className="w-6 h-6" />,
    title: 'Prototype Fabrication',
    description:
      'In-house CNC machining, SMT assembly, and connector attachment. First-article prototypes are fabricated with production-intent processes to de-risk the transition to volume.',
    deliverable: 'Prototype hardware (typically 2–5 units) for customer evaluation',
  },
  {
    step: '04',
    icon: <TestTube className="w-6 h-6" />,
    title: 'Characterization & Testing',
    description:
      'Full S-parameter, power handling, PIM, and environmental test coverage using calibrated instruments. All data is reported against specification with pass/fail determination.',
    deliverable: 'Detailed test report with measured vs. specified data',
  },
  {
    step: '05',
    icon: <Factory className="w-6 h-6" />,
    title: 'Production',
    description:
      'Transfer to production with validated manufacturing instructions, in-process test limits, and final test procedures. ISO-compliant production floor with MES traceability.',
    deliverable: 'Production-grade components with full traceability and CoC',
  },
  {
    step: '06',
    icon: <Truck className="w-6 h-6" />,
    title: 'Delivery & Support',
    description:
      'Reliable on-time delivery with packing optimized for RF component protection. Sustaining engineering support for product lifecycle management and engineering change control.',
    deliverable: 'On-time shipment + post-delivery application support',
  },
]

const capabilities = [
  {
    category: 'Filter Design',
    items: [
      'Cavity bandpass filters: 400 MHz – 20 GHz',
      'Interdigital, combline, and cross-coupled topologies',
      'LC lumped and distributed element filters',
      'Tunable and switched filter banks',
    ],
  },
  {
    category: 'Antenna Engineering',
    items: [
      'Patch, Yagi, horn, and reflector designs',
      'mmWave 26/28/39 GHz panel antennas',
      'Conformal and embedded antennas',
      'Custom polarization and beam shaping',
    ],
  },
  {
    category: 'Passive Microwave',
    items: [
      'Ferrite isolators and circulators (1–18 GHz)',
      'Wilkinson and hybrid power dividers',
      'Directional and hybrid couplers',
      'Precision attenuators and terminations',
    ],
  },
  {
    category: 'RF Cable Assemblies',
    items: [
      'SMA, N-Type, 2.92mm, 2.4mm, 1.85mm',
      'LMR, Times Microwave, Gore cable options',
      'Low-PIM assemblies per IEC 62037',
      'Custom lengths, angles, and ruggedization',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
            <Link href="/" className="hover:text-[#00B8B8]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0A0A0A]">Custom Solutions</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#E0F9F9] text-[#00B8B8]">
              Custom Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] mb-5">
              From Requirement to Production — Complete RF Engineering Partnership
            </h1>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              When catalog products don't meet your specification, Anand Technologies engineers the solution from first principles. We own the entire development cycle — design, prototype, test, and manufacture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">Our Engineering Workflow</h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              A structured, milestone-driven development process that de-risks your program and delivers to specification.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B8B8]/30 to-transparent" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00B8B8]/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ background: '#00B8B8' }}
                    >
                      {step.icon}
                    </div>
                    <span className="text-3xl font-bold text-gray-100 select-none">{step.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0A0A0A] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{step.description}</p>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-[#00B8B8]">Deliverable:</p>
                    <p className="text-xs text-[#6B7280] mt-0.5">{step.deliverable}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">Engineering Capabilities</h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Deep technical coverage across passive RF and microwave component types.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#F5F7F8] rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#00B8B8' }}>
                  {cap.category}
                </h3>
                <ul className="space-y-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#00B8B8' }} />
                      <span className="text-sm text-[#2A2A2A] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 bg-[#E0F9F9] text-[#00B8B8]">
                Test & Validation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                Every Component Tested to Specification Before Shipment
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-8">
                Our Bengaluru test facility operates calibrated RF measurement equipment covering the full frequency range of our product portfolio. No component ships without a documented test record.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                style={{ background: '#00B8B8' }}
              >
                Start Custom RF Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { metric: '100 kHz – 67 GHz', label: 'VNA frequency coverage' },
                { metric: 'IEC 62037', label: 'PIM test standard' },
                { metric: '–55°C to +125°C', label: 'Thermal test range' },
                { metric: '100%', label: 'Final test before shipment' },
                { metric: '5G NR', label: 'Protocol-level validation' },
                { metric: 'MIL-SPEC', label: 'Environmental qualification' },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="text-xl font-bold font-mono mb-1" style={{ color: '#00B8B8' }}>{item.metric}</div>
                  <div className="text-xs text-[#6B7280]">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
