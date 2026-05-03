'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Zap, Shield, Cpu } from 'lucide-react'

const tags = ['Telecom', '5G/6G', 'Defense', 'Automotive', 'Industrial', 'IoT']

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden bg-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#00B8B8 1px, transparent 1px), linear-gradient(90deg, #00B8B8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradient accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00B8B8 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00B8B8 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00B8B8]/30 bg-[#E0F9F9] text-[#00B8B8] text-sm font-medium mb-8"
          >
            <Zap className="w-3.5 h-3.5" />
            India's Precision RF & Microwave Engineering Partner
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A0A0A] leading-[1.1] tracking-tight mb-6"
          >
            Precision RF &{' '}
            <span className="relative">
              <span style={{ color: '#00B8B8' }}>Microwave Engineering</span>
            </span>
            <br />
            for Mission-Critical Systems
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-[#6B7280] leading-relaxed mb-10 max-w-3xl"
          >
            From 5G base station filtering to defense-grade microwave subsystems — Anand Technologies engineers and manufactures high-performance RF components trusted across telecom, defense, automotive, industrial, and IoT applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:shadow-xl hover:shadow-[#00B8B8]/20 hover:-translate-y-0.5"
              style={{ background: '#00B8B8' }}
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-[#0A0A0A] rounded-xl border border-gray-200 bg-white hover:border-[#00B8B8] hover:text-[#00B8B8] transition-all hover:-translate-y-0.5"
            >
              Explore Products
            </Link>
          </motion.div>

          {/* Industry tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="text-sm text-[#6B7280] mr-2">Serving:</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#F5F7F8] text-[#2A2A2A] border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#6B7280]"
      >
        <span className="text-xs">Scroll to explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
