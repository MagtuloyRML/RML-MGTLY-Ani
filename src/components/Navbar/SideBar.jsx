import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import SocialLinks from '../SocialLinks/SocialLinks';
import { SidebarContext } from '../../context/Sidebar/SidebarContext';
import { LogoButton } from './NavigationButton';

const SideBar = () => {
    const {isShow , showSideBar} = useContext(SidebarContext);
  return (
    <>
        <nav className={`bg-white-100 w-full h-full z-20 gap-3 fixed top-0 ${isShow ? 'left-0' : '-left-[200vw]'} p-6 backdrop-blur-sm ease-in-out duration-300`} id='sidebar'>
            <ul className='flex flex-col gap-[61px]'>
                <li className='flex justify-between items-center gap-6'>
                    <LogoButton />
                    <button className='flex items-center gap-[2px] bg-transparent h-[1.5rem] w-[1.5rem] group' id='close' title='Close' onClick={showSideBar}>
                        <div className='bg-black-300 rounded-md h-[5px] w-[1.5rem] absolute rotate-45 group-hover:bg-orange'></div>
                        <div className='bg-black-300 rounded-md h-[5px] w-[1.5rem] absolute rotate-[-45deg] group-hover:bg-orange'></div>
                    </button>
                </li>
                <li className='flex flex-col gap-[35px]'>
                    <Link onClick={showSideBar} to='/' className='font-medium hover:text-orange w-full'>
                        Home
                    </Link>
                    <Link onClick={showSideBar} to='/Search' className='font-medium hover:text-orange w-full'>
                        Search
                    </Link>
                    <Link onClick={showSideBar} to='/AboutUs' className='font-medium hover:text-orange w-full'>
                        About Us
                    </Link>
                </li>
                <li className='absolute bottom-10 text-black-300 py-[10px]'>
                    <ul>
                        <li>
                            RML MGTLY
                        </li>
                        <li>
                            emagtuloy.comm@gmail.com
                        </li>
                        <li className='mt-[55px]'>
                            <SocialLinks />
                        </li>
                    </ul>

                </li>
            </ul>
        </nav>
    </>
  )
}

export default SideBar