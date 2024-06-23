import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { TbFaceIdError } from "react-icons/tb";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
        <Navbar />
        <section className='pt-2 px-[10%] min-h-[100vh] text-black-300 max-[1024px]:px-[5%] max-[768px]:px-3 flex flex-col gap-2 items-center justify-center'>
            <TbFaceIdError className='text-[9rem] max-[768px]:text-[6rem]' />
            <p className='text-[2rem] max-[768px]:text-[1.5rem] font-bold'>Oooops! Page Not Found</p>
            <p className='text-[1.25rem] max-[768px]:text-[1rem] font-medium text-center'>Sorry, the page you're looking for doesn't exixting</p>

            <Link to='/' className='mt-10 text-center bg-orange hover:bg-orange-800 rounded-xl font-bold text-white-100 p-3 text-[1.25rem] max-[768px]:text-[1rem]'>
                Go to Home Page
            </Link>
        </section>
        <Footer />
    </>
  )
}

export default PageNotFound