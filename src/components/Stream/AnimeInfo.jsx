import React, { useContext, useState } from 'react'
import useTruncate from '../Function/useTruncate';
import { AnimeInfoContext } from '../../context/Episode/WatchEpisodeContext';

const AnimeInfo = () => {
    const data = useContext(AnimeInfoContext);
    const [showAllDescription, setShowAllDescription] = useState(false);
    return (
        <>
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
                    <ul className='flex gap-2 flex-wrap'>
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
                        <span className='text-orange font-medium px-2 cursor-pointer' onClick={() => setShowAllDescription(!showAllDescription)}>
                            {!showAllDescription ?
                                'See More...'
                            : 'See Less'}
                        </span>
                        :
                        <>
                        </>
                        }
                    </p>
                </section>
                <img className='aspect-auto w-full max-w-[250px] h-full max-[768px]:hidden' src={data.image} alt={data.image} />
            </article>
        </>
    )
}

export default AnimeInfo