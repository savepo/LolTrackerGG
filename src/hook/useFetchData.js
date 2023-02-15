import { useState, useEffect } from 'react'

function useFetchData (id, region, action, onData) {
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (id !== null && region !== null) {
      setIsLoading(true)

      action(region, id)
        .then(data => {
          setApiData(data)
          setIsLoading(false)
          if (onData !== undefined) {
            onData(data)
          }
        })
        .catch(error => {
          setError(error)
          setIsLoading(false)
        })
    }
  }, [id, region, action])

  return [isLoading, apiData, error]
}

export default useFetchData
