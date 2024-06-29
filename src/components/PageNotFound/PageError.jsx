import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { TbFaceIdError } from "react-icons/tb";

export const PageError = () => {
  return (
    <>
        <section className='pt-2 px-[10%] min-h-[70vh] text-black-300 max-[1024px]:px-[5%] max-[768px]:px-3 flex flex-col gap-2 items-center justify-center'>
            <TbFaceIdError className='text-[9rem] max-[768px]:text-[6rem]' />
            <p className='text-[2rem] max-[768px]:text-[1.5rem] font-bold'>Oooops! Something Wrong in this Page</p>
            <p className='text-[1.25rem] max-[768px]:text-[1rem] font-medium text-center'>
              Please Try to Refresh the Page.
              <br />
              <br />
              If this not works, Please Contact Us
            </p>
        </section>
    </>
  )
}