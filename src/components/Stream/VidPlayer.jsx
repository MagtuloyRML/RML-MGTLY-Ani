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

    /* useEffect(() => {
        // Update video source when `src` prop changes
        if (player) {
          player.src(sources);
        }
      }, [sources]); */

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-default-skin w-full h-full min-h-[405px]"></video>
        </div>
    );
};

export default VideoPlayer;