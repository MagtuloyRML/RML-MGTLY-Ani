import React from 'react'
import './Scrollbar.css'
import useFetch from '../Function/useFetch'
import GetAnime from '../Function/GetAnime'

const GetSeries = ({titleTab, url, type}) => {
    const {data, error, loading} = useFetch(url);
    data ? console.log(data) : null;

    return (
        <>
            <section className='mt-[30px] pt-2 px-[10%] max-[1024px]:px-[5%] max-[768px]:px-3 text-black-300'>
                <h1 className='text-[1.5rem] font-bold'>{titleTab}</h1>
                <ul className="flex overflow-x-auto overflow-y-hidden scroll-smooth focus:scroll-auto whitespace-nowrap py-4 gap-4 snap-mandatory snap-x scrollbar-thin scrollbar-webkit" >
                    {data ? 
                        data.results.map((episode, index) => (
                            <GetAnime key={index} index={index} animeid={episode.id} episodeAnime={episode.episodeId
                            } title={episode.title} image={episode.image} type={type} />
                        ))
                    : loading ?
                    <>
                        <GetAnime />
                    </>
                    : error ?
                    <>
                        <GetAnime type='error' />
                    </>
                    : 
                    <>
                        <GetAnime />
                        <GetAnime />
                        <GetAnime />
                    </> 
                    }
                </ul>
            </section>
        </>
    )
}

export default GetSeries