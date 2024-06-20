import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
                <WatchEpisodeContext.Provider value={episode}>
                    <Video episode={episode} />
                </WatchEpisodeContext.Provider>
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