import React, { useEffect, useState } from 'react'
import { FaSpinner } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom'
import useFetch from '../Function/useFetch';
import { AnimeInfoContext, WatchEpisodeContext } from '../../context/Episode/WatchEpisodeContext';
import GetSeries from '../Home/GetSeries';
import AnimeInfo from './AnimeInfo';
import { LoadingContent, StartUp } from '../Function/LoadingContent';
import Video from './Vid';
import useFetchSrc from '../Function/useFetchSrc';

const Watch = () => {
    const params = useParams();
    const {data, error, loading} = useFetch(`/info/${params.id}`);
    const [episode, setEpisode] = useState(params.episodeId);
    const {dataSrc, dataError, dataLoading} = useFetchSrc(episode);

    return (
        <>
            {data ? 
            <>
                <section className='w-full h-full pt-2 mt-[59px] px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3 flex flex-col text-black-300 gap-5'>
                    <p >{`Watch / ${params.episodeId}`}</p>
                    <section className='w-full h-full flex gap-3 max-[1024px]:flex-col items-start'>
                        <section className='w-full min-h-[405px] gap-2 flex flex-col aspect-video'>
                            {dataSrc? 
                                <WatchEpisodeContext.Provider value={dataSrc}>
                                    <Video episode={dataSrc} />
                                </WatchEpisodeContext.Provider>
                            : dataError ?
                                <>

                                </>
                            :
                                <>
                                    <div className='w-full h-full aspect-video bg-black-100 rounded-lg flex items-center justify-center'>
                                        <FaSpinner className='animate-spin text-[2rem]'/>
                                    </div>
                                </>
                            }
                        </section>
                        <div className='w-full max-w-[420px] max-[1024px]:max-w-full flex flex-col gap-2'>
                            <h3 className='font-medium text-[1.25rem]'>Episodes:</h3>
                            <section className='w-full max-w-[420px] max-[1024px]:max-w-full overflow-x-hidden flex flex-wrap  gap-2 scrollbar-thin scrollbar-webkit h-full max-h-[365px] max-[1024px]:max-h-[150px]'>
                            {data.episodes.map((episode, index) => (
                                <Link reloadDocument to={`/Watch/${params.id}/${episode.id}`} key={index} className={`${params.episodeId === episode.id ? 'bg-orange hover:bg-orange-800' : 'bg-black-300 hover:bg-orange'} w-full max-w-[55px] h-[50px] flex justify-center items-center font-semibold text-white-100 rounded-md ease-in-out duration-300`} >
                                    {episode.number}
                                </Link>
                            ))}
                            </section>
                        </div>
                    </section>
                    
                    <AnimeInfoContext.Provider value={data}>
                        <AnimeInfo data={data} />
                    </AnimeInfoContext.Provider>

                </section>   
            </> : 
            loading ?
                <StartUp />
            : 
                <StartUp />
            }

            <GetSeries titleTab='Anime You May Like' url='/popular?page=1' type='get'/>   
        </>
    )
}

export default Watch