import Link from 'next/link'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Website Terms of Use',
  description:
    'Read the terms for using the Anand Technologies website, including product information, enquiries, and external links.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold text-[#0A0A0A] mb-6">Website Terms of Use</h1>
        <p className="text-sm text-[#6B7280] mb-8">Last updated: October 2026</p>

        <div className="prose space-y-6 text-[#2A2A2A] text-sm leading-relaxed">
          <p>
            These terms apply to your use of the Anand Technologies website. By using this website, you agree to use it lawfully and not to disrupt, damage, or attempt to gain unauthorized access to the website or its services.
          </p>

          <h2 className="text-lg font-bold text-[#0A0A0A] mt-8 mb-3">Website information</h2>
          <p>
            Product descriptions and technical information are provided for general information and may be updated. Confirm current specifications, availability, pricing, and delivery details with Anand Technologies before making a purchasing decision. A website enquiry is not an order acceptance or a sales contract; any purchase is subject to the terms in the applicable quotation and order documents.
          </p>

          <h2 className="text-lg font-bold text-[#0A0A0A] mt-8 mb-3">Intellectual property</h2>
          <p>
            Website text, graphics, and other materials belong to Anand Technologies or their respective owners. You may view and use this content for personal or business evaluation, but may not reproduce or redistribute it for commercial use without permission.
          </p>

          <h2 className="text-lg font-bold text-[#0A0A0A] mt-8 mb-3">External websites</h2>
          <p>
            Links to third-party websites are provided for convenience. Anand Technologies does not control those websites or their content, availability, or privacy practices.
          </p>

          <h2 className="text-lg font-bold text-[#0A0A0A] mt-8 mb-3">Contact</h2>
          <p>
            For questions about these website terms, contact Anand Technologies through the{' '}
            <Link href="/contact" className="text-[#00B8B8] hover:underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
