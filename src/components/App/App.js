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

  // // Use Effect to get the basic data of a user
  // useEffect(() => {
  //   if (inputData[0] !== null & inputData[1] !== null) {
  //     // Set Loader
  //     setIsLoading(true)
  //     // Set summoner data
  //     getSummonerData(inputData[1], inputData[0])
  //       .then(data => {
  //         setSummonerData(data)
  //       })
  //       .catch(error => {
  //         setError(error)
  //         // Unset Loader
  //         setIsLoading(false)
  //       })
  //   }
  // }, [inputData])

  const handleOnChange = async (data) => {
    // Save input data in the state
    if (data[0] !== '') {
      setInputData(data)
    } else {
      // Would be nice to advice the user that he is trying to search an empty input.

    }
  }

  const handleSummonerData = (data) => {
    // Almacenar los datos en el estado del componente padre
    setSummonerData(data)
  }

  return (
    <div>
      <TitleContainer>
        <Title>LOL TRACKER GG</Title>
      </TitleContainer>
      <NavigationBar setGetData={handleOnChange} />
      <MainSlot>

        <>
          <LeftSideContainer>
            <ProfileInfoSlot>
              {inputData[0] !== null && inputData[1] !== null ? <ProfileInformation gameName={inputData[0]} region={inputData[1]} onData={handleSummonerData} /> : <></>}
            </ProfileInfoSlot>
          </LeftSideContainer>

          <RightSideContainer>
            <RowContainer>
              <PersonalRatingSlot>
                {summonerData !== null ? <PersonalRating summonerId={summonerData.id} region={inputData[1]} /> : <></>}
              </PersonalRatingSlot>

              <FavouriteChampionSlot>
                {summonerData !== null ? <FavouriteChampion summonerId={summonerData.id} region={inputData[1]} /> : <></>}
              </FavouriteChampionSlot>
            </RowContainer>

            {/* <RowContainer>
              <GraphicSlot>
                <PlayerAverageCard data={playerAvarageCardData} />
              </GraphicSlot>
            </RowContainer>
            <RowContainer>
              <RecentMatchesSlot>
                <RecentMatches data={recentMatches} />
              </RecentMatchesSlot>
            </RowContainer> */}
          </RightSideContainer>
        </>

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
