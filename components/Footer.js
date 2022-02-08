import React from 'react'
import FooterLink from './FooterLink'

// @ts-ignore
import profile from "../public/profile/profile3.png"


const Footer = () => {
    return (
        <div className='flex justify-between w-[90%] lg:w-[96%] mx-auto '>

            {/* Whatsapp */}
           <FooterLink link={null} icon={profile} name={"Whatsapp"} /> 
            {/* Linkedin */}
           <FooterLink link={null} icon={profile} name={"LinkedIn"} /> 
           {/* Email */}
           <FooterLink link={null} icon={profile} name={"Gmail"} /> 
           {/* Github */}
           <FooterLink link={null} icon={profile} name={"Github"} /> 
        </div>
    )
}

export default Footer
