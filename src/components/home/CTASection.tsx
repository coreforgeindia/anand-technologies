'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#00B8B8 1px, transparent 1px), linear-gradient(90deg, #00B8B8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] opacity-10 pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse, #00B8B8 0%, transparent 70%)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-[#E0F9F9] text-[#00B8B8]">
            Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Discuss Your RF Requirement Today
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you need a standard catalog product, a modified design, or a fully custom RF solution — our engineering team is ready to evaluate your requirement and provide a technical and commercial response within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:shadow-2xl hover:shadow-[#00B8B8]/30"
              style={{ background: '#00B8B8' }}
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+918000000000"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl border border-white/20 hover:border-[#00B8B8] hover:text-[#00B8B8] transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Sales
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-[#6B7280]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: '#00B8B8' }} />
              24-hour technical response
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: '#00B8B8' }} />
              Custom engineering support
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: '#00B8B8' }} />
              NDA available on request
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
