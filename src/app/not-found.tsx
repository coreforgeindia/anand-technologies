import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-7xl font-bold font-mono mb-4" style={{ color: '#00B8B8' }}>404</div>
      <h1 className="text-2xl font-bold text-[#0A0A0A] mb-3">Page Not Found</h1>
      <p className="text-[#6B7280] mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-3">
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
    </div>
  )
}
