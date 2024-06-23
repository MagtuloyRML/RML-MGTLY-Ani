import React from 'react'
import './Scrollbar.css'
import { Link } from 'react-router-dom'
import useFetch from '../Function/useFetch'
import useTruncate from '../Function/useTruncate'

const RecentEpisode = () => {
    const {data, error, loading} = useFetch('/recent-episodes');
    data ? console.log(data) : null;

    return (
        <>
            <section className='mt-[59px] pt-2 px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3 text-black-300'>
                <h1 className='text-[1.5rem] font-bold'>Recent Episodes</h1>
                <ul className="flex overflow-x-auto overflow-y-hidden scroll-smooth focus:scroll-auto whitespace-nowrap py-4 gap-4 snap-mandatory snap-x scrollbar-thin scrollbar-webkit" >
                    {data ? 
                        data.results.map((episode, index) => (
                            <li key={index} className='w-fit min-w-[250px] max-[1024px]:min-w-[190px] hover:text-orange snap-start ease-in-out duration-300 rounded-md overflow-hidden hover:scale-110'>
                                <Link to={`/Watch/${episode.id}/${episode.episodeId}`} className='w-fit min-w-[250px] flex flex-col gap-1 max-[1024px]:min-w-[190px]'>
                                    <img className='w-[250px] min-w-[250px] h-[350px] rounded-md max-[1024px]:min-w-[190px] max-[1024px]:h-[285px]' src={episode.image} alt={episode.image} />
                                    <p className='font-bold text-[1.25rem] max-[1024px]:text-[1rem] truncate'>
                                        {useTruncate(episode.title, 21)}
                                    </p>
                                </Link>
                            </li>
                        ))
                    : 
                    <>
                        <li className='w-fit min-w-[250px] h-[387px] max-[1024px]:min-w-[190px] max-[1024px]:h-[315px] bg-black-100 snap-always snap-start ease-in-out duration-300 rounded-md overflow-hidden hover:scale-110'>
                        </li>
                        <li className='w-fit min-w-[250px] h-[387px] max-[1024px]:min-w-[190px] max-[1024px]:h-[315px] bg-black-100 snap-always snap-start ease-in-out duration-300 rounded-md overflow-hidden hover:scale-110'>
                        </li>
                        <li className='w-fit min-w-[250px] h-[387px] max-[1024px]:min-w-[190px] max-[1024px]:h-[315px] bg-black-100 snap-always snap-start ease-in-out duration-300 rounded-md overflow-hidden hover:scale-110'>
                        </li>
                        <li className='w-fit min-w-[250px] h-[387px] max-[1024px]:min-w-[190px] max-[1024px]:h-[315px] bg-black-100 snap-always snap-start ease-in-out duration-300 rounded-md overflow-hidden hover:scale-110'>
                        </li>
                    </>}
                </ul>
            </section>
        </>
    )
}

export default RecentEpisode