'use client'

import { motion } from 'framer-motion'
import { FlaskConical, Settings, Rocket, CheckCircle2, Factory, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'In-House R&D',
    description:
      'Dedicated RF design engineering team with expertise in EM simulation, network analysis, and component characterization using industry-standard tools.',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Custom Engineering',
    description:
      'Every requirement receives bespoke engineering attention. We design to your exact frequency, power, size, and environmental specifications.',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Fast Prototyping',
    description:
      'In-house fabrication and prototyping capabilities reduce lead times dramatically. From concept to characterized prototype in days, not months.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Testing & Validation',
    description:
      'Full S-parameter, power handling, and environmental test coverage. Calibrated VNA, spectrum analyzer, and thermal cycling facilities on-site.',
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'Quality Manufacturing',
    description:
      'ISO-compliant manufacturing processes with rigorous incoming material inspection, in-process quality control, and 100% final test before shipment.',
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'Long-Term Partnership',
    description:
      'We engineer for the lifecycle of your program — from initial design support through production to sustaining engineering and product evolution.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#E0F9F9] text-[#00B8B8]">
              Why Anand Technologies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-6 leading-tight">
              Engineering Credibility Backed by Decades of Delivery
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              Our Bengaluru-based team combines 20+ years of RF engineering depth with a manufacturing-first mindset. We don't just design — we build, test, and deliver to specification, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F5F7F8] border border-gray-100">
                <div className="w-2 h-2 rounded-full" style={{ background: '#00B8B8' }} />
                <span className="text-sm font-medium text-[#2A2A2A]">ISO-compliant processes</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F5F7F8] border border-gray-100">
                <div className="w-2 h-2 rounded-full" style={{ background: '#00B8B8' }} />
                <span className="text-sm font-medium text-[#2A2A2A]">MIL-SPEC capable</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F5F7F8] border border-gray-100">
                <div className="w-2 h-2 rounded-full" style={{ background: '#00B8B8' }} />
                <span className="text-sm font-medium text-[#2A2A2A]">Made in India</span>
              </div>
            </div>
          </motion.div>

          {/* Right: grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#00B8B8]/30 hover:shadow-md hover:shadow-[#00B8B8]/5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E0F9F9] flex items-center justify-center mb-3 text-[#00B8B8] group-hover:bg-[#00B8B8] group-hover:text-white transition-colors">
                  {reason.icon}
                </div>
                <h3 className="text-sm font-semibold text-[#0A0A0A] mb-1.5">{reason.title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
