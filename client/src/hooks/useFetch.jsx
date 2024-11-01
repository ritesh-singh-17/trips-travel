import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [apiData, setApiData] = useState();
    const [error, setError] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)

                const result = await response.json()
                if (!response.ok) {
                    setError(result.message || 'failed to fetch')
                    // toast.error(error)           
                }

                console.log(result)
                setApiData(result.data)

            } catch (error) {

            }
        }

        fetchData();
    }, [url])

    return { apiData, error }
}

export default useFetch
