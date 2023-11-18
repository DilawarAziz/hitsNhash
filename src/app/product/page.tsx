import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Product() {
    return (
        <main className='bg-gradient-to-r from-pink-500 to-purple-500'>
            <div className='bg-black w-full'>
                <nav className="nav">
                    <Link href='/'>
                        <Image src="/logo.png" width={0} height={0} sizes='100vw' alt="logo" className="logonav " />
                    </Link>
                    <div className='flex gap-8'>

                        <Link href='/' className="text-white text-xl cool-link">
                            Home
                        </Link>
                        <Link href='/product' className="text-white text-xl cool-link">
                            Products
                        </Link>
                    </div>

                </nav>
            </div>
            <div className='bg-black opacity-70  flex items-center justify-center h-[200px] '>

                <h1 className='text-5xl text-white font-bold'>
                    Products
                </h1>
            </div>
            <div className=" mt-40">
                <div className="max-w-[1240px] mx-auto flex flex-col space-y-16  ">
                    <div className='grid grid-cols-2 items-start gap-20'>
                        <div>

                            <Image src="/cig.png" width={0} height={0} sizes='100vw' alt="logo" className="w-full " />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-5xl  font-bold'>
                                Doob Tube Joint
                            </h1>
                            <p className='text-[#FFBC00]'> 28 customer reviews</p>
                            <p>Each order comes with premium <span className='text-blue-700'>marijuana</span> </p>
                            <p className='text-green-700'> In stock</p>
                            <hr className='border-t-2 border-gray-300' />
                            <div className='w-full flex items-center !mt-12 '>
                                <button className={"!rounded-md py-2 hover:scale-110 transition-all  px-2 bg-pink text-black bg-[#16B28D] w-full "}>order now</button>
                            </div>
                        </div>
                    </div>
                    <div className='text-white space-y-3'>
                        <h1 className='text-5xl  font-bold'>
                            Description
                        </h1>
                        <p>
                            WestCoastSupply’s pre-roll joints in a doob tube.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-5xl text-white font-bold'>
                            Reviews
                        </h1>
                    </div>
                    <div className='grid grid-cols-2 gap-20 !mb-20'>
                        <div className='p-6 flex flex-col justify-between hover:shadow-xl transition-shadow h-[200px] rounded-xl bg-white'>
                            <div className='flex gap-4 items-end'>
                                <h1 className='font-bold text-xl'>
                                    @beth222
                                </h1>
                                <p className='text-gray-400 text-sm'>
                                    verified owner
                                </p>
                            </div>
                            <p>
                                it was good
                            </p>
                            <div className='flex  justify-between'>
                                <p className='text-[#FFBC00]'>
                                    SSSSS
                                </p>
                                <p className='text-gray-400 text-sm'>
                                    May 11, 2023
                                </p>
                            </div>
                        </div>
                        <div className='p-6 flex flex-col justify-between h-[200px] rounded-xl bg-white hover:shadow-xl transition-shadow'>
                            <div className='flex gap-4 text-xl items-end'>
                                <h1 className={'font-bold'}>
                                    @Tim Hunter
                                </h1>
                                <p className='text-gray-400 text-sm'>
                                    verified owner
                                </p>
                            </div>
                            <p>
                                Nice to try
                            </p>
                            <div className='flex  justify-between'>
                                <p className='text-[#FFBC00]'>
                                    SSSSS
                                </p>
                                <p className='text-gray-400 text-sm'>
                                    May 11, 2023
                                </p>
                            </div>
                        </div>
                        <div className='p-6 flex flex-col justify-between h-[200px] rounded-xl bg-white hover:shadow-xl transition-shadow'>
                            <div className='flex gap-4 text-xl items-end'>
                                <h1 className={'font-bold'}>
                                    @TG
                                </h1>
                                <p className='text-gray-400 text-sm'>
                                    verified owner
                                </p>
                            </div>
                            <p>
                                Very convenient and a great freebie!
                            </p>
                            <div className='flex  justify-between'>
                                <p className='text-[#FFBC00]'>
                                    SSSSS
                                </p>
                                <p className='text-gray-400 text-sm'>
                                    May 11, 2023
                                </p>
                            </div>
                        </div>
                        <div className='p-6 flex flex-col justify-between h-[200px] rounded-xl bg-white hover:shadow-xl transition-shadow'>
                            <div className='flex gap-4 text-xl items-end'>
                                <h1 className={'font-bold'}>
                                    @beth222
                                </h1>
                                <p className='text-gray-400 text-sm'>
                                    verified owner
                                </p>
                            </div>
                            <p>
                                Love the smoke & the re-usable doobe tube... keeps my future
                                joints in shape!
                            </p>
                            <div className='flex  justify-between'>
                                <p className='text-[#FFBC00]'>
                                    SSSSS
                                </p>
                                <p className='text-gray-400 text-sm'>
                                    May 11, 2023
                                </p>
                            </div>
                        </div>
                        <div className='p-6 flex flex-col justify-between h-[200px] rounded-xl bg-white hover:shadow-xl transition-shadow'>
                            <div className='flex gap-4 text-xl items-end'>
                                <h1 className={'font-bold'}>
                                    @Duckduck
                                </h1>
                                <p className='text-gray-400 text-sm'>
                                    verified owner
                                </p>
                            </div>
                            <p>
                                It&apos;s great! It&apos;s Free! Perfect roll!
                            </p>
                            <div className='flex  justify-between'>
                                <p className='text-[#FFBC00]'>
                                    SSSSS
                                </p>
                                <p className='text-gray-400 text-sm'>
                                    May 11, 2023
                                </p>
                            </div>
                        </div>
                        <div className='p-6 flex flex-col justify-between h-[200px] rounded-xl bg-white hover:shadow-xl transition-shadow'>
                            <div className='flex gap-4 text-xl items-end'>
                                <h1 className={'font-bold'}>
                                    @David A
                                </h1>
                                <p className='text-gray-400 text-sm'>
                                    verified owner
                                </p>
                            </div>
                            <p>
                                Nice and convenient
                            </p>
                            <div className='flex  justify-between'>
                                <p className='text-[#FFBC00]'>
                                    SSSSS
                                </p>
                                <p className='text-gray-400 text-sm'>
                                    May 11, 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Product