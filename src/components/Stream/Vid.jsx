import React, { useContext, useEffect, useState }from 'react';
import VideoPlayer from './VidPlayer';
import useFetch from '../Function/useFetch';
import { WatchEpisodeContext } from '../../context/Episode/WatchEpisodeContext';
import { FaSpinner } from "react-icons/fa";

const Video = () => {
    const episode = useContext(WatchEpisodeContext);
    const {data, error, loading} = useFetch(`/watch/${episode}`);
    const [sources, setSource] = useState([]);
    useEffect(() => {
        setSource(
            data? 
            data.sources.map((video) => ({
                src: video.url,
                label: video.quality
            }))
            : null
        );
        console.log(sources);
    }, [data])
    return (
        <div>
            {
                sources ?  
                    <VideoPlayer sources={sources} />
                : 
                <>
                    <div className='w-full h-full aspect-video bg-black-100 rounded-lg flex items-center justify-center'>
                        <FaSpinner className='animate-spin text-[2rem]'/>
                    </div>
                </>
            }
           
        </div>
    );
};

export default Video;