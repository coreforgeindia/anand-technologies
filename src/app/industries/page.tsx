import { createPageMetadata } from '@/lib/seo'
import IndustriesPage from './IndustriesPage'

export const metadata = createPageMetadata({
  title: 'RF Solutions Across Key Industries',
  description:
    'Explore RF and microwave components for telecom networks, defense systems, automotive platforms, industrial automation, and IoT applications.',
  path: '/industries',
})

export default function Page() {
  return <IndustriesPage />
}
