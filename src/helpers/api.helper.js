import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonalRating from '../components/PersonalRating'
import { type } from '@testing-library/user-event/dist/type'

const key = 'RGAPI-5b5beefb-d0f2-4a59-b873-ff91a873044a'

// SUMMONER BASIC DATA
export async function GetSummoner (region, username) {
  let userData
  if (region !== undefined && username !== '') {
    userData = await getSummonerData(region, username)
  }
  return userData
}

async function getSummonerData (region, username) {
  try {
    const response = await axios.get(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${key}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// FAVOURITE CHAMPION DATA
export async function GetFavouriteChampion (region, encryptedSummonerId) {
  try {
    const response = await axios.get(`https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}?api_key=${key}`)
    return await getFavouriteChampionPreparedObject(response.data[0])
  } catch (error) {
    console.log(error)
  }
}

export async function getFavouriteChampionPreparedObject (data) {
  let FavouriteChampionData
  const championList = Object.values(await GetChampionList())

  for (let i = 0; i < championList.length; i++) {
    const keyToNumber = Number(championList[i].key)
    const championIdToNumber = Number(data.championId)
    if (keyToNumber === championIdToNumber) {
      FavouriteChampionData = {
        name: championList[i].name,
        championSrc: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championList[i].id}_0.jpg`
      }
    }
  }
  return FavouriteChampionData
}

export async function GetChampionList () {
  try {
    const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json')
    return response.data.data
  } catch (error) {
    console.log(error)
  }
}

// RANKED LEVEL DATA
export async function GetPersonalRating (region, encryptedSummonerId) {
  let personalRatingData
  if (region !== undefined && encryptedSummonerId !== '' && encryptedSummonerId !== undefined) {
    personalRatingData = await getPersonalRatingData(region, encryptedSummonerId)
  }
  console.log(personalRatingData)
  return personalRatingData
}

export async function getPersonalRatingData (region, encryptedSummonerId) {
  try {
    const response = await axios.get(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${key}`)
    return GetPersonalRatingPreparedObject(response.data)
  } catch (error) {
    console.log(error)
  }
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

export async function GetAvarageStatsFromLastMatches2 (region, puuid, start, count) {
  const listOfMatches = await GetListMatches(region, puuid, start, count)
  const singleMatchData = await GetMatchData(region, listOfMatches[0])
  return singleMatchData
}

async function GetListMatches (region, puuid, start, count) {
  try {
    const response = await axios.get(`https://${RegionToContinent(region.toLowerCase())}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${key}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

async function GetMatchData (region, matchId) {
  try {
    const response = await axios.get(`https://${RegionToContinent(region.toLowerCase())}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${key}`)
    return response.data.info
  } catch (error) {
    console.log(error)
  }
}

export async function GetAvarageStatsFromLastMatches (region, puuid, start, count) {
  let totalKills = 0
  let totalDeaths = 0
  let totalAssists = 0
  let wins = 0
  let loses = 0
  let championId = 0
  let matchesCount = 0
  try {
    const listOfMatches = await GetListMatches(region, puuid, start, count)

    console.log(listOfMatches)

    matchesCount = listOfMatches.length
    for (let i = 0; i < listOfMatches.length; i++) {
      const matchData = await GetMatchData(region, listOfMatches[i])

      const test = Object.values(matchData.participants)
      console.log(test[0])

      if (!matchData || !matchData) {
        continue
      }
      const participant = matchData.info.participants.find(p => p.player.puuid === puuid)
      if (!participant) {
        continue
      }
      if (!participant.kills || !participant.deaths || !participant.assists || !participant.win) {
        continue
      }
      totalKills += participant.kills
      totalDeaths += participant.deaths
      totalAssists += participant.assists
      if (participant.win) {
        wins++
      } else {
        loses++
      }
      championId = participant.championId
    }
  } catch (error) {
    console.log(error)
    return { error: error.message }
  }

  if (matchesCount === 0) {
    return { error: 'No matches found' }
  }

  const avarageKills = totalKills / matchesCount
  const avarageDeaths = totalDeaths / matchesCount
  const avarageAssists = totalAssists / matchesCount
  const kda = (totalKills + totalAssists) / totalDeaths
  let rate
  if (wins + loses === 0) {
    rate = 0
  } else {
    rate = (wins / (wins + loses)) * 100
  }
  const championSrc = `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championId}.png`

  return {
    championSrc,
    avarageKills,
    avarageDeaths,
    avarageAssists,
    rate,
    wins,
    loses,
    kda,
    graphic: {
      text: `${rate}%`,
      winPercentage: rate,
      lossesPercentage: 100 - rate
    }
  }
}

export async function getInfoMatch (region, puuid, start, count) {
  const matchInfoObject = []
  const listOfMatches = await GetListMatches(region, puuid, start, count)
  const matchDataPromises = listOfMatches.map(async matchId => {
    return await GetMatchData(region, matchId)
  })

  const matchData = await Promise.all(matchDataPromises)

  matchData.forEach((getMatchData, index) => {
    const matchId = listOfMatches[index]
    const participants = getMatchData.participants
    const participant = participants.find(p => p.puuid === puuid)

    matchInfoObject.push({
      matchIden: matchId,
      typeMatch: getMatchData.queueId,
      gameTime: getMatchData.gameDuration,
      gameEndTimestamp: getMatchData.gameEndTimestamp,
      gameMode: getMatchData.gameMode,
      kills: participant.kills,
      assists: participant.assists,
      deaths: participant.deaths,
      totalMinionsKilled: participant.totalMinionsKilled,
      goldEarned: participant.goldEarned,
      win: participant.win,
      item0: participant.item0,
      item1: participant.item1,
      item2: participant.item2,
      item3: participant.item3,
      item4: participant.item4,
      item5: participant.item5,
      item6: participant.item6,
      champLevel: participant.champLevel,
      championId: participant.championId,
      championName: participant.championName
    })
  })

  return matchInfoObject
}

export async function getIconChampionSrc (id) {
  const listChampions = Object.values(await GetChampionList())
  // console.log(typeof listChampions)
  const championId = await listChampions.find(c => Number(c.key) === Number(id))
  return championId.id
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
