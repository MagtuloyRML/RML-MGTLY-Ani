import React from 'react'
import { FaGithub, FaBehance, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <>
        <ul className='text-orange flex flex-row gap-[20px] text-[1.5rem] mt-[55px]'>
            <li>
                <a href='https://github.com/MagtuloyRML' target='_blank' className='hover:text-orange-800'>
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/rmlmgtly/' target='_blank' className='hover:text-orange-800'>
                    <FaLinkedinIn />
                </a>
            </li>
            <li>
                <a href='https://www.behance.net/rmlmgtly' target='_blank' className='hover:text-orange-800'>
                    <FaBehance />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/drw.w.rml/' target='_blank' className='hover:text-orange-800'>
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href='https://twitter.com/Drw_w_Rml' target='_blank' className='hover:text-orange-800'>
                    <FaXTwitter />
                </a>
            </li>
        </ul>
    </>
  )
}

export default SocialLinks