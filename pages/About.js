import React, { useEffect } from 'react'
import { setPageHeading } from '../Helper/Helper';

import NavigationLink from '../components/NavigationLink'


// @ts-ignore
import profile from "../public/profile/profile3.png";
import Image from 'next/image';
import Head from 'next/head';



const About = ({setHeading, setCurrentPage}) => {




  setPageHeading(setCurrentPage, setHeading, "About");


    return (
        


        
      <>
      <Head>
        <title>About Me</title>
      </Head>


      <main className="flex flex-col h-full w-full space-y-5 ">

        

        <div className='flex flex-col items-center justify-center '>

          <h1 className='text-4xl font-bold mb-8'>SAWUBONA</h1>

          <Image src={profile} objectFit='contain' />

        </div>



          <p className=' font-light dark:font-thin tracking-widest '>My full name is Andile Nicolas Sithole, and i am currently a Computer Science and Informatics final year student @University of Johannesburge (2022).</p>
  

      </main>

      


    </>


    )
}

export default About
