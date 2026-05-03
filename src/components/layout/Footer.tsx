import Link from 'next/link'
import { Waves, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { productCategories } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#00B8B8' }}>
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-base font-bold leading-none">Anand Technologies</div>
                <div className="text-xs text-[#00B8B8] tracking-widest uppercase leading-none mt-0.5">RF & Microwave</div>
              </div>
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
              Precision RF and microwave engineering for mission-critical systems. Trusted by India's leading telecom, defense, and industrial organizations since 2004.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/anand-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00B8B8] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              {productCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-sm text-[#6B7280] hover:text-[#00B8B8] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Industries', href: '/industries' },
                { label: 'Custom Solutions', href: '/solutions' },
                { label: 'Resources', href: '/resources' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#6B7280] hover:text-[#00B8B8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00B8B8] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#6B7280]">
                  Anand Technologies,<br />
                  Bengaluru, Karnataka 560001<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00B8B8] flex-shrink-0" />
                <a href="tel:+918000000000" className="text-sm text-[#6B7280] hover:text-[#00B8B8] transition-colors">
                  +91 80 0000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00B8B8] flex-shrink-0" />
                <a href="mailto:sales@anandtech.in" className="text-sm text-[#6B7280] hover:text-[#00B8B8] transition-colors">
                  sales@anandtech.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">
            © {new Date().getFullYear()} Anand Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-[#6B7280] hover:text-[#00B8B8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#6B7280] hover:text-[#00B8B8] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
