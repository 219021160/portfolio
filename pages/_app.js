


import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
// import ThemeSwitch from "../components/ThemeSwitch"
import Navigation from '../components/Navigation'
import { useState } from 'react';
import Header from '../components/Header';


function MyApp({ Component, pageProps }) {

  const [isOpen, setIsOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [currentPage, setCurrentPage] =  useState("");


  return (


      // WRAPPER
    <body className=' bg-gray-100  dark:bg-inherit '>


      {/* attribute=class is to enable dark and light mode manually. I have disabled system preference by enableSystem=false */}
      <ThemeProvider attribute="class" enableSystem={false}>

        {/* HEADER */}
        <div className=' sticky top-0 left-0 right-0 z-50'>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} heading={heading}/>
        </div>



        {/* BODY */}
        <div className='flex flex-col lg:flex-row space-x-2 mx-2 my-4 lg:m-8 lg:p-4 pr-2 py-4  border dark:border-slate-700'>
          

          {/* SIDEBAR/MENU */}
          <div className='lg:w-[30%] lg:pr-4 pl-1 lg:border-r lg:dark:border-slate-700'>
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} currentPage={currentPage} />
          </div>

          <div className={(isOpen==true?"hidden lg:block flex-1 lg:pl-2 ":"flex-1 lg:pl-2 ")}>
            <Component {...pageProps} setHeading={setHeading} setCurrentPage={setCurrentPage} />
          </div>

        </div>


      </ThemeProvider>
      

    </body>
    
  )
}

export default MyApp
