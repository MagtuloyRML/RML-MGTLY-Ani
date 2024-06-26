import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../Function/useFetch';
import { AnimeInfoContext, WatchEpisodeContext } from '../../context/Episode/WatchEpisodeContext';
import GetSeries from '../Home/GetSeries';
import AnimeInfo from './AnimeInfo';
import { LoadingContent } from '../Function/LoadingContent';
import Video from './Vid';

const Watch = () => {
    const params = useParams();
    const {data, error, loading} = useFetch(`/info/${params.id}`);
    const [episode, setEpisode] = useState(params.episodeId);
    
    const changeEpisode = (id) => {
        setEpisode(id);
    };

    return (
        <>
            {data ? 
            <>
                <section className='w-full h-full pt-2 mt-[59px] px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3 flex flex-col text-black-300 gap-5'>
                    <p >{`Watch / ${params.episodeId}`}</p>
                    
                    <section className='w-full h-full flex gap-3 max-[1024px]:flex-col items-center'>
                        <section className='w-full h-full gap-2 flex flex-col'>
                            <WatchEpisodeContext.Provider value={episode}>
                                <Video episode={episode} />
                            </WatchEpisodeContext.Provider>
                        </section>
                        <div className='w-full max-w-[420px] max-[1024px]:max-w-full flex flex-col gap-2'>
                            <h3 className='font-medium text-[1.25rem]'>Episodes:</h3>
                            <section className='w-full max-w-[420px] max-[1024px]:max-w-full overflow-x-hidden grid gap-2 p-2 grid-cols-7 max-[480px]:grid-cols-5 grid-rows-[50px] grid-flow-dense scrollbar-thin scrollbar-webkit h-full max-h-[365px] max-[1024px]:max-h-[150px]'>
                            {data.episodes.map((episode, index) => (
                                <Link onClick={() => changeEpisode(episode.id)} to={`/Watch/${params.id}/${episode.id}`} key={index} className={`${params.episodeId === episode.id ? 'bg-orange hover:bg-orange-800' : 'bg-black-300 hover:bg-orange'} h-[50px] flex justify-center items-center font-semibold text-white-100 rounded-md ease-in-out duration-300`} >
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
                <LoadingContent />
            : 
                <LoadingContent />
            }

            <GetSeries titleTab='Anime You May Like' url='/popular?page=1' type='get'/>   
        </>
    )
}

export default Watch