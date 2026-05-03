'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 20, suffix: '+', label: 'Years of Engineering Excellence', description: 'Deep domain expertise in RF/microwave systems' },
  { value: 500, suffix: '+', label: 'Products in Portfolio', description: 'Filters, antennas, duplexers, assemblies & more' },
  { value: 60, suffix: '+', label: 'Years Leadership Experience', description: 'Techno-commercial strength across the team' },
  { value: 99, suffix: '%', label: 'On-Time Delivery Rate', description: 'Reliable supply chain for critical programs' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(value)
    }
    requestAnimationFrame(animate)
  }, [inView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsStrip() {
  return (
    <section className="bg-[#0A0A0A] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center lg:border-r lg:last:border-r-0 border-white/10"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-1" style={{ color: '#00B8B8' }}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-sm lg:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-[#6B7280] text-xs hidden sm:block">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
