import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { SITE_URL } from '@/lib/seo'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'RF & Microwave Engineering India | Anand Technologies',
    template: '%s | Anand Technologies',
  },
  description:
    'RF filters, duplexers, antennas, and custom microwave components engineered in Bengaluru, India for telecom, defense, automotive, industrial, and IoT systems.',
  keywords: [
    'RF manufacturer India',
    'microwave components supplier India',
    'custom RF solutions',
    'antenna manufacturer India',
    'RF filters India',
    'duplexers India',
    'telecom RF components',
    'defense RF manufacturer',
    'Bengaluru RF engineering',
  ],
  authors: [{ name: 'Anand Technologies' }],
  creator: 'Anand Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Anand Technologies',
    title: 'RF & Microwave Engineering India | Anand Technologies',
    description:
      'Precision RF and microwave components engineered in Bengaluru for telecom, defense, automotive, industrial, and IoT systems.',
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Anand Technologies RF and microwave engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RF & Microwave Engineering India | Anand Technologies',
    description: 'Precision RF and microwave components for mission-critical systems.',
    images: [`${SITE_URL}/opengraph-image`],
  },
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Anand Technologies',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.jpg`,
    description:
      "RF and microwave engineering manufacturer serving telecom, defense, automotive, industrial, and IoT applications.",
  }

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Anand Technologies',
    url: SITE_URL,
    inLanguage: 'en-IN',
  }

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJJSDJCL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJJSDJCL');`}
        </Script>
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
