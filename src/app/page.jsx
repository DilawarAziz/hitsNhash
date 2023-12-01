import Image from 'next/image'
import ContactUsSection from '../components/contactform'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="main">
      <div className='bg-black w-full'>
        <nav className="nav !px-2">
          <Image src="/logo.png" width={0} height={0} sizes='100vw' alt="logo" className="w-[12%] sm:w-[10%] " />
          <Link href='/product' className="text-white text-base md:text-xl cool-link">
            Products
          </Link>
        </nav>
      </div>
      <div className="bgimage-parent ">
        <div className="w-full flex justify-between flex-col h-[100%]  absolute top-0">
          <div className=" ml-auto xl:mr-[2%] lg:space-y-4 mt-[18%] mr-2 xsm:mr-0 sm:mr-2  flex flex-col items-end xsm:items-center w-[fit-content] ">
            <div className='w-[50%] sm:w-[60%] md:w-auto xl:w-[70%]   relative'>
              <Image src="/logo.png" alt="logo" width={0} height={0} sizes='100vw' className="w-full" />
            </div>
            <h1 className='lg:text-3xl xl:text-4xl md:text-2xl sm:text-base xsm:text-[12px] 2xsm:text-[10px] font-bold Cursive'>37 - 43% THC</h1>
            <h1 className='lg:text-3xl xl:text-4xl md:text-2xl sm:text-base xsm:text-[12px] 2xsm:text-[10px] font-bold Cursive'>Infused Pre-Rolls</h1>
            <h1 className="bg-[#960AF2] md:text-2xl text-base Cursive">Get Some!</h1>
          </div>
          <h1 className="text-center md:text-3xl sm:text-2xl text-base lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl Cursive font-bold my-[5%] mx-2">Consistant From First Hit To Final Ash!</h1>
        </div>
        <Image src="/web pic.png" width={0} height={0} sizes='100vw' className="w-full  top-0" alt='backgroundimg' />
      </div>
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-full ">
        <div className="max-w-[1240px] mx-auto mt-20 space-y-20 !px-4">
          <div className='grid  grid-cols-1 sm:grid-cols-2 items-center  gap-6 md:gap-20'>
            <div className='md:space-y-4 space-y-0'>
              <h1 className='lg:text-4xl md:text-2xl text-xl font-bold '>
                WHO WE ARE
              </h1 >
              <h1 className='lg:text-4xl md:text-2xl text-xl font-bold headinggradient'>Hits N Ash</h1>
              <p className='text-justify text-sm lg:text-base' >
                At Hits N Ash, we are the embodiment of quality, creativity, and innovation in the world of cannabis pre-rollers. Our passion lies in curating an extraordinary experience for enthusiasts and connoisseurs alike. With a dedication to excellence and an unyielding commitment to authenticity, we craft pre-rollers that redefine the standards of enjoyment. Join us on a journey where every roll is a masterpiece waiting to be ignited.
              </p>
            </div>
            <div>
              <Image src="/panda.png" width={0} height={0} sizes='100vw' className="w-full" alt='backgroundimg' />
            </div>
          </div>
          <div className='sm:grid flex flex-col-reverse grid-cols-2 grid-cols-r  items-center gap-6 md:gap-20'>
            <div>
              <Image src="/cat.png" width={0} height={0} sizes='100vw' className="w-full" alt='backgroundimg' />
            </div>
            <div className='md:space-y-4 space-y-0'>
              <h1 className='lg:text-4xl md:text-2xl text-xl font-bold '>
                Our best service
              </h1 >
              <h1 className='lg:text-4xl md:text-2xl text-xl font-bold headinggradient'>Hits N Ash</h1>
              <p className='text-justify text-sm lg:text-base' >
                At Hits N Ash we take pride in offering top-tier services tailored to your needs. From premium product selection to expert guidance, we ensure an unparalleled experience. Our commitment to quality, convenience, and customer satisfaction is the hallmark of our service. Discover the pinnacle of excellence with Hits N Ash.             </p>
            </div>
          </div>
          <div className='flex flex-col-reverse sm:flex-col !mt-40'>

            <div >
              <Image src="/hello.png" width={0} height={0} sizes='100vw' className="w-full" alt='backgroundimg' />
            </div>
            <div className='text-center space-y-4'>
              <h1 className='lg:text-4xl md:text-2xl text-xl font-bold '>
                Talk to a Human
              </h1>
              <p className='text-center text-sm lg:text-base'>
                We promise, your message won’t disappear into the abyss. We’re standing by and ready to help with any questions,
              </p>
              <p className='text-center text-sm lg:text-base'>
                comments, or thoughts you may have.
              </p>
            </div>
          </div>

          <div className='!mb-20'>

            <ContactUsSection />
          </div>
        </div>
      </div>
    </div>
  )
}
