'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, ChevronDown,
  Filter, ArrowLeftRight, Split, Cable,
  Radio, Antenna, Waves, CircuitBoard
} from 'lucide-react'
import { productCategories } from '@/lib/data'

const categoryIcons: Record<string, React.ReactNode> = {
  'filters': <Filter className="w-5 h-5" />,
  'duplexers': <ArrowLeftRight className="w-5 h-5" />,
  'diplexers': <Split className="w-5 h-5" />,
  'rf-cable-assemblies': <Cable className="w-5 h-5" />,
  'low-gain-antennas': <Radio className="w-5 h-5" />,
  'high-gain-antennas': <Antenna className="w-5 h-5" />,
  'microwave-devices': <Waves className="w-5 h-5" />,
  'precision-rf-components': <CircuitBoard className="w-5 h-5" />,
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products', hasMega: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const pathname = usePathname()
  const megaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
    setMegaOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#00B8B8' }}>
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-[#0A0A0A] leading-none">Anand</div>
                <div className="text-xs font-medium text-[#00B8B8] tracking-widest uppercase leading-none">Technologies</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" ref={megaRef}>
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.label} className="relative">
                    <button
                      onMouseEnter={() => setMegaOpen(true)}
                      onClick={() => setMegaOpen(!megaOpen)}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname.startsWith('/products')
                          ? 'text-[#00B8B8]'
                          : 'text-[#2A2A2A] hover:text-[#00B8B8] hover:bg-[#E0F9F9]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.18 }}
                          onMouseLeave={() => setMegaOpen(false)}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50"
                        >
                          <div className="mb-4 pb-3 border-b border-gray-100">
                            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                              Product Categories
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {productCategories.map((cat) => (
                              <Link
                                key={cat.slug}
                                href={`/products?category=${cat.slug}`}
                                onClick={() => setMegaOpen(false)}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#E0F9F9] transition-colors group"
                              >
                                <div className="mt-0.5 w-9 h-9 rounded-lg bg-[#E0F9F9] group-hover:bg-[#00B8B8] flex items-center justify-center flex-shrink-0 transition-colors">
                                  <span className="text-[#00B8B8] group-hover:text-white transition-colors">
                                    {categoryIcons[cat.slug]}
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-[#0A0A0A] group-hover:text-[#00B8B8] transition-colors">
                                    {cat.name}
                                  </div>
                                  <div className="text-xs text-[#6B7280] mt-0.5 line-clamp-1">
                                    {cat.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <Link
                              href="/products"
                              onClick={() => setMegaOpen(false)}
                              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00B8B8] hover:underline"
                            >
                              View all products →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      pathname === link.href
                        ? 'text-[#00B8B8]'
                        : 'text-[#2A2A2A] hover:text-[#00B8B8] hover:bg-[#E0F9F9]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90 hover:shadow-lg hover:shadow-[#00B8B8]/20"
                style={{ background: '#00B8B8' }}
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 rounded-lg text-[#2A2A2A] hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-white z-50 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#00B8B8' }}>
                    <Waves className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-[#0A0A0A]">Anand Technologies</span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-[#6B7280]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                {navLinks.map((link) =>
                  link.hasMega ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-[#2A2A2A] hover:text-[#00B8B8] hover:bg-[#E0F9F9] rounded-lg transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-1">
                              {productCategories.map((cat) => (
                                <Link
                                  key={cat.slug}
                                  href={`/products?category=${cat.slug}`}
                                  className="flex items-center gap-2 px-3 py-2 text-sm text-[#6B7280] hover:text-[#00B8B8] hover:bg-[#E0F9F9] rounded-lg transition-colors"
                                >
                                  <span className="text-[#00B8B8]">{categoryIcons[cat.slug]}</span>
                                  {cat.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`block px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                        pathname === link.href
                          ? 'text-[#00B8B8] bg-[#E0F9F9]'
                          : 'text-[#2A2A2A] hover:text-[#00B8B8] hover:bg-[#E0F9F9]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="p-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-white rounded-lg"
                  style={{ background: '#00B8B8' }}
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
