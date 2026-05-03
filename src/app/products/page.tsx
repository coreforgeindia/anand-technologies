import type { Metadata } from 'next'
import ProductsPage from './ProductsPage'

export const metadata: Metadata = {
  title: 'RF & Microwave Products | Filters, Antennas, Duplexers',
  description:
    'Browse Anand Technologies\' full RF and microwave product portfolio: bandpass filters, duplexers, diplexers, antennas, cable assemblies, and precision RF components for telecom, defense, and industrial applications.',
}

export default function Page() {
  return <ProductsPage />
}
