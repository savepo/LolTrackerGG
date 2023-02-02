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
import LoadingSpinner from '../LoadingSpinner'
import RecentMatches from '../RecentMatches'
import { ChampionCardRecentMockData } from '../../resources/DataSamples/ChampionCardRecentPlayed'

function App () {
  const [getData, setGetData] = useState([])
  const [summonerData, setSummonerData] = useState()
  const [personalRatingData, setPersonalRating] = useState()
  const [favouriteChampionData, setFavouriteChampion] = useState()
  const [playerAvarageCardData, setPlayerAvarageCardData] = useState()
  const [loader, setLoader] = useState(false)

  const handleOnChange = async (data) => {
    setSummonerData(undefined)
    setPersonalRating(undefined)
    setFavouriteChampion(undefined)
    setPlayerAvarageCardData(undefined)

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
            {summonerData === undefined || personalRatingData === undefined || favouriteChampionData === undefined || playerAvarageCardData === undefined ?
            <LoadingSpinner></LoadingSpinner> : 
            <>
            <ProfileInfoSlot>
              <ProfileInformation data={summonerData} />
            </ProfileInfoSlot>
            <PersonalRatingSlot>
              <PersonalRating data={personalRatingData} />
            </PersonalRatingSlot>
            <FavouriteChampionSlot>
              <FavouriteChampion data={favouriteChampionData} />
            </FavouriteChampionSlot>
            <GraphicSlot>
              <PlayerAverageCard data={playerAvarageCardData} />
            </GraphicSlot>
            </>
            }
          </MainSlot>
        </div>}

    </div>
  )
}

export default App
