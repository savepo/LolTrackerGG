import React, { useState } from 'react'
import NavigationBar from '../NavigationBar'
import { GetSummoner, GetFavouriteChampion } from '../../helpers/api.helper'
import PlayerAverageCard from '../PlayerAverageCard'
import ProfileInformation from '../ProfileInformation'
import PersonalRating from '../PersonalRating'
import FavouriteChampion from '../FavouriteChampion'
import RecentMatches from '../RecentMatches'
import ProfileInformationMockData from '../../resources/DataSamples/ProfileInformation'
import FavouriteChampionMockData from '../../resources/DataSamples/FavouriteChampion'
import PersonalRatingMockData from '../../resources/DataSamples/PersonalRating'
import RecentMatchesMockData from '../../resources/DataSamples/RecentMatches'

function App () {
  const [getData, setGetData] = useState(['DinoKlk', 'euw1'])
  let region = getData[1].toLowerCase()
  let gameName = getData[0]

  let userInfo

  const handleOnChange = (getData) => {
    setGetData(getData)
  }
  if (getData[1] !== undefined) {
    region = getData[1].toLowerCase()
    gameName = getData[0]
  }
  userInfo = GetSummoner(region, gameName)
  // console.log(userInfo)
  let favouriteChamp
  favouriteChamp = GetFavouriteChampion(region, userInfo.encryptedSummonerId)
  // console.log(favouriteChamp)
  return (
    <div>
      <NavigationBar setGetData={handleOnChange} />
      {!userInfo
        ? null
        : <div>
          <div>{userInfo.name}</div>
          <div>{userInfo.puuid}</div>
          <div>{userInfo.summonerLevel}</div>
          {userInfo === undefined ? <div /> : <ProfileInformation data={userInfo} />}
          {favouriteChamp === undefined ? <div /> : <FavouriteChampion data={favouriteChamp} />}
          <PlayerAverageCard />

          <RecentMatches data={RecentMatchesMockData} />

          <PersonalRating data={PersonalRatingMockData} />
          </div>}

    </div>
  )
}

export default App
