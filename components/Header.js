import Image from 'next/image'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'

// @ts-ignore
import profile from "../public/profile/profile2.png";


const Header = ({isOpen, setIsOpen, heading}) => {



    return (

        <div className='bg-gray-300 dark:bg-gray-900 sm:px-[10%] lg:px-[7.5%] px-2 py-1 shadow-sm shadow-slate-500 dark:shadow-sm dark:shadow-white'>

            <div className='flex justify-between items-center'>

                <button className=' p-1' onClick={()=>setIsOpen(!isOpen)} >Menu</button>
                
                {
                    // <div className=' h-[53px] w-[53px] flex items-center'>
                    //     {heading!=""?<p>{heading}</p>:<Image src={profile} objectFit='contain' className=' rounded-2xl' />}
                    // </div>


                    heading!=""?
                    <div className='h-[53px] w-[53px] flex items-center'>
                        <p>{heading}</p>
                    </div>:
                    <div className=' h-[53px] w-[53px] flex items-center'>
                        <Image src={profile} objectFit='contain' className=' rounded-2xl' />
                    </div>
                        

                    

                    // <div className=' h-[53px] w-[53px] flex items-center '>
                    //     {<Image src={profile} objectFit='contain' className=' rounded-2xl' />}
                    // </div>
                }


                <div className=''>
                    <ThemeSwitch/>
                </div>
                
            </div>
        </div>

    )
}

export default Header
