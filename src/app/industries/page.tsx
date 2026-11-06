import { createPageMetadata } from '@/lib/seo'
import IndustriesPage from './IndustriesPage'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata = createPageMetadata({
  title: 'RF Components for Telecom, Defense & Industry',
  description:
    'Explore RF and microwave components for telecom networks, defense systems, automotive platforms, industrial automation, and IoT applications.',
  path: '/industries',
})

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }]} />
      <IndustriesPage />
    </>
  )
}
