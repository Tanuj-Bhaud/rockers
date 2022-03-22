import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Rockers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <header className="body-font absolute left-0 top-0 z-40 w-screen text-gray-600">
          <div className=" container mx-auto flex w-screen flex-col flex-wrap items-center p-5 md:flex-row">
            <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
              <span className="ml-3 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                ROCKERS
              </span>
            </a>
            <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto  md:mr-auto">
              <a className="mr-5 hover:text-gray-900">NEWS</a>
              <a className="mr-5 hover:text-gray-900">FASHION</a>
              <a className="mr-5 hover:text-gray-900">SPORTS</a>
              <a className="mr-5 hover:text-gray-900">PSTCHOLOGY</a>
            </nav>
            <a className="mt-4 inline-flex items-center border-0 py-1 px-3 text-base text-black  underline focus:outline-none md:mt-0">
              Sign Up Now
            </a>
          </div>
        </header>
        <div className="mb-2 w-screen">
          <div className="mb-2 flex flex-row ">
            <div className="w-1/2 ">
              <div className="flex h-3/4 flex-col items-center justify-center">
                <div className="overflow-visible  pl-7 pb-5 text-lg pt-[12rem] sm:pl-12 sm:pb-10 sm:pt-40 sm:text-2xl md:text-4xl lg:text-7xl">
                  MAGZINE IS A DESTINATION OF THE WORLDS
                </div>
                <div className="flex flex-col pb-20 md:flex-row">
                  <div className="flex flex-col pl-5 sm:pl-7">
                    <div className="border-b-4 border-yellow-400 text-2xl font-bold sm:text-2xl md:text-5xl">
                      1345
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-4xl">
                      New subscribers <br></br> this month
                    </div>
                  </div>
                  <div className="flex flex-col pl-5 sm:pl-7 md:pl-20">
                    <div className="border-b-4 border-green-600 text-2xl font-bold sm:text-2xl md:text-5xl">
                      342
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-4xl">
                      Fashion and health <br></br> articles released
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 h-[48%] sm:h-1/3 bg-[#ff6000] ">
                <div className=" sm:pl-15 sm:pt-15 pl-6 pt-6">
                  <div className="bg-[#fef9e] flex flex-row">
                    <div className="flex flex-col">
                      <div className="text-white">Article . &nbsp; </div>
                      <div className="text-white"> 10 June 2020</div>

                      <div className="pt-4 pb-1 text-xl font-bold text-white sm:text-2xl md:text-4xl lg:text-7xl">
                        Protection of life and <br />
                        personal liberty
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="z-10  w-1/2 bg-[#fef9ef]">
              <div className="h-3/4">
                <div className="flex h-full items-center justify-center sm:pt-20 ">
                  <div className="relative h-40 w-32 sm:h-80 sm:w-64">
                    <div className="absolute top-0 right-0 z-0 h-10 w-10 bg-[#ff6000] sm:h-20 sm:w-20"></div>
                    <div className="z-10 flex h-40 w-32 items-center  justify-center sm:h-80 sm:w-64">
                      <div className="z-10  mx-auto flex h-32 w-20 items-center justify-center overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] bg-[#ff6d00] sm:h-64 sm:w-40 sm:rounded-tl-[4rem] sm:rounded-br-[4rem] ">
                        <img className=" h-70 mt-4 w-60" src="male.png" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 z-0 h-10 w-10 bg-[#ff8500] sm:h-20 sm:w-20"></div>
                  </div>
                </div>
              </div>
              <div className="sm:pl-15 sm:pt-15 mb-2 h-[48%] sm:h-1/3 bg-[#fef9ef] pl-6 pt-6 ">
                <div className="flex flex-col md:flex-row">
                  <div className="mr-3 text-xl sm:text-xl md:text-2xl lg:text-4xl">
                    inhalak
                  </div>
                  <div className="mr-3 text-xl sm:text-xl md:text-2xl lg:text-4xl">
                    WIRED
                  </div>
                  <div className="mr-3 text-xl sm:text-xl md:text-2xl lg:text-4xl">
                    Ligufa
                  </div>
                </div>
                <p className="mt-2 md:text-xl ">
                  Magzine energizes people around shared interests, igniting
                  important conversations on the news, politics, style, and
                  culture that drive the world.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className='w-screen lg:flex'>
        <div className="mt-[180px] sm:mt-24 flex  w-screen">
          <div className=" m-5 w-1/2 bg-white">
     
        
              <img className="" src="s1.jpg" />
              <h3 className="mt-4 text-lg sm:text-3xl font-bold">
                Exhibition unzips lodwig sernening scrupt items
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus error vero esse
              </p>
           
            </div>
         
          <div className=" m-5 w-1/2 bg-white">
          
              <div className="bg-[#FF7300]  p-4 text-xl sm:text-4xl font-bold text-white">
                Fashion you can buy, but style you possess. The key to style is
                learning who you are, which takes years. There's no how-to road
                map to style. It's about yourself and, above all,
                attitude.
              </div>
           
            <h3 className="mt-4 text-lg sm:text-3xl font-bold">Iris Apfel</h3>
            <p>Elegant story for the issue</p>
          </div>
          </div>
          <div className="mt-6 sm:mt-24  flex w-screen">
          <div className=" m-5 flex w-1/2 flex-col bg-white">
            <img src="s2.jpg" />
            <h3 className="mt-4 text-lg sm:text-3xl font-bold">
              James Valerie and Sasha Govanni
            </h3>
            <p>Elegant story for the issue</p>
          </div>

          <div className=" m-5 w-1/2 bg-white">
            <div className="bg-[#FF7300] p-4 text-xl sm:text-4xl font-bold text-white">
              We all need a splash of bad taste–it's hearty, it's healthy, it's
              physical. I think we could use more of it. No taste is what I'm
              against.
            </div>
            <h3 className="mt-4 text-lg sm:text-3xl font-bold">
              Exhibition unzips lodwig sernening scrupt items
            </h3>
            <p>Elegant story for the issue</p>
          </div>
          </div>
          </div>

        <div className="h-[200px] w-screen pt-[30px] bg-black">
          <div className='bg-[#FF8517] mb-10 rounded-md appearance-none text-white pl-6 text-xl sm:text-2xl mt-10 mx-auto h-[200px] flex-col  w-4/5 flex justify-center items-center'>
            Stay updated with our weekly newsletter
            <div className='flex flex-row justify-center items-center'>
   
              <input placeholder='Enter your Email' className='placeholder:text-black placeholder:sm:text-sm placeholder:text-[0.65rem] pl-2 pb-2 bg-[#fffdf6] bg-opacity-25 border border-white rounded-full w-[110.5px] sm:w-full  mt-6'  />
              <button className='bg-black mr-2  text-white rounded-full text-[0.75rem]  w-16 h-8 sm:w-20 sm:h-10 mt-5 ml-1'>Subscribe</button>
            </div>
            </div></div>
      </main>

      <footer className="mt-20 bg-[#FEF9EF] w-screen text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
        <span className="ml-3 text-xl">Rockers</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
        Air plant banjo lyft occupy retro adaptogen indego
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-black">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">
      Made with ❤️ by Tanuj
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Home
