import React from 'react'
import { FaRegFaceSadTear, FaRegFaceSmileWink } from "react-icons/fa6";
import GetSeries from '../Home/GetSeries';

export const NoResultFound = () => {
  return (
    <> 
        <div className='flex flex-col items-center h-[70vh] justify-center gap-3 w-full'>
        <FaRegFaceSadTear className='text-[9rem] max-[768px]:text-[6rem]' />
        <h1 className='text-[2rem] max-[768px]:text-[1.5rem] font-bold'>Sad, No Results Found</h1>
        <p className='text-[1.25rem] max-[768px]:text-[1rem] font-medium'>
            We were not able to find any anime match in your search
        </p>
        <p className='w-full mt-10 text-[1.25rem] max-[768px]:text-[1rem] font-medium'>
            Suggestion:
        </p>
        <ul className='w-full text-[.85rem]'>
            <li>
            Make sure all words are spelled correctly
            </li>
            <li>
            Try different search terms
            </li>
            <li>
            Keep Searching
            </li>
        </ul>
        </div>
    </>
  )
};

export const StartSearching = () => {
    return (
        <>
            <section className='pt-2 px-[10%] min-h-[50vh] mt-[80px] text-black-300 max-[1024px]:px-[5%] max-[768px]:px-3 flex flex-col gap-2 items-center justify-center'>
                <FaRegFaceSmileWink className='text-[9rem] max-[768px]:text-[6rem]' />
                <p className='text-[2rem] max-[768px]:text-[1.5rem] font-bold text-center'>
                    Feel Free to Search with us!
                </p>
                <p className='mt-5 text-[1rem] max-[768px]:text-[.75rem] font-medium text-center'>
                    Search Any favorite Anime you like or Check out our Recent Anime releashed below
                </p>
            </section>
            <GetSeries titleTab='Recent Episodes' url='/recent-episodes' type='get'/>
        </>
    )
};