import Image from 'next/image'
import ContactUsSection from '../components/contactform'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="main">
      <div className='bg-black w-full'>
        <nav className="nav">
          <Image src="/logo.png" width={0} height={0} sizes='100vw' alt="logo" className="logonav " />
          <Link href='/product' className="text-white text-xl cool-link">
            Products
          </Link>
        </nav>
      </div>
      <div className="bgimage-parent ">
        <div className="min-w-[1240px] mx-auto
           flex flex-col
            justify-between h-[100vh] ">
          <div className="logo-parent space-y-4 mt-[10%]">
            <Image src="/logo.png" alt="logo" width={0} height={0} sizes='100vw' className="logo" />
            <h1 className='text-4xl font-bold Cursive'>37 - 43% THC</h1>
            <h1 className='text-4xl font-bold Cursive'>Infused Pre-Rolls</h1>
            <h1 className="bg-[#9C27B0] text-2xl Cursive">Get Some!</h1>
          </div>
          <h1 className="text-center text-[50px] Cursive font-bold mb-[5%]">Consistant From First Hit To Final Ash!</h1>
          <Image src="/web pic.png" width={0} height={0} sizes='100vw' className="backgroundimg" alt='backgroundimg' />
        </div>
      </div>
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-full ">
        <div className="max-w-[1240px] mx-auto mt-20 space-y-20">
          <div className='grid grid-cols-2 items-center gap-20'>
            <div className='space-y-4'>
              <h1 className='text-4xl font-bold '>
                WHO WE ARE
              </h1 >
              <h1 className='text-4xl font-bold headinggradient'>Hits N Ash</h1>
              <p className='text-justify' >
                At Hits N Ash, we are the embodiment of quality, creativity, and innovation in the world of cannabis pre-rollers. Our passion lies in curating an extraordinary experience for enthusiasts and connoisseurs alike. With a dedication to excellence and an unyielding commitment to authenticity, we craft pre-rollers that redefine the standards of enjoyment. Join us on a journey where every roll is a masterpiece waiting to be ignited.
              </p>
            </div>
            <div>
              <Image src="/panda.png" width={0} height={0} sizes='100vw' className="w-full" alt='backgroundimg' />
            </div>
          </div>
          <div className='grid grid-cols-2 items-center gap-20'>
            <div>
              <Image src="/cat.png" width={0} height={0} sizes='100vw' className="w-full" alt='backgroundimg' />
            </div>
            <div className='space-y-4'>
              <h1 className='text-4xl font-bold '>
                Our best service
              </h1 >
              <h1 className='text-4xl font-bold headinggradient'>Hits N Ash</h1>
              <p className='text-justify' >
                At Hits N Ash we take pride in offering top-tier services tailored to your needs. From premium product selection to expert guidance, we ensure an unparalleled experience. Our commitment to quality, convenience, and customer satisfaction is the hallmark of our service. Discover the pinnacle of excellence with Hits N Ash.             </p>
            </div>
          </div>
          <div className='!mt-40'>
            <Image src="/hello.png" width={0} height={0} sizes='100vw' className="w-full" alt='backgroundimg' />
          </div>
          <div className='text-center space-y-4'>
            <h1 className='text-4xl font-bold '>
              Talk to a Human
            </h1>
            <p>
              We promise, your message won’t disappear into the abyss. We’re standing by and ready to help with any questions,
            </p>
            <p>
              comments, or thoughts you may have.
            </p>
          </div>
          <div className='!mb-20'>

            <ContactUsSection />
          </div>
        </div>
      </div>
    </div>
  )
}
