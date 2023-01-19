import React from 'react'
import { FavouriteChampionContainer, FavouriteChampionInformationContainer, FavouriteChampionTitle, FavouriteChampionNameContainer, FavouriteChampionPictureContainer, FavouriteChampionName, FavouriteChampionPicture } from './styles'

const FavouriteChampion = ({ name = 'Aatrox' }) => {
  const champSplashSrc = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + name + '_0.jpg'
  return (
    <FavouriteChampionContainer>
      <FavouriteChampionTitle>FAVOURITE CHAMPION</FavouriteChampionTitle>
      <FavouriteChampionInformationContainer>
        <FavouriteChampionNameContainer>
          <FavouriteChampionName>{name}</FavouriteChampionName>
        </FavouriteChampionNameContainer>
        <FavouriteChampionPictureContainer>
          <FavouriteChampionPicture src={champSplashSrc} />
        </FavouriteChampionPictureContainer>
      </FavouriteChampionInformationContainer>

    </FavouriteChampionContainer>
  )
}

export default FavouriteChampion
