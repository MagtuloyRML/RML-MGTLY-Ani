import React, { useContext, useEffect, useRef, useState } from 'react'
import { WatchEpisodeContext } from '../../context/Episode/WatchEpisodeContext'
import useFetch from '../Function/useFetch';
import VideoJS from './VideoJS';

const Video = () => {
    const episode = useContext(WatchEpisodeContext);
    const {data, error, loading} = useFetch(`/watch/${episode}`);
    const [source, setSource] = useState([]);
    const [toPlay, setToPlay] = useState({});
    /* console.log(data);  */   
    useEffect(() => {
        setSource(
            data && !loading  ? 
            data.sources.map((video) => ({
                src: video.url,
                type: 'application/x-mpegURL',
                label: video.quality
            }))
            : null
        );
        source ? 
            useSource('default')
        : null
    }, [data]);

    const useSource = (resolution) => {
        setToPlay(
            source.filter((url) => {
                return url.label === resolution;
            }
        ))
    };

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
            {data && !loading  ? 
                <>
                    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                </>
            : 
            <>
                <div className='w-full h-full aspect-video bg-black-300 rounded-lg'>

                </div>
            </>
            }
            <label htmlFor="resolution">Resolution: </label>
            <select name="resolution" id="resolution">
                {
                    data && !loading  ? 
                    data.sources.map((video) => (
                        <option onSelect={() => useSource(video.quality)}>
                            {video.quality}
                        </option>
                    ))
                    : null
                }
            </select>
        </>
    )
}

export default Video