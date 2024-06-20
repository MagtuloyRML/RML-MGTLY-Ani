import React, {useEffect, useState} from 'react'
import axios from 'axios'

const domain = 'http://localhost:3000/anime/gogoanime'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchInfo = async (urlInput) => {
        try {
            setIsLoading(true);
            const result = await axios.get(`${domain}${urlInput}`);
            setData(result.data);
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
        data, error, isLoading
    }
}

export default useFetch