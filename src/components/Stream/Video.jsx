import React, { useContext, useEffect, useRef, useState } from 'react'
import { WatchEpisodeContext } from '../../context/Episode/WatchEpisodeContext'
import { FaSpinner } from "react-icons/fa";
import useFetch from '../Function/useFetch';
import VideoJS from './VideoJS';

const Video = () => {
    const episode = useContext(WatchEpisodeContext);
    const {data, error, loading} = useFetch(`/watch/${episode}`);
    const [source, setSource] = useState([]);
    const [toPlay, setToPlay] = useState({});
    
    useEffect(() => {
        setSource(
            data? 
            data.sources.map((video) => ({
                src: video.url,
                type: 'application/x-mpegURL',
                label: video.quality
            }))
            : null
        );
        source ? 
            useSource('360p')
        : null
    }, [data]);

    const useSource = (resolution) => {
        setToPlay(
            source.filter((url) => {
                return url.label === resolution;
            }
        ));
    };

    const changeSource = (event) => {
        const value = event.target.value;
        useSource(value);
    }

    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            toPlay
        ]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;
        player.on('waiting', () => {
          videojs.log('player is waiting');
        });
        player.on('dispose', () => {
          videojs.log('player will dispose');
        });
    };

    return (
        <>
            {data ? 
                <>
                    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                </>
            : 
            <>
                <div className='w-full h-full aspect-video bg-black-100 rounded-lg flex items-center justify-center'>
                    <FaSpinner className='animate-spin text-[2rem]'/>
                </div>
            </>
            }
            <div>
                <label htmlFor="resolution">Resolution: </label>
                <select name="resolution" id="resolution" onChange={changeSource}>
                    {
                        data ? 
                        data.sources.map((video, index) => (
                            <option value={video.quality} key={index}>
                                {video.quality}
                            </option>
                        ))
                        : 
                        <option selected value=''>
                            <FaSpinner className='animate-spin text-[2rem]'/>
                        </option>
                    }
                </select>
            </div>
            
        </>
    )
}

export default Video