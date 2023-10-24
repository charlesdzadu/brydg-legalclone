import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Company from '@/components/company'
import Feature from '@/components/feature'
import Cta from  '@/components/cta'
import Footer from '@/components/footer'
export default function Home() {
  // console.log('Hello World')
  return (
    <>
        <div className="w-full relative bg-white  mx-auto dark:bg-gray-900 font-custom">
          <Nav />
          <Hero />
          <Company />
          <Feature/>
           <Cta/>
           <Footer/>
         
        </div>
    </>
  )
}
