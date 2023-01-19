// import { data } from './AppMockItems/peopleInformation'
import { useState, useEffect } from 'react'
import axios from 'axios'

const key = 'RGAPI-b6f2eeaa-c859-45a8-9568-6f94c5f0eb0a'

export function GetSummoner (region, username) {
  const baseURL = 'https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + username + '?api_key=' + key
  const [post, setPost] = useState([])

  useEffect(() => {
    async function getPost () {
      const response = await axios.get(baseURL)
      setPost(response.data)
    }
    getPost()
  }, [baseURL])

  return GetSummonerPreparedObject(post)
}

function GetSummonerPreparedObject (data) {
  const ProfileInformationData = {
    name: data.name,
    level: data.summonerLevel,
    iconSrc: 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/' + data.profileIconId + '.png',
    encryptedSummonerId: data.id,
    puuid: data.puuid === undefined ? 'SY-bVFqiL53G50WHkFCQzqj-wOeT5nF0feZ9humez0Fpijlsnc8hcwkfUGCEzTl0fCh_Eyq94MHuOg' : 'SY-bVFqiL53G50WHkFCQzqj-wOeT5nF0feZ9humez0Fpijlsnc8hcwkfUGCEzTl0fCh_Eyq94MHuOg'
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
  return post
}

// get the recent 20 matches played
export function GetListMatches (summonerId, region) {
  const baseURL = 'https://' + region + '.api.riotgames.com/lol/match/v5/matches/by-puuid/' + summonerId + '/ids?start=0&count=10&api_key=' + key
  // https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/SY-bVFqiL53G50WHkFCQzqj-wOeT5nF0feZ9humez0Fpijlsnc8hcwkfUGCEzTl0fCh_Eyq94MHuOg/ids?start=0&count=20&api_key=RGAPI-b6f2eeaa-c859-45a8-9568-6f94c5f0eb0a
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [baseURL])
  return post
}

export function GetNumWinLosesMatches (matchList, region) {
  const [post, setPost] = useState([])

  useEffect(() => {
    for (let i = 0; i < matchList.length; i++) {
      const baseURL = 'https://' + region + '.api.riotgames.com/lol/match/v5/matches/' + matchList[i] + '?api_key=' + key
      axios.get(baseURL).then((response) => {
        const data = response.data.info
        setPost(data)
      })
    }
  }, [matchList, region])

  return post
  /* const [wins, setWins] = useState(0)
  const [loses, setLoses] = useState(0)

  useEffect(() => {
    for (let i = 0; i < matchList.length; i++) {
      const baseURL = 'https://' + region + '.api.riotgames.com/lol/match/v5/matches/' + matchList[i] + '?api_key=' + key
      axios.get(baseURL).then((response) => {
        const data = response.data
        const teams = data.info.teams
        console.log(teams.win)
      })
    }
  }, [wins, region])

  return { wins, loses } */
}
