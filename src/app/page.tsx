import { createPageMetadata } from '@/lib/seo'
import HeroSection from '@/components/home/HeroSection'
import StatsStrip from '@/components/home/StatsStrip'
import ProductCategoriesGrid from '@/components/home/ProductCategoriesGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import IndustriesServed from '@/components/home/IndustriesServed'
import CTASection from '@/components/home/CTASection'

export const metadata = createPageMetadata({
  title: 'RF & Microwave Engineering India',
  description:
    "Anand Technologies designs and manufactures RF filters, duplexers, antennas, and custom microwave components in Bengaluru, India for telecom, defense, automotive, and IoT systems.",
  path: '/',
})

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
