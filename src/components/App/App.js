import React, { useState } from 'react'
import { TitleContainer, Title, MainSlot, ProfileInfoSlot, PersonalRatingSlot, FavouriteChampionSlot, GraphicSlot } from './styles'
import NavigationBar from '../NavigationBar'
import { GetSummoner, GetFavouriteChampion, GetPersonalRating, GetRecentMatches } from '../../helpers/api.helper'
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
  let personalRating
  let recentMatchesData

  favouriteChamp = GetFavouriteChampion(region, userInfo.encryptedSummonerId)
  personalRating = GetPersonalRating(region, userInfo.encryptedSummonerId)
  recentMatchesData = GetRecentMatches(region, userInfo.puuid)[0]
  // console.log(Object.values(recentMatchesData))
  return (
    <div>
      <TitleContainer>
        <Title>LOL TRACKER GG</Title>
      </TitleContainer>
      <NavigationBar setGetData={handleOnChange} />

      {!userInfo
        ? null
        : <div>
          <MainSlot>
            <ProfileInfoSlot>
              {userInfo === undefined ? <div /> : <ProfileInformation data={userInfo} />}
            </ProfileInfoSlot>
            <PersonalRatingSlot>
              {personalRating === undefined ? <div /> : <PersonalRating data={personalRating} />}
            </PersonalRatingSlot>
            <FavouriteChampionSlot>
              {favouriteChamp === undefined ? <div /> : <FavouriteChampion data={favouriteChamp} />}
            </FavouriteChampionSlot>
          </MainSlot>
          <GraphicSlot>
            <PlayerAverageCard data={recentMatchesData} />
          </GraphicSlot>

          <RecentMatches data={RecentMatchesMockData} />
          {/* <RecentMatches /> */}
          </div>}

    </div>
  )
}

export default App
