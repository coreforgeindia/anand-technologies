import { createPageMetadata } from '@/lib/seo'
import AboutPage from './AboutPage'

export const metadata = createPageMetadata({
  title: 'About Us',
  description:
    'Learn about Anand Technologies, a Bengaluru RF and microwave engineering manufacturer serving telecom, defense, industrial, and IoT applications.',
  path: '/about',
})

export default function Page() {
  return <AboutPage />
}
