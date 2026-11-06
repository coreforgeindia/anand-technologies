import { createPageMetadata } from '@/lib/seo'
import ResourcesPage from './ResourcesPage'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata = createPageMetadata({
  title: 'RF Engineering Guides & Articles | Anand Technologies',
  description:
    'Read practical RF engineering guides and application notes about antennas, filters, 5G, RF cables, splitters, and microwave components.',
  path: '/resources',
})

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }]} />
      <ResourcesPage />
    </>
  )
}
