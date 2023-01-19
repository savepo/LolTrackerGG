import React from 'react'
import { MainContainer } from './styles'
// import NavigationBar from '../NavigationBar'
// import { GetSummmoner } from '../../helpers/api.helper'
// import PlayerAverageCard from '../PlayerAverageCard'
import ProfileInformation from '../ProfileInformation'
// import PersonalRating from '../PersonalRating'
// import FavouriteChampion from '../FavouriteChampion'
// import RecentMatches from '../RecentMatches'
import ProfileInformationMockData from '../../resources/DataSamples/ProfileInformation'
// import FavouriteChampionMockData from '../../resources/DataSamples/FavouriteChampion'
// import PersonalRatingMockData from '../../resources/DataSamples/PersonalRating'
// import RecentMatchesMockData from '../../resources/DataSamples/RecentMatches'

const DataDisplayer = ({ bigData = null }) => {
  return <>{bigData === null ? <MainContainer /> : <MainContainer><ProfileInformation data={bigData} /></MainContainer>}</>
}

export default DataDisplayer
