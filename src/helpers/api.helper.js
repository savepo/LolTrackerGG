// import { data } from './AppMockItems/peopleInformation'
import { useState, useEffect } from 'react'
import axios from 'axios'

const key = 'RGAPI-c544a5f4-e39b-48ad-b2e4-599d3a3329db'

export default function GetSummmoner (region, username) {
  const baseURL = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + username + '?api_key=' + key
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [])

  return post
}
