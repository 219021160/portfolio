import React, {useState} from 'react'
import Image from 'next/image';

// @ts-ignore
import profile from "../public/profile/profile3.png";
import NavigationLink from './NavigationLink';
import Footer from './Footer';
import Link from 'next/link';

const Navigation = ({isOpen, setIsOpen, currentPage}) => {

    

    return (
    
        <div className={(isOpen!=true?'hidden ':'') +"lg:flex flex flex-col h-full justify-center space-y-2 text-center "}>


                   
                    
                    <div className='flex flex-col items-center justify-center '>

                        {/* Image */}
                        <div className=' w-48'>
                            <Image src={profile} objectFit="contain" className=' rounded-full p-px bg-gray-400' />                     
                        </div>    

                        {/* Name */}
                        <p onClick={()=>setIsOpen(!isOpen)} className='font-extrabold uppercase text-xl ml-2 '>
                            <Link href="/">SITHOLE AN</Link>
                        </p>

                        {/* Aspiring ... */}
                        <p className=' underline underline-offset-2 italic mt-2'>Aspiring Software Engineer</p>

                    </div>

  

                   <div onClick={()=>setIsOpen(!isOpen)} className=' space-y-5'>
                        {/* Navigation heading */}
                        <p className=' uppercase font-bold text-lg mt-5'>Navigation</p>
                        {/* pages */}
                        <NavigationLink currentPage={currentPage}  name={"Home"} link={"./"} icon={profile} />
                        <NavigationLink currentPage={currentPage}  name={"About"} link={"./About"} icon={profile} />
                        <NavigationLink currentPage={currentPage}  name={"Skills"} link={"./Skills"} icon={profile} />
                        <NavigationLink currentPage={currentPage}  name={"Projects"} link={"./Projects"} icon={profile} />
                        <NavigationLink currentPage={currentPage}  name={"Education"} link={"./Education"} icon={profile} />
                        <NavigationLink currentPage={currentPage}  name={"Contact"} link={"./Contact"} icon={profile} />
                   </div>

                   {/* footer */}
                   <div>
                        <div className='my-5'>
                            <Footer/>
                        </div>

                        <div className=" font-thin text-gray-500 tracking-wide">
                            <p><small>                       
                                Copyright &copy;{new Date().getFullYear() + " "}
                                All rights reserved
                            </small></p>
                        </div>
                    </div>
                   
        
                   
                </div>   


    )
}

export default Navigation
