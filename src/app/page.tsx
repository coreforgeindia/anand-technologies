import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import StatsStrip from '@/components/home/StatsStrip'
import ProductCategoriesGrid from '@/components/home/ProductCategoriesGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import IndustriesServed from '@/components/home/IndustriesServed'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'RF & Microwave Engineering India | Anand Technologies',
  description:
    "India's trusted RF and microwave engineering manufacturer. Precision filters, duplexers, antennas, and custom RF solutions for telecom, defense, automotive, and IoT. Bengaluru-based.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <IndustriesServed />
      <CTASection />
    </>
  )
}
