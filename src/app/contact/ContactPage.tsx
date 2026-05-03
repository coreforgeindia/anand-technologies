'use client'

import { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  ChevronRight, MapPin, Mail, Phone, CheckCircle2, ArrowRight, Building2
} from 'lucide-react'
import { productCategories } from '@/lib/data'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function ContactForm() {
  const searchParams = useSearchParams()
  const prefilledProduct = searchParams.get('product') || ''

  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    products: prefilledProduct ? [prefilledProduct] : [] as string[],
    message: '',
    consent: false,
  })

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email is required'
    if (!form.phone.trim() || !/^\+?[\d\s\-]{8,15}$/.test(form.phone)) newErrors.phone = 'Valid phone number is required'
    if (!form.message.trim()) newErrors.message = 'Please describe your requirement'
    if (!form.consent) newErrors.consent = 'Please accept the terms to proceed'
    return newErrors
  }

  const handleProductToggle = (productName: string) => {
    setForm((prev) => ({
      ...prev,
      products: prev.products.includes(productName)
        ? prev.products.filter((p) => p !== productName)
        : [...prev.products, productName],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setFormState('submitting')

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          product_list: form.products,
          message: form.message,
        }),
      })

      if (!response.ok) throw new Error('Submission failed')
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-16"
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: '#E0F9F9' }}>
          <CheckCircle2 className="w-8 h-8" style={{ color: '#00B8B8' }} />
        </div>
        <h2 className="text-2xl font-bold text-[#0A0A0A] mb-3">Enquiry Received</h2>
        <p className="text-[#6B7280] mb-8 max-w-md">
          Thank you, {form.name}. Our sales team will review your requirement and respond within 24 hours. Check your inbox at{' '}
          <strong>{form.email}</strong> for confirmation.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
            style={{ background: '#00B8B8' }}
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 text-sm font-semibold text-[#0A0A0A] rounded-xl border border-gray-200 hover:border-[#00B8B8] hover:text-[#00B8B8] transition-all"
          >
            Browse Products
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-[#2A2A2A] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Dr. Ramesh Kumar"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
              errors.name ? 'border-red-400' : 'border-gray-200 focus:border-[#00B8B8]'
            }`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-[#2A2A2A] mb-1.5">Company / Organization</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
            placeholder="Bharti Airtel / DRDO / Tata Elxsi"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-[#00B8B8] transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#2A2A2A] mb-1.5">
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="r.kumar@company.com"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
              errors.email ? 'border-red-400' : 'border-gray-200 focus:border-[#00B8B8]'
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-[#2A2A2A] mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            placeholder="+91 98XXX XXXXX"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
              errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-[#00B8B8]'
            }`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Product interest */}
      <div>
        <label className="block text-sm font-medium text-[#2A2A2A] mb-2">
          Product Categories of Interest (select all applicable)
        </label>
        <div className="flex flex-wrap gap-2">
          {productCategories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => handleProductToggle(cat.name)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${
                form.products.includes(cat.name)
                  ? 'text-white border-transparent'
                  : 'text-[#6B7280] border-gray-200 bg-white hover:border-[#00B8B8] hover:text-[#00B8B8]'
              }`}
              style={form.products.includes(cat.name) ? { background: '#00B8B8', borderColor: '#00B8B8' } : {}}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[#2A2A2A] mb-1.5">
          Requirement Details <span className="text-red-500">*</span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          rows={5}
          placeholder="Describe your RF requirement: frequency range, performance specs, quantities, application, timeline..."
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors resize-none ${
            errors.message ? 'border-red-400' : 'border-gray-200 focus:border-[#00B8B8]'
          }`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
            className="mt-0.5 w-4 h-4 rounded flex-shrink-0"
            style={{ accentColor: '#00B8B8' }}
          />
          <span className="text-sm text-[#6B7280]">
            I agree to Anand Technologies contacting me about my enquiry. I understand my data will be handled in accordance with the{' '}
            <Link href="/privacy" className="text-[#00B8B8] hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-500 mt-1 ml-7">{errors.consent}</p>}
      </div>

      {formState === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:sales@anandtech.in" className="font-semibold underline">sales@anandtech.in</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white rounded-xl transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: '#00B8B8' }}
      >
        {formState === 'submitting' ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending Enquiry...
          </>
        ) : (
          <>
            Submit Enquiry <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
            <Link href="/" className="hover:text-[#00B8B8]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0A0A0A]">Contact</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#E0F9F9] text-[#00B8B8]">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] mb-5">
              Let's Discuss Your RF Requirement
            </h1>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              Send us your specification and we'll respond with a technical and commercial assessment within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100"
            >
              <h2 className="text-xl font-bold text-[#0A0A0A] mb-6">Enquiry Form</h2>
              <Suspense fallback={<div className="text-sm text-[#6B7280]">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5"
            >
              {/* Address */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-[#0A0A0A] mb-4 flex items-center gap-2">
                  <Building2 className="w-4 h-4" style={{ color: '#00B8B8' }} />
                  Head Office
                </h3>
                <div className="flex items-start gap-3 text-sm text-[#6B7280] mb-4">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#00B8B8' }} />
                  <address className="not-italic leading-relaxed">
                    Anand Technologies<br />
                    #42, 3rd Cross, Electronics City<br />
                    Phase 1, Bengaluru<br />
                    Karnataka 560100, India
                  </address>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B7280] mb-3">
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#00B8B8' }} />
                  <a href="tel:+918000000000" className="hover:text-[#00B8B8] transition-colors">
                    +91 80 0000 0000
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B7280] mb-2">
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#00B8B8' }} />
                  <a href="mailto:sales@anandtech.in" className="hover:text-[#00B8B8] transition-colors">
                    sales@anandtech.in
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#00B8B8' }} />
                  <div>
                    <div className="text-xs text-[#6B7280] mb-0.5">CEO Direct</div>
                    <a href="mailto:ceo@anandtech.in" className="hover:text-[#00B8B8] transition-colors">
                      ceo@anandtech.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-[#00B8B8] rounded-2xl p-6 text-white">
                <h3 className="text-sm font-bold mb-4">Our Response Commitment</h3>
                <div className="space-y-3">
                  {[
                    { time: '< 4 hours', desc: 'Standard product availability & pricing' },
                    { time: '< 24 hours', desc: 'Custom engineering feasibility' },
                    { time: '< 48 hours', desc: 'Formal technical offer (FTO)' },
                  ].map((item) => (
                    <div key={item.desc} className="flex items-start gap-3">
                      <span className="flex-shrink-0 font-bold font-mono text-sm bg-white/20 px-2 py-0.5 rounded-md">
                        {item.time}
                      </span>
                      <span className="text-sm text-white/80">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62245.74849854553!2d77.61648!3d12.84484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b01b9e9db53%3A0xefc6c97e6e1c2d3e!2sElectronics+City%2C+Bengaluru!5e0!3m2!1sen!2sin!4v1699000000000"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Anand Technologies Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
