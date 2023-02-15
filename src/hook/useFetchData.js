import { useState, useEffect } from 'react'

function useFetchData (id, action) {
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    action
      .then(data => {
        setApiData(data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error)
        setIsLoading(false)
      })
  }, [id])

  return [isLoading, apiData, error]
}

export default useFetchData
