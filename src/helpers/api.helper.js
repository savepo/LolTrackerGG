// import { data } from './AppMockItems/peopleInformation'
import { useState, useEffect } from 'react'
import axios from 'axios'

const key = 'RGAPI-a5df3134-8642-474e-af74-ea9dc334698a'

export function GetSummoner (region, username) {
  const baseURL = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + username + '?api_key=' + key
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [baseURL])

  return GetSummonerPreparedObject(post)
}

function GetSummonerPreparedObject (data) {
  const ProfileInformationData = {
    name: data.name,
    level: data.summonerLevel,
    iconSrc: 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/' + data.profileIconId + '.png',
    encryptedSummonerId: data.id
  }
  return ProfileInformationData
}

export function GetFavouriteChampion (region, encryptedSummonerId) {
  const baseURL = 'https://' + region + '.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + encryptedSummonerId + '?api_key=' + key
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [baseURL])

  // for (let i = 0; i < post.length; i++) {
  //   const element = array[i]

  // }

  const cl = GetChampionList()
  console.log(cl)
  const filteredChamp = cl.filter(champ => champ.Aatrox.key === 266)
  console.log(filteredChamp)
  return post[0]
}

function GetChampionList () {
  const baseURL = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json'
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.data)
    })
  }, [baseURL])
  // console.log(post)

  return post
}
