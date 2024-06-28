import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useTruncate from '../Function/useTruncate'
import { MdBrokenImage } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import { GetSearchListContext } from '../../context/Search/SearchContext';

export const GetAnime = ({index, animeid, episodeAnime, title, image, type}) => {
  return (
    <>
        {type === 'get' ?
            <li key={index} className={`w-fit min-w-[250px] max-[1024px]:min-w-[190px] hover:text-orange snap-start ease-in-out duration-300 rounded-md overflow-hidden hover:scale-110${index === 0 ? ' hover:ml-[20px]' :'' }`}>
                <Link to={`/Watch/${animeid}/${episodeAnime ? episodeAnime : animeid+'-episode-1'}`} className='w-fit min-w-[250px] flex flex-col gap-1 max-[1024px]:min-w-[190px]' title={title}>
                    <img className='w-[250px] min-w-[250px] h-[350px] rounded-md max-[1024px]:min-w-[190px] max-[1024px]:h-[285px]' src={image} alt={image} />
                    <p className='font-bold text-[1.25rem] max-[1024px]:text-[1rem]'>
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

export const GetSearchAnime = () => {
    const data = useContext(GetSearchListContext);
    return (
        <>
           {
            data.map((anime, index) => (
                <li key={index} className='border-2 border-white-100 bg-white-100 w-fit min-w-[200px] max-[1024px]:min-w-[140px] max-[768px]:min-w-[100px] hover:text-orange ease-in-out duration-300 rounded-md overflow-hidden hover:scale-110'>
                    <Link to={`/Watch/${anime.id}/${anime.id+'-episode-1'}`} title={anime.title}>
                        <img className='w-[200px] min-w-[200px] h-[290px] rounded-md max-[1024px]:min-w-[140px] max-[768px]:w-[100px] max-[1024px]:h-[285px] max-[768px]:h-[185px]' src={anime.image} alt="" />
                        <h4 className='font-medium text-[1rem] max-[1024px]:text-[.85rem] max-[768px]:text-[.7rem]'>
                            {useTruncate(anime.title, 23)}
                        </h4>
                    </Link>
                </li>
           ))
           }
        </>
    );
}
