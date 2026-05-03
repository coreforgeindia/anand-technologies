'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  const phoneNumber = '919900000000'
  const message = encodeURIComponent(
    'Hello, I would like to enquire about your RF and microwave products.'
  )
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="bg-white rounded-xl shadow-xl border border-gray-100 p-3 mb-1 max-w-[200px]"
          >
            <p className="text-xs font-semibold text-[#0A0A0A] mb-1">Chat with us</p>
            <p className="text-xs text-[#6B7280]">Typically replies within an hour</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-shadow"
        style={{ background: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" fill="white" />
      </motion.a>
    </div>
  )
}
