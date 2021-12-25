import Image from 'next/image'
import React from 'react'

// @ts-ignore
import profile from "../public/profile/profile4.png"


const Page = () => {
    return (
        <div className=' bg-red-600 h-screen  '>
            


            <div className="antialiased  flex flex-col space-y-5 mx-5  ">

        <h1 className=' text-center text-4xl font-bold'>I AM ANDILE</h1>

        <div>
          <Image src={profile} objectFit='contain' />
        </div>

        
        <p className=' font-light dark:font-thin tracking-widest '>My full name is Andile Nicolas Sithole, and i am currently a Computer Science and Informatics final year student @University of Johannesburge (2022).</p>
        <i>I am all about <b>reaching new heights.</b></i>


        <div className=' flex justify-around '>
          <button className='border border-gray-500 dark:bg-gray-900 bg-gray-300 py-1 w-28 '>CV</button>
          <button className='border border-gray-500 dark:bg-gray-900 bg-gray-300 py-1 w-28'>Contact Me</button>
        </div>
      
      </div>

        </div>
    )
}

export default Page
