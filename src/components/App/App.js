import React, { useState, useEffect } from 'react'
import { TitleContainer, Title, MainSlot, LeftSideContainer, RightSideContainer, RowContainer, ProfileInfoSlot, PersonalRatingSlot, FavouriteChampionSlot, GraphicSlot, SpinnerSlot, RecentMatchesSlot } from './styles'
import NavigationBar from '../NavigationBar'
import { getSummonerData, getFavouriteChampion, getRankedLevel, getInfoMatch, getAvarageStatsFromLastMatches } from '../../helpers/api.helper'
import PlayerAverageCard from '../PlayerAverageCard'
import ProfileInformation from '../ProfileInformation'
import PersonalRating from '../PersonalRating'
import FavouriteChampion from '../FavouriteChampion'
import LoadingSpinner from '../LoadingSpinner'
import RecentMatches from '../RecentMatches'
import ProfileInformationMockData from '../../resources/DataSamples/ProfileInformation'
import FavouriteChampionMockData from '../../resources/DataSamples/FavouriteChampion'
import PersonalRatingMockData from '../../resources/DataSamples/PersonalRating'
import RecentMatchesMockData from '../../resources/DataSamples/RecentMatches'
import { ChampionCardRecentMockData } from '../../resources/DataSamples/ChampionCardRecentPlayed'

function App () {
  // const [getData, setGetData] = useState([])
  // const [summonerData, setSummonerData] = useState()
  // const [personalRatingData, setPersonalRating] = useState()
  // const [favouriteChampionData, setFavouriteChampion] = useState()
  // const [playerAvarageCardData, setPlayerAvarageCardData] = useState()
  // const [loader, setLoader] = useState(false)

  const [inputData, setInputData] = useState([null, null])
  const [summonerData, setSummonerData] = useState(null)
  const [rankedLevelData, setRankedLevelData] = useState(null)
  const [favouriteChampionData, setFavouriteChampionData] = useState(null)
  const [playerAvarageCardData, setPlayerAvarageCardData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [recentMatches, setRecentMatches] = useState(null)
  const [error, setError] = useState(null)

  // Use Effect to get the basic data of a user
  useEffect(() => {
    if (inputData[0] !== null & inputData[1] !== null) {
      // Set Loader
      setIsLoading(true)
      // Set summoner data
      getSummonerData(inputData[1], inputData[0])
        .then(data => {
          setSummonerData(data)
        })
        .catch(error => {
          setError(error)
          // Unset Loader
          setIsLoading(false)
        })
    }
  }, [inputData])

  useEffect(() => {
    if (summonerData !== null & inputData[1] !== null) {
      // Ranked level data
      getRankedLevel(inputData[1], summonerData.id)
        .then(data => {
          setRankedLevelData(data)
          setIsLoading(false)
        })
        .catch(error => {
          setError(error)
        })

      // Favourite champion data
      getFavouriteChampion(inputData[1], summonerData.id)
        .then(data => {
          setFavouriteChampionData(data)
          setIsLoading(false)
        })
        .catch(error => {
          setError(error)
        })

      // Graphic data
      getAvarageStatsFromLastMatches(inputData[1], summonerData.puuid, 0, 5)
        .then(data => {
          setPlayerAvarageCardData(data)
          setIsLoading(false)
        })
        .catch(error => {
          setError(error)
        })

      // Recent list matches
      getInfoMatch(inputData[1], summonerData.puuid, 0, 3)
        .then(data => {
          setRecentMatches(data)
          setIsLoading(false)
          console.log('asasasas')
          console.log(data)
        })
        .catch(error => {
          setError(error)
        })
    }
  }, [summonerData, inputData])

  const handleOnChange = async (data) => {
    // Save input data in the state
    if (data[0] !== '') {
      setInputData(data)
    } else {
      // Would be nice to advice the user that he is trying to search an empty input.

    }

    // setSummonerData(undefined)
    // setPersonalRating(undefined)
    // setFavouriteChampion(undefined)
    // setPlayerAvarageCardData(undefined)

    // setGetData(data)
    // const summonerData = await GetSummoner(data[1], data[0])
    // setSummonerData(summonerData)
    // if (summonerData !== undefined) {
    //   const personalRatingData = await GetPersonalRating(data[1], summonerData.id)
    //   const favouriteChampionData = await GetFavouriteChampion(data[1], summonerData.id)
    //   const playerAvarageCardData = await GetAvarageStatsFromLastMatches(data[1], summonerData.puuid, 0, 20)
    //   setPersonalRating(personalRatingData)
    //   setFavouriteChampion(favouriteChampionData)
    //   setPlayerAvarageCardData(playerAvarageCardData)
    // }
  }

  return (
    <div>
      <TitleContainer>
        <Title>LOL TRACKER GG</Title>
      </TitleContainer>
      <NavigationBar setGetData={handleOnChange} />
      <MainSlot>
        {isLoading && <SpinnerSlot><LoadingSpinner /></SpinnerSlot>}

        {summonerData !== null & rankedLevelData !== null & favouriteChampionData !== null & playerAvarageCardData !== null & recentMatches !== null
          ? <>
            <LeftSideContainer>
              <ProfileInfoSlot>
                <ProfileInformation data={summonerData} />
              </ProfileInfoSlot>
            </LeftSideContainer>

            <RightSideContainer>
              <RowContainer>
                <PersonalRatingSlot>
                  <PersonalRating data={rankedLevelData} />
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
                  <RecentMatches data={recentMatches} />
                </RecentMatchesSlot>
              </RowContainer>
            </RightSideContainer>
            </>
          : <div />}

      </MainSlot>
      {/* {!summonerData
        ? null
        : <div>
          <MainSlot>
            {summonerData === undefined || personalRatingData === undefined || favouriteChampionData === undefined || playerAvarageCardData === undefined
              ? <SpinnerSlot><LoadingSpinner /></SpinnerSlot>
              : <>
                <LeftSideContainer>
                  <ProfileInfoSlot>
                    <ProfileInformation data={summonerData} />
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
                </RightSideContainer>

              </>}
          </MainSlot>
        </div>} */}

    </div>
  )
}

export default App
