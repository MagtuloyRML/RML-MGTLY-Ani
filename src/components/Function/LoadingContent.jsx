import React from 'react'
import { FaSpinner } from "react-icons/fa";

export const LoadingContent = () => {
  return (
    <> 
        <div className='h-[70vh] w-full flex items-center justify-center text-black-300'>
            <FaSpinner className='animate-spin text-[4rem]'/>
        </div>
    </>
  )
}
