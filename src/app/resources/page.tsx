import type { Metadata } from 'next'
import ResourcesPage from './ResourcesPage'

export const metadata: Metadata = {
  title: 'RF Engineering Resources | Technical Guides, Blogs & Application Notes',
  description:
    'Technical articles, RF engineering guides, and application notes from Anand Technologies. Filter selection, antenna gain, 5G RF challenges, and more.',
}

export default function Page() {
  return <ResourcesPage />
}
