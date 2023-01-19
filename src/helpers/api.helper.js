// import { data } from './AppMockItems/peopleInformation'
import { useState, useEffect } from 'react'
import axios from 'axios'

const key = 'RGAPI-ca1127d6-002f-4501-b742-2add9c7b7741'

export function GetSummmoner (region, username) {
  const baseURL = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + username + '?api_key=' + key
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [baseURL])

  return post
}

export function GetProfileIcon (iconNumber) {
  const baseURL = 'https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/' + iconNumber + '.png'
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [baseURL])

  return post
}
