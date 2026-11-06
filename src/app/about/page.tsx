import { createPageMetadata } from '@/lib/seo'
import AboutPage from './AboutPage'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata = createPageMetadata({
  title: 'About Anand Technologies | RF Engineering Bengaluru',
  description:
    'Learn about Anand Technologies, a Bengaluru RF and microwave engineering manufacturer serving telecom, defense, industrial, and IoT applications.',
  path: '/about',
})

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]} />
      <AboutPage />
    </>
  )
}
