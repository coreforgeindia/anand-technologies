import type { Metadata } from 'next'
import SolutionsPage from './SolutionsPage'

export const metadata: Metadata = {
  title: 'Custom RF Solutions | Engineering, Prototyping & Manufacturing',
  description:
    'Anand Technologies provides end-to-end custom RF and microwave engineering services — from requirement analysis and EM simulation through prototyping, testing, and production manufacturing.',
}

export default function Page() {
  return <SolutionsPage />
}
