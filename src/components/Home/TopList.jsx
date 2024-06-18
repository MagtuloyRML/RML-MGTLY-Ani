import React from 'react'
import { FaPlay } from "react-icons/fa";

const TopList = () => {
  return (
    <>
        <article className='text-black-300 flex items-center gap-6 max-[1024px]:flex-col max-[1024px]:relative'>
            <section className='flex flex-col max-w-[450px] max-[1024px]:max-w-full max-[1024px]:h-[540px] justify-end p-3'>
                <h1 className='text-[2.75rem] font-bold order-2
                    max-[1024px]:text-[2.25rem]'>
                    Tsuki ga Michibiku Isekai Douchuu 2nd Season
                </h1>
                <h3 className='text-[1.125rem] font-medium order-1
                    max-[1024px]:text-[.9375rem]'>
                    Top 1
                </h3>
                <p className='text-[.875rem] order-3
                    max-[1024px]:text-[.75rem]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa reprehenderit consequatur blanditiis exercitationem temporibus inventore fugiat accusantium totam cumque.
                </p>
                <button className='rounded-lg text-white-100 text-[1.75rem] font-bold bg-orange flex items-center py-[10px] px-[24px] gap-3 hover:bg-orange-800 mt-[60px] w-fit order-4
                max-[1024px]:mt-[20px] max-[1024px]:text-[1.125rem]' title='Watch Now'>
                    <FaPlay />
                    WATCH NOW
                </button>
            </section>
            <section className='h-[540px] w-full relative max-[1024px]:absolute max-[1024px]:z-[-1]'>
                <img src="https://gogocdn.net/cover/tsuki-ga-michibiku-isekai-douchuu-2nd-season-1708569353.png" alt="https://gogocdn.net/cover/tsuki-ga-michibiku-isekai-douchuu-2nd-season-1708569353.png"
                className='w-full h-full object-cover absolute'/>
                <div className='w-full h-full absolute bg-white-100 bg-opacity-80'></div>
            </section>
        </article>
    </>
  )
}

export default TopList