import type { Metadata } from 'next'
import AboutPage from './AboutPage'

export const metadata: Metadata = {
  title: 'About Us | RF & Microwave Engineering Company India',
  description:
    'Anand Technologies is a Bengaluru-based RF and microwave engineering manufacturer with 20+ years of expertise. Serving telecom, defense, industrial, and IoT sectors across India.',
}

export default function Page() {
  return <AboutPage />
}
