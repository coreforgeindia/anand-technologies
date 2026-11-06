import { createPageMetadata } from '@/lib/seo'
import ContactPage from './ContactPage'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Contact Anand Technologies | RF Quotes Bengaluru',
  description:
    'Contact Anand Technologies in Bengaluru for RF and microwave component enquiries, product quotations, and custom engineering projects.',
  path: '/contact',
})

export default function Page() {
  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Anand Technologies',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Anand Technologies',
      url: SITE_URL,
      telephone: '+91 87629 21780',
      email: 'smetri@anandtechnologies.co.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '21, 6th Main Road, Magadi Main Road, Srigandhada Kaval, Sunkadakatte',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560091',
        addressCountry: 'IN',
      },
    },
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData).replace(/</g, '\\u003c') }}
      />
      <ContactPage />
    </>
  )
}
