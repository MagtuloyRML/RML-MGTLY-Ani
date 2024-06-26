import React from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from '../SocialLinks/SocialLinks'
import { LogoButton } from '../Navbar/NavigationButton'

const Footer = () => {
  return (
    <>
      <footer className='mt-[20px] font-regular text-[.875rem] max-[1024px]:text-[.675rem]'>
        <section className='w-full h-full p-[20px] bg-white-50 text-black-300 px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3'>
          <ul className='flex w-full max-[600px]:flex-col max-[600px]:gap-[73px] py-[66px] max-[768px]:py-[36px]'>
            <li className='w-full items-center justify-center'>
              <ul className='flex flex-col gap-[20px] max-[600px]:gap-1'>
                <li><LogoButton /></li>
                <li>RML MGTLY</li>
                <li>emagtuloy.comm@gmail.com</li>
                <li className='mt-[55px] max-[600px]:mt-[21px]'><SocialLinks /></li>
              </ul>
            </li>
            <li className='flex flex-col gap-[17px] w-full items-center justify-center'>
              <Link to='/' className='font-medium hover:text-orange w-full'>
                Home
              </Link>
              <Link to='/Search' className='font-medium hover:text-orange w-full'>
                Search
              </Link>
              <Link to='/AboutUs' className='font-medium hover:text-orange w-full'>
                About Us
              </Link>
            </li>
          </ul>
        </section>
        <p className='w-full h-full p-[20px] px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3 bg-black-300 text-white-100 text-center'>
            © 2024 <b className='text-orange'>RML MGTLY’s Ani</b> All Rights Reserved , Inc.
        </p>
      </footer>
        
    </>
  )
}

export default Footer