import { createPageMetadata } from '@/lib/seo'
import SolutionsPage from './SolutionsPage'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export const metadata = createPageMetadata({
  title: 'Custom RF Engineering & Manufacturing in India',
  description:
    'Discover custom RF engineering, prototyping, testing, and production manufacturing services from Anand Technologies, from initial requirements through delivery.',
  path: '/solutions',
})

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Custom Solutions', href: '/solutions' }]} />
      <SolutionsPage />
    </>
  )
}
