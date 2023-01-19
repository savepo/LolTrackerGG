import React, { useState } from 'react'
import NavigationBar from '../NavigationBar'
import { GetSummmoner } from '../../helpers/api.helper'
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
  let userInfo
  let region
  let gameName
  if (getData[1] !== undefined) {
    region = getData[1].toLowerCase()
    gameName = getData[0]
  } else {
    userInfo = null
  }

  userInfo = GetSummmoner(region, gameName)
  console.log(userInfo)
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
