import React, { useState } from 'react'
import {
  TitleContainer,
  Title,
  MainSlot, LeftSideContainer, RightSideContainer, RowContainer,
  ProfileInfoSlot,
  PersonalRatingSlot,
  FavouriteChampionSlot,
  GraphicSlot, SpinnerSlot,
  RecentMatchesSlot
} from './styles'
import NavigationBar from '../NavigationBar'
import {
  GetSummoner,
  GetFavouriteChampion,
  GetPersonalRating,
  GetAvarageStatsFromLastMatches,
  getInfoMatch
} from '../../helpers/api.helper'
import PlayerAverageCard from '../PlayerAverageCard'
import ProfileInformation from '../ProfileInformation'
import PersonalRating from '../PersonalRating'
import FavouriteChampion from '../FavouriteChampion'
import LoadingSpinner from '../LoadingSpinner'
import RecentMatches from '../RecentMatches'
import AdaptativeProfileInformation from '../AdaptativeProfileInformation'

function App () {
  const [getData, setGetData] = useState([])
  const [summonerData, setSummonerData] = useState()
  const [personalRatingData, setPersonalRating] = useState()
  const [favouriteChampionData, setFavouriteChampion] = useState()
  const [playerAvarageCardData, setPlayerAvarageCardData] = useState()
  const [loader, setLoader] = useState(false)
  const [infoMatch, setInfoMatch] = useState()

  const handleOnChange = async (data) => {
    setSummonerData(undefined)
    setPersonalRating(undefined)
    setFavouriteChampion(undefined)
    setPlayerAvarageCardData(undefined)
    setInfoMatch(undefined)
    setGetData(data)
    const summonerData = await GetSummoner(data[1], data[0])
    setSummonerData(summonerData)
    if (summonerData !== undefined) {
      const personalRatingData = await GetPersonalRating(data[1], summonerData.id)
      const favouriteChampionData = await GetFavouriteChampion(data[1], summonerData.id)
      const playerAvarageCardData = await GetAvarageStatsFromLastMatches(data[1], summonerData.puuid, 0, 20)
      const recentMatchesPlayedInfo = await getInfoMatch(data[1], summonerData.puuid, 1, 10)
      setPersonalRating(personalRatingData)
      setFavouriteChampion(favouriteChampionData)
      setPlayerAvarageCardData(playerAvarageCardData)
      setInfoMatch(recentMatchesPlayedInfo)
    }
  }

  return (
    <div>
      <TitleContainer id='navbar'>
        <Title>LOL TRACKER GG</Title>
      </TitleContainer>
      <NavigationBar setGetData={handleOnChange} />      

      {!summonerData
        ? null
        : <div>
          <MainSlot>
            {summonerData === undefined || personalRatingData === undefined || favouriteChampionData === undefined || playerAvarageCardData === undefined ?
            <SpinnerSlot><LoadingSpinner></LoadingSpinner></SpinnerSlot> : 
            <>
            <LeftSideContainer>
              <ProfileInfoSlot>
                <ProfileInformation id='proinfo' data={summonerData} />
                <AdaptativeProfileInformation></AdaptativeProfileInformation>
              </ProfileInfoSlot>
            </LeftSideContainer>

            <RightSideContainer>
              <RowContainer>
                <PersonalRatingSlot>
                  <PersonalRating data={personalRatingData} />
                </PersonalRatingSlot>

                <FavouriteChampionSlot>
                  <FavouriteChampion data={favouriteChampionData} />
                </FavouriteChampionSlot>
              </RowContainer>
              <RowContainer>
                <GraphicSlot>
                  <PlayerAverageCard data={playerAvarageCardData} />
                </GraphicSlot>
              </RowContainer>
              <RowContainer>
              <RecentMatchesSlot>
                <RecentMatches data={infoMatch}/>
              </RecentMatchesSlot>
              </RowContainer>
            </RightSideContainer>
       
            </>
            }
          </MainSlot>
        </div>}

    </div>
  )
}

export default App
