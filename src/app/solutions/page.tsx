import { createPageMetadata } from '@/lib/seo'
import SolutionsPage from './SolutionsPage'

export const metadata = createPageMetadata({
  title: 'Custom RF Engineering & Manufacturing',
  description:
    'Discover custom RF engineering, prototyping, testing, and production manufacturing services from Anand Technologies, from initial requirements through delivery.',
  path: '/solutions',
})

export default function Page() {
  return <SolutionsPage />
}
