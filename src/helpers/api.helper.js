import { useEffect, useState } from 'react'
import axios from 'axios'

const APIKEY = 'RGAPI-c544a5f4-e39b-48ad-b2e4-599d3a3329db'

export const GetSumoner = ({ region, gameName }) => {
  const [post, setPost] = useState(null)
  const baseUrl = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + gameName + '?api_key=' + APIKEY

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response.data)
    })
  }, [baseUrl])
  return (post)
}
