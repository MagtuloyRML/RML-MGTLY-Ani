import React, { useContext } from 'react'
import { WatchEpisodeContext } from '../../context/Episode/WatchEpisodeContext'
import useFetch from '../Function/useFetch';
import videojs from 'video.js';

const Video = () => {
    const episode = useContext(WatchEpisodeContext);
    const {data, erro, loading} = useFetch(`/watch/${episode}`);
    console.log(data);
    
    return (
        <>
            <video id="my-player" className="video-js" controls preload="auto" data-setup='{}'>
                <source
                    src="https://www113.vipanicdn.net/streamhls/e5b324404a9cb6a61aae761c393d8a3d/ep.10.1718464887.m3u8"
                    type="application/x-mpegURL"
                />
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">
                supports HTML5 video
                </a>
            </video>
        </>
    )
}

export default Video