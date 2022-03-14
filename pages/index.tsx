import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className='flex flex-row '>
          <div className='w-1/2 '>
        <div className='h-3/4 flex flex-col items-center justify-center'>
          <div className='text-xl md:text-4xl lg:text-7xl sm:text-2xl pl-7 sm:pl-12 pb-5 sm:pb-10 sm:pt-20 overflow-visible'>MAGZINE IS A DESTINATION OF THE WORLDS</div>
          <div className='flex flex-col md:flex-row pb-20'>
            <div className=' sm:pl-7 flex flex-col'>
              <div className='font-bold text-2xl md:text-5xl sm:text-2xl border-b-4 border-yellow-400'>1345</div>
              <div className='text-2xl'>New subscribers <br></br> this month</div>
              </div>
            <div className='sm:pl-7 md:pl-20 flex flex-col'>
            <div className='font-bold text-2xl md:text-5xl sm:text-2xl border-b-4 border-green-600'>342</div>
              <div className='text-2xl'>Fashion and health <br></br> articles released</div></div>
          </div>
          </div>
        <div className='  bg-[#ff6000] h-screen'>
          <div className=' pl-10 sm:pl-15 pt-10 sm:pt-15'>
            <div className='flex flex-row bg-[#fef9e]'>
              <div className='flex flex-col'>
            <div className='text-white'>Article . &nbsp; </div>
            <div className='text-white'> 10 June 2020</div>

            <div className='text-white text-xl lg:text-7xl md:text-4xl sm:text-2xl font-bold pt-4 pb-1'>Protection of life and <br />personal liberty</div>
            </div>
            </div>

          
            </div></div></div>
        
        <div className='w-1/2  bg-[#fef9ef] z-10'>
          <div className='h-3/4'>
             <div className='flex items-center justify-center h-full '>
               <div className='h-40 w-32 sm:h-80 sm:w-64 relative'>
               <div className='absolute z-0 bg-[#ff6000] h-10 w-10 sm:h-20 sm:w-20 top-0 right-0'></div>
               <div className='flex items-center justify-center h-40  w-32 sm:h-80 sm:w-64'>
               <div className='flex items-center z-10 sm:rounded-tl-[4rem] rounded-tl-[2rem] rounded-br-[2rem] sm:rounded-br-[4rem] bg-[#ff6d00] justify-center h-32 w-20 sm:h-64 sm:w-40 mx-auto '></div>
               </div>
               <div className='absolute z-0 bg-[#ff8500] h-10 w-10 sm:h-20 sm:w-20 bottom-0 left-0'></div>
               </div></div> 
             </div>
          <div className='pl-10 sm:pl-15 pt-10 sm:pt-15 h-screen bg-[#fef9ef]'>
            <div className='flex flex-col md:flex-row'>
            <div className='mr-3 text-xl md:text-2xl sm:text-xl'>inhalak</div>
            <div className='mr-3 text-xl md:text-2xl sm:text-xl'>WIRED</div>
            <div className='mr-3 text-xl md:text-2xl sm:text-xl'>Ligufa</div>
            </div>
            <p className='mt-2 md:text-xl '>Magzine energizes people around shared interests, igniting important conversations on the news, politics, style, and culture that drive the world.</p>
            </div>

            </div>
        </div>
     
       <header className="z-40 text-gray-600 body-font w-screen absolute left-0 top-0">
  <div className=" container w-screen mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span className="ml-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">ROCKERS</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base  justify-center">
      <a className="mr-5 hover:text-gray-900">NEWS</a>
      <a className="mr-5 hover:text-gray-900">FASHION</a>
      <a className="mr-5 hover:text-gray-900">SPORTS</a>
      <a className="mr-5 hover:text-gray-900">PSTCHOLOGY</a>
    </nav>
    <a className="underline text-black inline-flex items-center border-0 py-1 px-3 focus:outline-none  text-base mt-4 md:mt-0">
      Sign Up Now</a>
  </div>
</header> 

      </main>

    </div>
  )
}

export default Home
