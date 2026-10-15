import { createPageMetadata } from '@/lib/seo'
import ContactPage from './ContactPage'

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description:
    'Contact Anand Technologies in Bengaluru for RF and microwave component enquiries, product quotations, and custom engineering projects.',
  path: '/contact',
})

export default function Page() {
  return <ContactPage />
}
