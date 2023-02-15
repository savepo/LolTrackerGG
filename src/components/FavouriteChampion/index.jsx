import React, { useState, useEffect } from 'react'
import { getFavouriteChampion } from '../../helpers/api.helper'
import LoadingSpinner from '../LoadingSpinner'
import { FavouriteChampionContainer, FavouriteChampionInformationContainer, FavouriteChampionTitle, FavouriteChampionNameContainer, FavouriteChampionPictureContainer, FavouriteChampionName, FavouriteChampionPicture, SpinnerSlot } from './styles'
import useFetchData from '../../hook/useFetchData'

const FavouriteChampion = ({ summonerId, region }) => {
  const [isLoading, favouriteChampionData, error] = useFetchData(summonerId, region, getFavouriteChampion)

  return (
    <FavouriteChampionContainer>
      {isLoading ? <SpinnerSlot><LoadingSpinner /></SpinnerSlot> : <></>}

      {favouriteChampionData !== null
        ? <>
          <FavouriteChampionTitle data-testid='FC_Title'>FAVOURITE CHAMPION</FavouriteChampionTitle>
          <FavouriteChampionInformationContainer>
            <FavouriteChampionNameContainer>
              <FavouriteChampionName data-testid='FC_Name'>{favouriteChampionData.name}</FavouriteChampionName>
            </FavouriteChampionNameContainer>
            <FavouriteChampionPictureContainer>
              <FavouriteChampionPicture data-testid='FC_ChampImage' src={favouriteChampionData.championSrc} />
            </FavouriteChampionPictureContainer>
          </FavouriteChampionInformationContainer>
          </>
        : <></>}

    </FavouriteChampionContainer>
  )
}

export default FavouriteChampion
