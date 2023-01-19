import React, { useState } from 'react'
import NavigationBar from '../NavigationBar'
import { GetSummoner, GetListMatches, GetNumWinLosesMatches } from '../../helpers/api.helper'
import PlayerAverageCard from '../PlayerAverageCard'
import ProfileInformation from '../ProfileInformation'
import PersonalRating from '../PersonalRating'
import FavouriteChampion from '../FavouriteChampion'
import RecentMatches from '../RecentMatches'
import FavouriteChampionMockData from '../../resources/DataSamples/FavouriteChampion'
import PersonalRatingMockData from '../../resources/DataSamples/PersonalRating'
import RecentMatchesMockData from '../../resources/DataSamples/RecentMatches'

function App () {
  const [getData, setGetData] = useState(['DinoKlk', 'euw1'])

  const handleOnChange = (getData) => {
    setGetData(getData)
  }

  const classifyByRegions = (region) => {
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

  const userInfo = GetSummoner(getData[1], getData[0])

  const matchList = GetListMatches(userInfo.puuid, classifyByRegions(getData[1]))
  const numWinLoses = GetNumWinLosesMatches(matchList, classifyByRegions(getData[1])).teams
  if (numWinLoses !== undefined) {
    for (let i = 0; i < numWinLoses.length; i++) {
      console.log(i)
      console.log(numWinLoses[i])
      /* if (numWinLoses[i].win) {
        console.log
      } */
    }
  }

  return (
    <div>
      <NavigationBar setGetData={handleOnChange} />
      {!userInfo
        ? null
        : <div>
          <PlayerAverageCard />
          <RecentMatches data={RecentMatchesMockData} />
          <ProfileInformation data={userInfo} />
          <FavouriteChampion data={FavouriteChampionMockData} />
          <PersonalRating data={PersonalRatingMockData} />
        </div>}
    </div>
  )
}

export default App
