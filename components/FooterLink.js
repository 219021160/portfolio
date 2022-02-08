import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterLink = ({link, icon, name}) => {

    

    return (

        <Link href={link==null?"#":link}>

            <div className='flex flex-col items-center  hover:outline-none  hover:shadow-sm hover:shadow-slate-400 hover:scale-110 ease-in-out duration-300 p-px cursor-pointer '>

                <div className=' w-10 h-10'>
                    <Image src={icon} objectFit="contain" />          
                </div>

                <p className=' text-xs'>{name}</p>

            </div>
        

        </Link>
    )
}

export default FooterLink
