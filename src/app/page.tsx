import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/ui/Marquee'
import Services from '@/components/sections/Services'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'
import Pricing from '@/components/sections/Pricing'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import { CustomCursor, ScrollToTop, WhatsAppFloat } from '@/components/ui/FloatingUI'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </>
  )
}
