import React from 'react'
import { FavouriteChampionContainer, FavouriteChampionInformationContainer, FavouriteChampionTitle, FavouriteChampionNameContainer, FavouriteChampionPictureContainer, FavouriteChampionName, FavouriteChampionPicture } from './styles'

const FavouriteChampion = ({ data }) => {
  return (
    <FavouriteChampionContainer>
      <FavouriteChampionTitle data-testid='FC_Title'>FAVOURITE CHAMPION</FavouriteChampionTitle>
      <FavouriteChampionInformationContainer>
        <FavouriteChampionNameContainer>
          <FavouriteChampionName data-testid='FC_Name'>{data.name}</FavouriteChampionName>
        </FavouriteChampionNameContainer>
        <FavouriteChampionPictureContainer>
          <FavouriteChampionPicture data-testid='FC_ChampImage' src={data.championSrc} />
        </FavouriteChampionPictureContainer>
      </FavouriteChampionInformationContainer>

    </FavouriteChampionContainer>
  )
}

export default FavouriteChampion
