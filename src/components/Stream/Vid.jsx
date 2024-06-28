import React, { useContext, useState }from 'react';
import VideoPlayer from './VidPlayer';
import { WatchEpisodeContext } from '../../context/Episode/WatchEpisodeContext';

const Video = () => {
    const episode = useContext(WatchEpisodeContext);
    return (
        <div className='w-full h-full'>
            <VideoPlayer sources={episode} />
        </div>
    );
};

export default Video;