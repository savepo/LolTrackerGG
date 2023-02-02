import React, { useState, useEffect } from 'react'
import {
  TitleContainer,
  Title,
  MainSlot,
  ProfileInfoSlot,
  PersonalRatingSlot,
  FavouriteChampionSlot,
  GraphicSlot,
  RecentMatchesSlot
} from './styles'
import NavigationBar from '../NavigationBar'
import {
  GetSummoner,
  GetFavouriteChampion,
  GetPersonalRating,
  getInfoMatch,
  getSummonerPerkKey
} from '../../helpers/api.helper'
import PlayerAverageCard from '../PlayerAverageCard'
import ProfileInformation from '../ProfileInformation'
import PersonalRating from '../PersonalRating'
import FavouriteChampion from '../FavouriteChampion'
import RecentMatches from '../RecentMatches'
import { ChampionCardRecentMockData } from '../../resources/DataSamples/ChampionCardRecentPlayed'

function App () {
  const [getData, setGetData] = useState([])
  const [summonerData, setSummonerData] = useState()
  const [personalRatingData, setPersonalRating] = useState()
  const [favouriteChampionData, setFavouriteChampion] = useState()
  const [infoMatch, setInfoMatch] = useState()

  const handleOnChange = async (data) => {
    setGetData(data)
    const summonerData = await GetSummoner(data[1], data[0])
    setSummonerData(summonerData)
    if (summonerData !== undefined) {
      const personalRatingData = await GetPersonalRating(data[1], summonerData.id)
      const favouriteChampionData = await GetFavouriteChampion(data[1], summonerData.id)
      const infoMatch = await getInfoMatch(data[1], summonerData.puuid, 0, 10)
      setPersonalRating(personalRatingData)
      setFavouriteChampion(favouriteChampionData)
      setInfoMatch(infoMatch)
      
    }
  }

  return (
    <div>
      <TitleContainer>
        <Title>LOL TRACKER GG</Title>
      </TitleContainer>
      <NavigationBar setGetData={handleOnChange} />

      {!summonerData
        ? null
        : <div>
          <MainSlot>
            <ProfileInfoSlot>
              {summonerData === undefined ? <div /> : <ProfileInformation data={summonerData} />}
            </ProfileInfoSlot>
            <PersonalRatingSlot>
              {personalRatingData === undefined ? <div /> : <PersonalRating data={personalRatingData} />}
            </PersonalRatingSlot>
            <FavouriteChampionSlot>
              {favouriteChampionData === undefined ? <div /> : <FavouriteChampion data={favouriteChampionData} />}
            </FavouriteChampionSlot>
          </MainSlot>
          <GraphicSlot>
            <PlayerAverageCard data={ChampionCardRecentMockData} />
          </GraphicSlot>
          <RecentMatchesSlot>
            {infoMatch === undefined ? <div /> : <RecentMatches data={infoMatch} />}
          </RecentMatchesSlot>
          {/* <RecentMatches data={RecentMatchesMockData} /> */}
          {/* <RecentMatches /> */}
          </div>}

    </div>
  )
}

export default App
