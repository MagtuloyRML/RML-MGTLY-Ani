import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import SideBar from './SideBar';
import { SidebarContext } from '../../context/Sidebar/SidebarContext';
import { LogoButton, MenuButton } from './NavigationButton';
import SearchBar from './SearchBar';

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);
    const showSideBar = () => {
        setIsShow(!isShow);
    }
    return (
        <>
            <header className='flex flex-row justify-between items-center text-black-300 py-3 px-[10%] z-10 gap-3 fixed top-0 left-0 right-0 backdrop-blur-lg 
                max-[1024px]:px-[5%]
                max-[768px]:px-3' >
                <ul className='flex flex-row items-center justify-between gap-6'>
                    <li>
                        <LogoButton />
                    </li>
                    <li className='flex items-center flex-column gap-4 w-[350px] text-center p-1
                        max-[1024px]:gap-2
                        max-[768px]:hidden'>
                        <MenuButton />
                    </li>
                </ul>
                <ul className='w-full flex flex-row justify-end items-center gap-5'>
                    <SearchBar />
                    <li className='hidden max-[768px]:block'>
                        <button className='flex flex-col gap-[2px] bg-transparent h-[16px] w-[1.5rem] group' id='forSideBar' title='Menu' 
                            onClick={() => showSideBar()} >
                            <div className='bg-black-300 rounded-md h-[5px] w-[1.5rem] group-hover:bg-orange'></div>
                            <div className='bg-black-300 rounded-md h-[5px] w-[1.5rem] group-hover:bg-orange'></div>
                            <div className='bg-black-300 rounded-md h-[5px] w-[1.5rem] group-hover:bg-orange'></div>
                        </button>
                    </li>
                </ul>
            </header>
            <SidebarContext.Provider value={{isShow : isShow, showSideBar : () => showSideBar()}}>
                <SideBar isShow={{isShow , showSideBar}} />
            </SidebarContext.Provider>
        </>
    )
}

export default Navbar