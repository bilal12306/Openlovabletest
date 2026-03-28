import IntroScene from '@/components/IntroScene'
import HeroSection from '@/components/HeroSection'
import SignatureFusion from '@/components/SignatureFusion'
import WhyFoodBrew from '@/components/WhyFoodBrew'
import FeaturedMenu from '@/components/FeaturedMenu'
import ThreeCarousel from '@/components/ThreeCarousel'
import AboutSection from '@/components/AboutSection'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main>
      <IntroScene />
      <HeroSection />
      <SignatureFusion />
      <WhyFoodBrew />
      <FeaturedMenu />
      <ThreeCarousel />
      <AboutSection />
      <Testimonials />
      <CTASection />
    </main>
  )
}
  
