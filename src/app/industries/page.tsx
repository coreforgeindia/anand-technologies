import type { Metadata } from 'next'
import IndustriesPage from './IndustriesPage'

export const metadata: Metadata = {
  title: 'Industries Served | Telecom, Defense, Automotive, IoT, Industrial',
  description:
    'Anand Technologies provides precision RF and microwave solutions for telecom operators, defense integrators, automotive OEMs, industrial automation, and IoT applications across India.',
}

export default function Page() {
  return <IndustriesPage />
}
