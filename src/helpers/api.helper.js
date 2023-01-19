// import { data } from './AppMockItems/peopleInformation'
import { useState, useEffect } from 'react'
import axios from 'axios'

const key = 'RGAPI-c90d249a-c699-4f78-9359-3a04d08a49e5'

export function GetSummoner (region, username) {
  const baseURL = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + username + '?api_key=' + key
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
      console.log(response.data)
    })
  }, [baseURL])
  console.log(post)
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
      setPost(response.data[0])
    })
  }, [baseURL])

  let FavouriteChampionData

  const championList = GetChampionList()
  const championListValues = Object.values(championList)
  for (let i = 0; i < championListValues.length; i++) {
    const keyToNumber = Number(championListValues[i].key)
    const championIdToNumber = Number(post.championId)
    if (keyToNumber === championIdToNumber) {
      FavouriteChampionData = {
        name: championListValues[i].name,
        championSrc: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + championListValues[i].id + '_0.jpg'
      }
    }
  }
  return FavouriteChampionData
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
