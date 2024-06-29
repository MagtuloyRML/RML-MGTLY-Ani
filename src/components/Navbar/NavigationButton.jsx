import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

export const LogoButton = () => {
  return (
    <>
        <Link to='/RML-MGTLY-Ani/'>
            <img src={logo} alt={logo} srcSet={logo} />
        </Link>
    </>
  )
}

export const MenuButton = () => {
    return (
      <>
        <Link to='/RML-MGTLY-Ani/' className='font-medium hover:text-orange w-full'>
            Home
        </Link>
        <Link to='/RML-MGTLY-Ani/Search' className='font-medium hover:text-orange w-full'>
            Search
        </Link>
        <Link to='/RML-MGTLY-Ani/AboutUs' className='font-medium hover:text-orange w-full'>
            About Us
        </Link>
      </>
    )
  }
