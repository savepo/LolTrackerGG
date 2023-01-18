import { useEffect, useState } from 'react'
import axios from 'axios'

const APIKEY = 'RGAPI-ca1127d6-002f-4501-b742-2add9c7b7741'

export function GetSummmoner (region, username) {
  const baseURL = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + username + '?api_key=' + APIKEY
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [baseURL])

  return post
}
