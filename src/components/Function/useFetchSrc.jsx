import React, {useEffect, useState} from 'react'
import axios from 'axios'

const domain = 'http://localhost:3000/anime/gogoanime/watch/'

const useFetchSrc = (url) => {
    const [dataSrc, setData] = useState(null);
    const [dataLoading, setIsLoading] = useState(true);
    const [dataError, setError] = useState(null);

    const fetchInfo = async (urlInput) => {
        try {
            setIsLoading(true);
            const result = await axios.get(`${domain}${urlInput}`);
            await setTimeout(1000);
            setData(
                result.data.sources.map((video) => ({
                    src: video.url,
                    label: video.quality
                }))
            );
        } catch (err) {
            setError(err.message);
        }
        finally{
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchInfo(url);
    }, [url])

    return {
        dataSrc, dataError, dataLoading
    }
}

export default useFetchSrc