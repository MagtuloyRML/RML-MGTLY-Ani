import React, { useRef, useEffect, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css'; // Import Video.js styles

const VideoPlayer = ({ sources }) => {
    const videoRef = useRef(null);
    const [player, setPlayer] = useState();

    useEffect(() => {
        // Initialize video.js player
        setPlayer(videojs(videoRef.current, {
        autoplay: true,
        controls: true,
        responsive: true,
        sources: sources,
        }));

        return () => {
            if (player) {
                player.dispose();
            }
        };
    }, [sources]);

    return (
        <div data-vjs-player className='w-full h-full aspect-video'>
            <video ref={videoRef} className="video-js vjs-default-skin w-full"></video>
        </div>
    );
};

export default VideoPlayer;