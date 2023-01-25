import React, { useState, useEffect } from 'react'
import { TitleContainer, Title, MainSlot, ProfileInfoSlot, PersonalRatingSlot, FavouriteChampionSlot, GraphicSlot } from './styles'
import NavigationBar from '../NavigationBar'
import { GetSummoner, GetFavouriteChampion, GetPersonalRating, GetRecentMatches, GetAvarageStatsFromLastMatches } from '../../helpers/api.helper'
import PlayerAverageCard from '../PlayerAverageCard'
import ProfileInformation from '../ProfileInformation'
import PersonalRating from '../PersonalRating'
import FavouriteChampion from '../FavouriteChampion'
import RecentMatches from '../RecentMatches'
import ProfileInformationMockData from '../../resources/DataSamples/ProfileInformation'
import FavouriteChampionMockData from '../../resources/DataSamples/FavouriteChampion'
import PersonalRatingMockData from '../../resources/DataSamples/PersonalRating'
import RecentMatchesMockData from '../../resources/DataSamples/RecentMatches'
import { ChampionCardRecentMockData } from '../../resources/DataSamples/ChampionCardRecentPlayed'

function App () {
  const [getData, setGetData] = useState([])
  const [summonerData, setSummonerData] = useState()
  const [personalRatingData, setPersonalRating] = useState()
  const [favouriteChampionData, setFavouriteChampion] = useState()
  const [playerAvarageCardData, setPlayerAvarageCardData] = useState()

  const handleOnChange = async (data) => {
    setGetData(data)
    const summonerData = await GetSummoner(data[1], data[0])
    setSummonerData(summonerData)
    if (summonerData !== undefined) {
      const personalRatingData = await GetPersonalRating(data[1], summonerData.id)
      const favouriteChampionData = await GetFavouriteChampion(data[1], summonerData.id)
      const playerAvarageCardData = await GetAvarageStatsFromLastMatches(data[1], summonerData.puuid, 0, 20)
      setPersonalRating(personalRatingData)
      setFavouriteChampion(favouriteChampionData)
      setPlayerAvarageCardData(playerAvarageCardData)

      // console.log(summonerData)
      // console.log(summonerData.puuid)
      // console.log(await GetAvarageStatsFromLastMatches(data[1], summonerData.puuid, 0, 5))
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
            {favouriteChampionData === undefined ? <div /> : <PlayerAverageCard data={playerAvarageCardData} />}
          </GraphicSlot>
          {/* <RecentMatches data={RecentMatchesMockData} /> */}
          {/* <RecentMatches /> */}
        </div>}

    </div>
  )
}

export default App
