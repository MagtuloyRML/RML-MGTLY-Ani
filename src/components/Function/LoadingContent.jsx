import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import logo from '../../assets/logo_loading.json'


export const StartUp = () => {
  return (
    <>
      <div className='flex w-full h-[100vh] items-center justify-center'>
        <Player className='w-[80px] aspect-square' src={logo} loop autoplay />
      </div>
    </>
  )
}
