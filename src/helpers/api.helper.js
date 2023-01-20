// import { data } from './AppMockItems/peopleInformation'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonalRating from '../components/PersonalRating'

const key = 'RGAPI-eb89a4a5-5c87-4108-b4cd-ab50b304e647'

export async function GetSummoner (region, username) {
  const baseURL = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + username + '?api_key=' + key
  let userData
  // const [post, setPost] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const artifactsData = await GetAllArtifactsData()
  //     setPost(artifactsData)
  //     setLoading(false)
  //   }
  //   fetchData()
  // }, [])
  // console.log(await getArtifactsNames(region, username))
  console.log(region)
  if (region !== undefined && username !== undefined) {
    userData = await getSummonerData(region, username)
    // console.log(userData)
  }
  return userData
}

async function getSummonerData (region, username) {
  const userData = await axios.get('https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + username + '?api_key=' + key).then((response) => { return response })
  return userData
}

function GetSummonerPreparedObject (data) {
  const ProfileInformationData = {
    name: data.name,
    level: data.summonerLevel,
    iconSrc: 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/' + data.profileIconId + '.png',
    encryptedSummonerId: data.id,
    puuid: data.puuid
  }
  // console.log(ProfileInformationData)
  return ProfileInformationData
}

export function GetFavouriteChampion (region, encryptedSummonerId) {
  if (encryptedSummonerId === undefined) {
    encryptedSummonerId = 'K_-5ViXwOwCnGN8l6h2b2IcUy7AZKt5ZYTUZeF4WUL8fDdvt'
  }
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

export function GetRecentMatches (region, puuid) {
  if (puuid === undefined) {
    puuid = 'ZOn0zWMumK1GSOskBsmVw-Mjc5w9Nv0XgoNGZj7dJcuqp3oSPiOVueIDUXFp1IN2SoTffY2b4-J_Vg'
    region = 'euw1'
  }
  const objectArrayMatches = []
  const listMatches = GetListMatches(region, puuid)

  for (let i = 0; i < 1; i++) {
    const match = GetMatchData(region, listMatches[i])
    objectArrayMatches.push(GetRecentMatchPreparedObject(match, puuid, listMatches.length))
  }

  return objectArrayMatches
}

function GetRecentMatchPreparedObject (matchData, puuid, numberOfList) {
  const matchPreparedObject = {
    graphic: {
      text: '70%',
      winPercentage: 70,
      lossesPercentage: 30
    }
  }
  return matchPreparedObject
}

function GetMatchData (region, matchId) {
  if (matchId === undefined) {
    matchId = 'EUW1_6239031910'
    region = 'euw1'
  }
  const continent = RegionToContinent(region)

  const baseURL = 'https://' + continent + '.api.riotgames.com/lol/match/v5/matches/' + matchId + '?api_key=' + key
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.info)
    })
  }, [baseURL])

  return post
}

function GetListMatches (region, puuid) {
  if (puuid === undefined) {
    puuid = 'ZOn0zWMumK1GSOskBsmVw-Mjc5w9Nv0XgoNGZj7dJcuqp3oSPiOVueIDUXFp1IN2SoTffY2b4-J_Vg'
    region = 'euw1'
  }
  const baseURL = 'https://' + RegionToContinent(region) + '.api.riotgames.com/lol/match/v5/matches/by-puuid/' + puuid + '/ids?start=0&count=5&api_key=' + key
  // https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/SY-bVFqiL53G50WHkFCQzqj-wOeT5nF0feZ9humez0Fpijlsnc8hcwkfUGCEzTl0fCh_Eyq94MHuOg/ids?start=0&count=20&api_key=RGAPI-b6f2eeaa-c859-45a8-9568-6f94c5f0eb0a
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [baseURL])
  return post
}

function RegionToContinent (region) {
  let continent
  switch (region) {
    case 'euw1':
    case 'euw2':
      continent = 'europe'
      break
    case 'br1':
    case 'la1':
    case 'la2':
    case 'na1':
      continent = 'americas'
      break
    default:
      break
  }
  return continent
}
