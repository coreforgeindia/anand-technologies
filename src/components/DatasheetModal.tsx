'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, CheckCircle2 } from 'lucide-react'

const PURPOSES = [
  'Product Evaluation',
  'Bulk Purchase',
  'Technical Reference',
  'OEM Requirement',
  'Distributor Inquiry',
]

type Props = {
  productName: string
  datasheetUrl: string
  onClose: () => void
}

type State = 'idle' | 'submitting' | 'done'

export default function DatasheetModal({ productName, datasheetUrl, onClose }: Props) {
  const [state, setState] = useState<State>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', purpose: '' })

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.company.trim()) e.company = 'Required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim() || !/^\+?[\d\s\-]{8,15}$/.test(form.phone)) e.phone = 'Valid phone required'
    if (!form.purpose) e.purpose = 'Please select a purpose'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setState('submitting')

    try {
      // API streams the PDF directly — blob it and trigger download
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          purpose: form.purpose,
          product_name: productName,
          datasheet_url: datasheetUrl,
        }),
      })

      if (!res.ok) throw new Error('Failed')

      const blob = await res.blob()
      const objectUrl = URL.createObjectURL(blob)
      const filename = datasheetUrl.split('/').pop() || 'datasheet.pdf'
      const a = document.createElement('a')
      a.href = objectUrl
      a.download = decodeURIComponent(filename)
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(objectUrl), 10000)

      setState('done')
    } catch {
      setState('idle')
      setErrors({ submit: 'Something went wrong. Please try again.' })
    }
  }

  const field = (key: keyof typeof form, label: string, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-sm font-medium text-[#2A2A2A] mb-1">{label} <span className="text-red-500">*</span></label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
          errors[key] ? 'border-red-400' : 'border-gray-200 focus:border-[#00B8B8]'
        }`}
      />
      {errors[key] && <p className="text-xs text-red-500 mt-1">{errors[key]}</p>}
    </div>
  )

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" style={{ color: '#00B8B8' }} />
              <span className="font-bold text-[#0A0A0A] text-sm">Download Datasheet</span>
            </div>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
              <X className="w-4 h-4 text-[#6B7280]" />
            </button>
          </div>

          <div className="px-6 py-5">
            {state === 'done' ? (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: '#E0F9F9' }}>
                  <CheckCircle2 className="w-6 h-6" style={{ color: '#00B8B8' }} />
                </div>
                <h3 className="font-bold text-[#0A0A0A] mb-2">Download Started</h3>
                <p className="text-sm text-[#6B7280] mb-5">
                  Your datasheet for <strong>{productName}</strong> is downloading. Check your downloads folder.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                  style={{ background: '#00B8B8' }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <p className="text-sm text-[#6B7280] mb-2">
                  Please fill in your details to download the <strong>{productName}</strong> datasheet.
                </p>

                {field('name', 'Full Name', 'text', 'Your name')}
                {field('company', 'Company Name', 'text', 'Your company')}
                {field('email', 'Business Email', 'email', 'you@company.com')}
                {field('phone', 'Phone', 'tel', '+91 98XXX XXXXX')}

                {/* Purpose dropdown */}
                <div>
                  <label className="block text-sm font-medium text-[#2A2A2A] mb-1">
                    Purpose of Inquiry <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.purpose}
                    onChange={(e) => setForm((p) => ({ ...p, purpose: e.target.value }))}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors bg-white ${
                      errors.purpose ? 'border-red-400' : 'border-gray-200 focus:border-[#00B8B8]'
                    }`}
                  >
                    <option value="">Select purpose...</option>
                    {PURPOSES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.purpose && <p className="text-xs text-red-500 mt-1">{errors.purpose}</p>}
                </div>

                {errors.submit && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{errors.submit}</p>
                )}

                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: '#00B8B8' }}
                >
                  {state === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" /> Download Datasheet
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
