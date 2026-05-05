'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight, MapPin, FlaskConical, Shield, Award, Users, Factory, Cpu, BadgeCheck
} from 'lucide-react'

const milestones = [
  { year: '1989', title: 'Founded in Bengaluru', description: 'Anand Technologies established as a precision RF component design and manufacturing firm, serving India\'s growing telecom and defence sectors.' },
  { year: '1995', title: 'Defence Program Entry', description: 'First supply of MIL-SPEC RF filters and duplexers to Indian defence integrators — a milestone in credibility and precision manufacturing.' },
  { year: '2004', title: 'ISO 9001 Certification', description: 'Achieved ISO 9001 certification, formalizing quality management processes across design, manufacturing, and test operations.' },
  { year: '2010', title: 'MSME Registration', description: 'Registered as Micro, Small & Medium Enterprise, reinforcing our commitment to Indian manufacturing and self-reliance.' },
  { year: '2016', title: '4G LTE Supply Scale-Up', description: 'Scaled production of LTE cavity filters and duplexers to meet India\'s 4G rollout demand, supplying major telecom OEMs and tower companies.' },
  { year: '2019', title: 'Custom RF Solutions Launch', description: 'Launched dedicated custom engineering services for automotive V2X, IoT gateway, and industrial SCADA RF applications.' },
  { year: '2022', title: '5G NR Product Range', description: 'Introduced 5G NR sub-6 GHz and mmWave product lines — duplexers, filters, and cable assemblies for next-generation base stations.' },
  { year: '2024', title: 'State-of-the-Art Lab', description: 'Expanded RF characterization lab with additional VNA channels, PIM test capability, and environmental testing chambers.' },
]

const capabilities = [
  { icon: <FlaskConical className="w-6 h-6" />, title: 'EM Simulation & Design', description: 'ANSYS HFSS, CST Microwave Studio, and AWR-based electromagnetic simulation for filter, antenna, and passive component design.' },
  { icon: <Factory className="w-6 h-6" />, title: 'Precision CNC Machining', description: 'In-house CNC milling and turning for cavity filter bodies, flanges, and enclosures in aluminum, brass, and stainless steel.' },
  { icon: <Cpu className="w-6 h-6" />, title: 'Surface Mount Assembly', description: 'SMT line for PCB-based RF assemblies — attenuators, splitters, and active RF modules — with IPC-A-610 quality standards.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Environmental Testing', description: 'Thermal cycling (-55°C to +125°C), vibration, and humidity testing in-house. Accelerated life testing for defense programs.' },
  { icon: <Award className="w-6 h-6" />, title: 'RF Characterization', description: 'Calibrated VNA (100 kHz – 67 GHz), spectrum analyzers, PIM test (IEC 62037), and power handling measurement systems.' },
  { icon: <Users className="w-6 h-6" />, title: 'Engineering Consultation', description: 'Techno-commercial support from requirement definition through acceptance test. We partner with your program team from day one.' },
]

