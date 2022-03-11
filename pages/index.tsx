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
        <div className='h-3/4 '>
          <div className='text-2xl md:text-4xl sm:text-2xl pl-20 pb-10 pt-20 overflow-visible'>MAGZINE IS A DESTINATION OF THE WORLDS</div>
          <div className='flex flex-col md:flex-row pb-20'>
            <div className='pl-14 md:pl-20 flex flex-col'>
              <div className='font-bold text-2xl md:text-5xl sm:text-2xl border-b-4 border-yellow-400'>1345</div>
              <div className='text-2xl'>New subscribers <br></br> this month</div>
              </div>
            <div className='pl-14 md:pl-20 flex flex-col'>
            <div className='font-bold text-2xl md:text-5xl sm:text-2xl border-b-4 border-green-600'>342</div>
              <div className='text-2xl'>Fashion and health <br></br> articles released</div></div>
          </div>
          </div>
        <div className='  bg-[#ff6000]'>
          <div className='pl-20 pt-3'>
            <div className='flex flex-row bg-[#fef9e]'>
              <div className='flex flex-col'>
            <div className='text-white'>Article . &nbsp; </div>
            <div className='text-white'> 10 June 2020</div>

            <div className='text-white  text-4xl font-bold pt-4 pb-1'>Protection of life and <br />personal liberty</div>
            </div>
            </div>

          
            </div></div></div>
        
        <div className='w-1/2  bg-[#fef9ef] z-10'>
          <div className='h-3/4'>
             <div className='flex items-center justify-center h-full '>
               <div className=' h-80 w-64 relative'>
               <div className='absolute z-0 bg-[#ff6000] h-20 w-20 top-0 right-0'></div>
               <div className='flex items-center justify-center h-80 w-64'>
               <div className='flex items-center z-10 rounded-tl-[4rem] rounded-br-[4rem] bg-[#ff6d00] justify-center h-64 w-40 mx-auto '></div>
               </div>
               <div className='absolute z-0 bg-[#ff8500] h-20 w-20 bottom-0 left-0'></div>
               </div></div> 
             </div>
          <div className='pl-20 pt-14'>
            <div className='flex flex-row'>
            <div className='mr-3 text-xl md:text-2xl sm:text-xl'>inhalak</div>
            <div className='mr-3 text-xl md:text-2xl sm:text-xl'>WIRED</div>
            <div className='mr-3 text-xl md:text-2xl sm:text-xl'>Ligufa</div>
            </div>
            <p className='mt-2'>Magzine energizes people around shared interests, igniting important conversations on the news, politics, style, and culture that drive the world.</p>
            </div>

            </div>
        </div>
     
       <header className="z-40 text-gray-600 body-font w-screen absolute left-0 top-0">
  <div className=" container w-screen mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span className="ml-3 text-xl font-bold">ROCKERS</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
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