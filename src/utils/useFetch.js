import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw Error('Could not make request, Try again!')
            }
            // console.log("response", response);
            response = await response.json();
            setData(response);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false)
        }
    }
    return { data, loading, error, setData, setLoading };
}

export default useFetch;