const leadership = [
  {
    name: 'A. Ramachandran',
    title: 'Founder & CEO',
    background: 'Microwave Engineering, IIT Madras. 30+ years in RF system design and component manufacturing. Former principal engineer at a leading DRDO laboratory.',
  },
  {
    name: 'Priya Anand',
    title: 'Director — Engineering',
    background: 'RF/Microwave Engineering, IISc Bengaluru. Expert in passive component design, filter synthesis, and MIL-SPEC qualification processes.',
  },
  {
    name: 'Suresh Krishnan',
    title: 'Director — Operations & Quality',
    background: '25+ years in precision manufacturing and quality management. ISO 9001 lead auditor. Deep expertise in RF component production scale-up.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-[#E0F9F9] text-[#00B8B8]">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight">
                35+ Years of RF Engineering Excellence from Bengaluru
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                Anand Technologies was founded on a singular conviction: India's telecom, defense, and industrial sectors deserve precision RF components engineered and manufactured at home, to the highest international standards.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: '35+ Years Experience', icon: <Award className="w-4 h-4" /> },
                  { label: 'MSME Certified', icon: <BadgeCheck className="w-4 h-4" /> },
                  { label: 'Defence Sector Authorised', icon: <Shield className="w-4 h-4" /> },
                  { label: '20+ Years Leadership', icon: <Users className="w-4 h-4" /> },
                ].map((badge) => (
                  <span key={badge.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E0F9F9] text-[#00B8B8]">
                    {badge.icon} {badge.label}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <MapPin className="w-4 h-4 text-[#00B8B8]" />
                Bengaluru, Karnataka — India's Silicon Valley and aerospace capital
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-[#2A2A2A] leading-relaxed">
                <p>
                  Anand Technologies was established in 2004 by a team of RF engineers who had spent careers designing microwave systems for India's defense and space programs. Recognizing a gap in locally-sourced, high-quality RF passive components, the founding team set up a design and manufacturing operation in Bengaluru's technology corridor.
                </p>
                <p>
                  From the outset, we invested in the tools and talent to compete on technical merit — not just price. Our first cavity bandpass filters for 2G GSM base stations were designed from first principles, characterized in our own lab, and delivered to an exacting customer specification. That rigor has never wavered.
                </p>
                <p>
                  Today, Anand Technologies supports India's leading telecom operators, OEMs, and defense integrators with a portfolio spanning filters, duplexers, diplexers, antennas, cable assemblies, and microwave passives — from 400 MHz through 40 GHz.
                </p>
                <p>
                  Our Bengaluru manufacturing facility houses precision CNC machining, SMT assembly, and a fully equipped RF and environmental test laboratory. Every product that leaves our facility has been characterized to specification and is backed by a warranty and sustaining engineering commitment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="text-lg font-bold text-[#0A0A0A] mb-4">Our Mission</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  To be India's most technically credible RF and microwave engineering partner — delivering components that perform flawlessly under the most demanding operational conditions, supported by an engineering team that is as committed to our customers' success as they are.
                </p>
              </div>
              <div className="bg-[#00B8B8] rounded-2xl p-7">
                <h3 className="text-lg font-bold text-white mb-4">Manufacturing Footprint</h3>
                <ul className="space-y-2.5 text-white/80 text-sm">
                  {[
                    'Precision CNC machining workshop (800 sq.ft)',
                    'SMT assembly and PCB processing line',
                    'RF characterization lab: VNA, spectrum analyzers',
                    'Environmental test chambers (thermal, humidity)',
                    'PIM test facility per IEC 62037',
                    'ISO-compliant production floor with MES tracking',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">Milestones</h2>
            <p className="text-lg text-[#6B7280] max-w-xl mx-auto">35+ years of continuous engineering progress.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                    <div className="bg-[#F5F7F8] rounded-2xl p-5 max-w-sm border border-gray-100">
                      <div className="text-2xl font-bold mb-1" style={{ color: '#00B8B8' }}>{m.year}</div>
                      <div className="text-base font-semibold text-[#0A0A0A] mb-2">{m.title}</div>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{m.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#00B8B8] bg-white z-10 mt-5" />

                  {/* Mobile version */}
                  <div className="pl-10 md:hidden">
                    <div className="text-xl font-bold mb-1" style={{ color: '#00B8B8' }}>{m.year}</div>
                    <div className="text-base font-semibold text-[#0A0A0A] mb-1">{m.title}</div>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{m.description}</p>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">Infrastructure & Capabilities</h2>
            <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
              Everything under one roof — from EM simulation to final test and delivery.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00B8B8]/30 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E0F9F9] text-[#00B8B8] flex items-center justify-center mb-4">
                  {cap.icon}
                </div>
                <h3 className="text-base font-semibold text-[#0A0A0A] mb-2">{cap.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">Leadership</h2>
            <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
              60+ years of combined techno-commercial RF engineering leadership.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F5F7F8] rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00B8B8] flex items-center justify-center text-white font-bold text-xl mb-4">
                  {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <h3 className="text-base font-bold text-[#0A0A0A] mb-0.5">{person.name}</h3>
                <div className="text-sm font-medium mb-3" style={{ color: '#00B8B8' }}>{person.title}</div>
                <p className="text-sm text-[#6B7280] leading-relaxed">{person.background}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Let's discuss your RF requirement. Our engineering team responds within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                style={{ background: '#00B8B8' }}
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl border border-white/20 hover:border-[#00B8B8] hover:text-[#00B8B8] transition-all"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
