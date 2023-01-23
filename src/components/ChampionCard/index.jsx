import React from 'react'
import { GetChampionList } from '../../helpers/api.helper'
import { ChampionCardImage } from './styles'

const ChampionCard = ({ championId }) => {
  const championImageSrc = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + championId + '_0.jpg'
  return (
    <ChampionCardImage src={championImageSrc} />
  )
}

export default ChampionCard
