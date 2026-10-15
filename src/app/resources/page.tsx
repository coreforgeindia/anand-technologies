import { createPageMetadata } from '@/lib/seo'
import ResourcesPage from './ResourcesPage'

export const metadata = createPageMetadata({
  title: 'RF Engineering Guides & Articles',
  description:
    'Read practical RF engineering guides and application notes about antennas, filters, 5G, RF cables, splitters, and microwave components.',
  path: '/resources',
})

export default function Page() {
  return <ResourcesPage />
}
