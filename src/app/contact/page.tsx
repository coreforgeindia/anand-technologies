import type { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact & Enquiry | RF Component Sales, Bengaluru',
  description:
    'Contact Anand Technologies for RF and microwave component enquiries. Request a quote, speak to our sales team, or start a custom engineering project. Bengaluru, India.',
}

export default function Page() {
  return <ContactPage />
}
