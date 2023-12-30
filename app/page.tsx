import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Company from '@/components/company'
import Feature from '@/components/feature'
import Cta from '@/components/cta'
import Footer from '@/components/footer'
import Testmony from '@/components/testmony'
export default function Home() {
  return (
    <>
      <div className="w-full relative bg-white  mx-auto dark:bg-gray-900 font-custom">
        <Nav />
        <Hero />
        <Company />
        <Feature />
        <Testmony/>
        <Cta />
        <Footer />
      </div>
    </>
  )
}
