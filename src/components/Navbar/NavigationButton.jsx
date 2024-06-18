import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

export const LogoButton = () => {
  return (
    <>
        <Link to='/'>
            <img src={logo} alt={logo} srcSet={logo} />
        </Link>
    </>
  )
}

export const MenuButton = () => {
    return (
      <>
        <Link to='/' className='font-medium hover:text-orange w-full'>
            Home
        </Link>
        <Link to='/' className='font-medium hover:text-orange w-full'>
            Genre
        </Link>
        <Link to='/AboutUs' className='font-medium hover:text-orange w-full'>
            About Us
        </Link>
      </>
    )
  }
