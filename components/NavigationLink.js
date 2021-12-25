import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavigationLink = ({name, link, icon, currentPage}) => {

    return (
        <Link href={link}>

            <div className={"bg-gray-300 dark:bg-gray-900 w-[92%] lg:w-full mx-auto flex space-x-16 items-center text-left pl-4  p-px hover:scale-105  hover:outline-1 hover:outline hover:outline-slate-400 shadow-sm shadow-slate-500 cursor-pointer ease-out duration-300  " + (name==currentPage?"border-r-8 border-gray-700":"")}>

                <p className=' w-20 capitalize font-semibold text-lg'>{name}</p>
                <div className=' w-8 h-8'> {icon != null && <Image src={icon} objectFit='contain' />}</div>
           
            </div>
            
            
        </Link>
    )
}

export default NavigationLink
