import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import { setPageHeading } from '../Helper/Helper';



const Education = ({setCurrentPage, setHeading}) => {
    

    setPageHeading(setCurrentPage, setHeading, "Education");


    
    return (
        <>
        
        <Head>
            <title>My Education</title>
        </Head>


        <main className=' bg-slate-200 flex flex-col lg:justify-center space-y-10'>

            {/* Title */}
            <p className='text-4xl font-bold uppercase text-center '>Education</p>


            {/* order by */}
            <p className=' text-sm '>Most Recent</p>


            {/* navigation pills */}
            <div className=' flex justify-center text-center space-x-2 mx-2'>
                {/* <div className='flex items-center justify-center bg-white text-sm w-[30%]'><Link href=''>Varsity</Link></div> */}
                {/* <div className='flex items-center justify-center text-center bg-white text-sm w-[30%]'>Other Courses</div> */}
                {/* <div className='flex items-center justify-center bg-white text-sm w-[30%]'>High School</div> */}

                <div className='flex items-center justify-center text-sm w-[30%]
                                border border-gray-500 dark:bg-gray-900 bg-gray-300
                                hover:scale-105 hover:outline-1 hover:outline hover:outline-slate-400 shadow-sm shadow-slate-500 ease-out duration-500 cursor-pointer
                                '><Link href='#Varsity'>Varsity</Link></div>

                <div className='flex items-center justify-center text-sm w-[30%]
                                                border border-gray-500 dark:bg-gray-900 bg-gray-300
                                                hover:scale-105 hover:outline-1 hover:outline hover:outline-slate-400 shadow-sm shadow-slate-500 ease-out duration-500 cursor-pointer
                                                '><Link href='#OtherCourses'>Other Courses</Link></div>


                <div className='flex items-center justify-center text-sm w-[30%]
                                                                border border-gray-500 dark:bg-gray-900 bg-gray-300
                                                                hover:scale-105 hover:outline-1 hover:outline hover:outline-slate-400 shadow-sm shadow-slate-500 ease-out duration-500 cursor-pointer
                                                                '><Link href='#HighSchool'>High School</Link></div>

            </div>


            {/* box -> education details */}
            <div className='bg-red-500 '>
                
                <div id="Varsity">
                    #Varsity                  
                </div>

                <div id="OtherCourses">
                    Other Courses
                </div>

                <div id="HighSchool">
                    High School
                </div>

            </div>





        </main>
            
        </>
    )


}

export default Education
