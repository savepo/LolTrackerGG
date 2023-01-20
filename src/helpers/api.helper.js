import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonalRating from '../components/PersonalRating'

const key = 'RGAPI-eb89a4a5-5c87-4108-b4cd-ab50b304e647'

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
  if (encryptedSummonerId === undefined) {
    encryptedSummonerId = 'K_-5ViXwOwCnGN8l6h2b2IcUy7AZKt5ZYTUZeF4WUL8fDdvt'
  }
  console.log(encryptedSummonerId)
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
  const baseURL = 'https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json'
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.data)
    })
  }, [baseURL])
  // console.log(post)

  return post
}

export function GetPersonalRating (region, encryptedSummonerId) {
  if (encryptedSummonerId === undefined) {
    encryptedSummonerId = 'K_-5ViXwOwCnGN8l6h2b2IcUy7AZKt5ZYTUZeF4WUL8fDdvt'
  }
  const baseURL = 'https://' + region + '.api.riotgames.com/lol/league/v4/entries/by-summoner/' + encryptedSummonerId + '?api_key=' + key
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [baseURL])
  // console.log(post[0])
  return GetPersonalRatingPreparedObject(post)
}

function GetPersonalRatingPreparedObject (data) {
  const PersonalRatingData = {
    RankedSolo: {
      text: 'Ranked Solo',
      tier: 'Unranked',
      rank: '',
      leaguePoints: 0,
      wins: 0,
      losses: 0
    },
    RankedFlex: {
      text: 'Ranked Flex',
      tier: 'Unranked',
      rank: '',
      leaguePoints: 0,
      wins: 0,
      losses: 0
    }
  }
  for (let i = 0; i < data.length; i++) {
    switch (data[i].queueType) {
      case 'RANKED_FLEX_SR':
        PersonalRatingData.RankedFlex.tier = data[i].tier
        PersonalRatingData.RankedFlex.rank = data[i].rank
        PersonalRatingData.RankedFlex.leaguePoints = data[i].leaguePoints
        PersonalRatingData.RankedFlex.wins = data[i].wins
        PersonalRatingData.RankedFlex.losses = data[i].losses
        break

      case 'RANKED_SOLO_5x5':
        PersonalRatingData.RankedSolo.tier = data[i].tier
        PersonalRatingData.RankedSolo.rank = data[i].rank
        PersonalRatingData.RankedSolo.leaguePoints = data[i].leaguePoints
        PersonalRatingData.RankedSolo.wins = data[i].wins
        PersonalRatingData.RankedSolo.losses = data[i].losses
        break
      default:
        break
    }
  }
  return PersonalRatingData
}
