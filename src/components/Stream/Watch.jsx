import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../Function/useFetch';
import useTruncate from '../Function/useTruncate';
import { WatchEpisodeContext } from '../../context/Episode/WatchEpisodeContext';
import Video from './Video';

const Watch = () => {
    const params = useParams();
    const {data, error, loading} = useFetch(`/info/${params.id}`);
    const [episode, setEpisode] = useState(params.episodeId)
    const [showAllDescription, setShowAllDescription] = useState(false);
    return (
        <>
            {data ? 
            <>
            <section className='w-full h-full mt-[59px] px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3 flex flex-col text-black-300 gap-2'>
                <p className=''>{`Watch - ${params.id} - ${params.episodeId}`}</p>
                <section className='w-full h-full flex gap-3 max-[1024px]:flex-col'>
                    <section className='aspect-video w-full h-full'>
                        <WatchEpisodeContext.Provider value={episode}>
                            <Video episode={episode} />
                        </WatchEpisodeContext.Provider>
                    </section>
                    <section className='w-full max-w-[420px] max-[1024px]:max-w-full h-full overflow-y-auto grid gap-2 grid-cols-8 grid-rows-[50px] grid-flow-dense'>
                        {data.episodes.map((episode, index) => (
                            <Link to={`/Watch/${params.id}/${episode.id}`} key={index} className={`${params.episodeId === episode.id ? 'bg-orange' : 'bg-black-300'} h-[50px] flex justify-center items-center font-semibold text-white-100 rounded-md hover:bg-orange ease-in-out duration-300`}>
                                {episode.number}
                            </Link>
                        ))}
                    </section>
                </section>
                
                <article className='w-full h-full flex gap-6'>
                    <section className='flex flex-col gap-2'>
                        <h1 className='font-bold text-[2.75rem] max-[768px]:text-[1.75rem] w-full '>
                            {data.title}
                        </h1>
                        <h3 className='font-semibold'>
                            {data.otherName}
                        </h3>
                        <h4 className='font-medium text-[1rem]'>
                            Aired: {data.releaseDate}
                        </h4>
                        <h4 className='font-medium text-[1rem]'>
                            Category:
                        </h4>
                        <ul className='flex gap-2'>
                            {data.genres.map((genre, index) => 
                            <li key={index}>
                                <p>{genre}</p>
                            </li>
                            )}
                        </ul>
                        <p className='text-[.875rem] font-normal'>
                            {!showAllDescription ?
                            useTruncate(data.description, 275, '')
                            : data.description}
                            {
                            data.description.length >= 275 ? 
                            <a className='text-orange font-medium px-2 cursor-pointer' onClick={() => setShowAllDescription(!showAllDescription)}>
                                {!showAllDescription ?
                                    'See More...'
                                : 'See Less'}
                            </a>
                            :
                            <>
                            </>
                            }
                        </p>
                    </section>
                    <img className='aspect-auto w-full max-w-[250px] h-full max-[768px]:hidden' src={data.image} alt={data.image} />
                </article>
            </section>   
            </> : <></>
            }    
        </>
    )
}

export default Watch