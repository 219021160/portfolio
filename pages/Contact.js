import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { setPageHeading } from '../Helper/Helper';

// @ts-ignore
import profile from "../public/profile/profile2.png";
// @ts-ignore
import githubImg from "../public/assets/github.png";linkedInImg
// @ts-ignore
import gmailImg from "../public/assets/gmail.png";
// @ts-ignore
import linkedInImg from "../public/assets/linkedIn.png";
// @ts-ignore
import phoneImg from "../public/assets/phone.png";
import Link from 'next/link';


const Contact = ({setCurrentPage, setHeading}) => {


    setPageHeading(setCurrentPage, setHeading, "Contact");


    return (
        <>

        <Head>
            <title>Contact Me</title>
        </Head>


        <main className='h-full flex items-center justify-center '>

      
            {/* lg:flex lg:flex-row-reverse lg:justify-center lg:space-y-0  space-y-12  */}
            <div className=' lg:flex lg:flex-row-reverse lg:justify-center lg:space-y-0 space-y-12 px-5 w-full'>
                
                    
                {/* Contact Form */}
                <div className='flex flex-col space-y-5 w-full ' >

                    <p className=' tracking-widest font-thin text-gray-500'>Get In Touch</p>
                    {/* bg-zinc-700  */}
                    <input type={"text"} placeholder='Email Address' className='p-3 rounded-xl bg-gray-500 dark:bg-zinc-700 outline-none ' />

                    <input type={"text"} placeholder='Full Name' className='p-3 rounded-xl bg-gray-500 dark:bg-zinc-700 outline-none' />

                    <input type={"text"} placeholder='Subject' className='p-3 rounded-xl bg-gray-500 dark:bg-zinc-700 outline-none' />

                    <textarea placeholder='Message' 
                    // @ts-ignore
                    rows={"7"} className='p-3 rounded-lg bg-gray-500 dark:bg-zinc-700 outline-none'/>

                    <button className='bg-red-400 p-2 rounded-full tracking-widest'>Send</button>

                </div>


                {/* Contact Details */}
                <div className='space-y-3 lg:min-w-[40%]'>

                    <p className=' tracking-widest font-thin text-gray-500 '>Contact Details</p>


                    <div className='flex space-x-7 items-center p-2 '>
                        {/* Icon */}
                        <div className=' h-[40px] w-[40px]'>
                            <Image src={phoneImg} objectFit='contain' className=' rounded-2xl' />
                        </div>

                        {/* detail */}
                        <p>+27 611 460 217</p>
                    </div>


                    <div className='flex space-x-7 items-center p-2'>
                        {/* Icon */}
                        <div className=' min-h-[40px] max-h-[40px] min-w-[40px] max-w-[40px]'>
                            <Image src={linkedInImg} objectFit='contain' className=' rounded-2xl' />
                        </div>
                        
                        {/* detail */}
                        <Link href={"#"}>
                            <div className=' cursor-pointer underline italic'>
                                <p >https://www.linkedin.com/in/an</p>
                                <p>dile-nicolas-sithole-391a991b1/</p>
                            </div>
                            
                        </Link>
                        
                    </div>


                    <div className='flex space-x-7 items-center p-2 '>
                        {/* Icon */}
                        <div className=' min-h-[40px] max-h-[40px] min-w-[40px] max-w-[40px]'>
                            <Image src={gmailImg} objectFit='contain' className=' rounded-2xl' />
                        </div>
                        
                        {/* detail */}
                        <div>
                            <p>andilenicolas6softwareengineer</p>
                            <p>@gmail.com</p>
                        </div>                       
                    </div>


                    <div className='flex space-x-7 items-center p-2'>
                        {/* Icon */}
                        <div className=' min-h-[40px] max-h-[40px] min-w-[40px] max-w-[40px]'>
                            <Image src={githubImg} objectFit='contain' className=' rounded-2xl' />
                        </div>
                        
                        {/* detail */}
                        <p>https://github.com/219021160?tab=repositories</p>
                    </div>

                    
                    
                </div>


            </div>

        </main>


        </>
    )
}

export default Contact
