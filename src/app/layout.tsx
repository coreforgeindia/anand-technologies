import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://anandtech.in'),
  title: {
    default: 'Anand Technologies | RF & Microwave Engineering India',
    template: '%s | Anand Technologies',
  },
  description:
    "Anand Technologies is India's trusted RF and microwave engineering manufacturer. Precision filters, duplexers, antennas, and custom RF solutions for telecom, defense, automotive, and IoT applications.",
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
    url: 'https://anandtech.in',
    siteName: 'Anand Technologies',
    title: 'Anand Technologies | RF & Microwave Engineering India',
    description:
      "Precision RF and microwave components for mission-critical systems. Trusted by India's leading telecom, defense, and industrial organizations.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anand Technologies | RF & Microwave Engineering India',
    description: 'Precision RF and microwave components for mission-critical systems.',
  },
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
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
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
