import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Anand Technologies website and enquiry form.',
}

export default function PrivacyPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold text-[#0A0A0A] mb-6">Privacy Policy</h1>
        <p className="text-sm text-[#6B7280] mb-8">Last updated: May 2026</p>

        <div className="prose space-y-6 text-[#2A2A2A] text-sm leading-relaxed">
          <p>
            Anand Technologies (&quot;we&quot;, &quot;us&quot;) is committed to protecting your personal data. This policy explains how we collect, use, and safeguard information submitted through our website.
          </p>

          <h2 className="text-lg font-bold text-[#0A0A0A] mt-8 mb-3">Information We Collect</h2>
          <p>
            When you submit an enquiry, we collect: name, company name, email address, phone number, product preferences, and your message. This data is used exclusively for responding to your technical and commercial enquiries.
          </p>

          <h2 className="text-lg font-bold text-[#0A0A0A] mt-8 mb-3">How We Use Your Data</h2>
          <ul className="list-none space-y-2 pl-0">
            {[
              'To respond to your RF component enquiry',
              'To send a confirmation of receipt',
              'To improve our products and services',
              'To comply with legal obligations',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#00B8B8' }} />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-bold text-[#0A0A0A] mt-8 mb-3">Data Retention</h2>
          <p>
            Enquiry data is retained for 3 years from the date of submission, after which it is permanently deleted from our systems.
          </p>

          <h2 className="text-lg font-bold text-[#0A0A0A] mt-8 mb-3">Contact</h2>
          <p>
            For privacy-related queries, contact us at{' '}
            <a href="mailto:privacy@anandtech.in" className="text-[#00B8B8] hover:underline">
              privacy@anandtech.in
            </a>
          </p>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-sm font-semibold text-[#00B8B8] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
