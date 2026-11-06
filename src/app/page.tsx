import { createPageMetadata, SITE_URL } from '@/lib/seo'
import HeroSection from '@/components/home/HeroSection'
import StatsStrip from '@/components/home/StatsStrip'
import ProductCategoriesGrid from '@/components/home/ProductCategoriesGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import IndustriesServed from '@/components/home/IndustriesServed'
import CTASection from '@/components/home/CTASection'

export const metadata = createPageMetadata({
  title: 'Antenna & RF Manufacturer Near Me | Anand Technologies India',
  description:
    'Need an antenna & RF manufacturer near me? Anand Technologies in Bengaluru makes RF filters, duplexers, antennas and custom microwave components. Get a quote.',
  path: '/',
  keywords: [
    'antenna and rf manufacturer near me',
    'antenna manufacturers in india',
    'antenna manufacturing companies in india',
    'rf antenna manufacturers in india',
  ],
})

export default function HomePage() {
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Anand Technologies',
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.jpg`,
        email: 'smetri@anandtechnologies.co.in',
        telephone: '+91 87629 21780',
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: 'Anand Technologies',
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
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
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.987144887329636,
          longitude: 77.50462137409617,
        },
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'Anand Technologies',
        url: SITE_URL,
        inLanguage: 'en-IN',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData).replace(/</g, '\\u003c') }}
      />
      <HeroSection />
      <StatsStrip />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <IndustriesServed />
      <CTASection />
    </>
  )
}
