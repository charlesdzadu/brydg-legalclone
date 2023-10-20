import Nav from '@/components/nav'
import Hero from '@/components/hero'
export default function Home() {
  // console.log('Hello World')
  return (
    <>
        <div className="w-full relative bg-white  mx-auto dark:bg-gray-900">
          <Nav />
          <Hero />
        </div>
    </>
  )
}
