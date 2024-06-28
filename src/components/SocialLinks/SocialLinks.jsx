import React from 'react'
import { FaGithub, FaBehance, FaLinkedinIn, FaInstagram, FaGlobeAsia  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <>
        <ul className='text-orange flex flex-row gap-[20px] text-[1.5rem]'>
            <li className='hover:scale-110 ease-in-out duration-300'>
                <a href='https://magtuloyrml.github.io/' target='_blank' className='hover:text-orange-800' title='My Portfolio'>
                    <FaGlobeAsia />
                </a>
            </li>
            <li className='hover:scale-110 ease-in-out duration-300'>
                <a href='https://github.com/MagtuloyRML' target='_blank' className='hover:text-orange-800' title='Github'>
                    <FaGithub />
                </a>
            </li>
            <li className='hover:scale-110 ease-in-out duration-300'>
                <a href='https://www.linkedin.com/in/rmlmgtly/' target='_blank' className='hover:text-orange-800' title='LinkedIn'>
                    <FaLinkedinIn />
                </a>
            </li>
            <li className='hover:scale-110 ease-in-out duration-300'>
                <a href='https://www.behance.net/rmlmgtly' target='_blank' className='hover:text-orange-800' title='Behance'>
                    <FaBehance />
                </a>
            </li>
            <li className='hover:scale-110 ease-in-out duration-300'>
                <a href='https://www.instagram.com/drw.w.rml/' target='_blank' className='hover:text-orange-800' title='Instagram'>
                    <FaInstagram />
                </a>
            </li>
            <li className='hover:scale-110 ease-in-out duration-300'>
                <a href='https://twitter.com/Drw_w_Rml' target='_blank' className='hover:text-orange-800' title='Twitter / X'>
                    <FaXTwitter />
                </a>
            </li>
        </ul>
    </>
  )
}

export default SocialLinks