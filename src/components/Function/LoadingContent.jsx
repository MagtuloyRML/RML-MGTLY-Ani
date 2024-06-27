import React from 'react'
import { FaSpinner } from "react-icons/fa";
import { Player } from '@lottiefiles/react-lottie-player';
import logo from '../../assets/logo_loading.json'

export const LoadingContent = () => {
  return (
    <> 
        <div className='h-[70vh] w-full flex items-center justify-center text-black-300'>
            <FaSpinner className='animate-spin text-[4rem]'/>
        </div>
    </>
  )
}

export const StartUp = () => {
  return (
    <>
      <div className='flex w-full h-[100vh] items-center justify-center'>
        <Player className='w-[80px] aspect-square' src={logo} loop autoplay />
      </div>
    </>
  )
}
