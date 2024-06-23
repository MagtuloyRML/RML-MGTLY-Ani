import React from 'react'
import { Link } from 'react-router-dom'
import useTruncate from '../Function/useTruncate'
import { MdBrokenImage } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";

const GetAnime = ({index, animeid, episodeAnime, title, image, type}) => {
  return (
    <>
        {type === 'get' ?
            <li key={index} className={`w-fit min-w-[250px] max-[1024px]:min-w-[190px] hover:text-orange snap-start ease-in-out duration-300 rounded-md overflow-hidden hover:scale-110${index === 0 ? ' hover:ml-[20px]' :'' }`}>
                <Link to={`/Watch/${animeid}/${episodeAnime ? episodeAnime : animeid+'-episode-1'}`} className='w-fit min-w-[250px] flex flex-col gap-1 max-[1024px]:min-w-[190px]'>
                    <img className='w-[250px] min-w-[250px] h-[350px] rounded-md max-[1024px]:min-w-[190px] max-[1024px]:h-[285px]' src={image} alt={image} />
                    <p className='font-bold text-[1.25rem] max-[1024px]:text-[1rem] truncate'>
                        {useTruncate(title, 21)}
                    </p>
                </Link>
            </li>
        :  type === 'error' ?
        <>
            <li className='w-fit min-w-[250px] h-[387px] max-[1024px]:min-w-[190px] max-[1024px]:h-[315px] bg-black-100 snap-always snap-start ease-in-out duration-300 rounded-md overflow-hidden flex items-center justify-center'>
                <MdBrokenImage className='text-[4rem]'/>
            </li>
        </>  
        :   
        <>
            <li className='w-fit min-w-[250px] h-[387px] max-[1024px]:min-w-[190px] max-[1024px]:h-[315px] bg-black-100 snap-always snap-start ease-in-out duration-300 rounded-md overflow-hidden flex items-center justify-center'>
                <FaSpinner className='animate-spin text-[2rem]'/>
            </li>
        </>   
        }
        
    </>
  )
}

export default GetAnime