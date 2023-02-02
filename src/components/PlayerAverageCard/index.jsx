import React, { useState } from 'react'
import Graphic from '../GraphicRatio'
import AverageStatsPlayer from '../AverageStatsPlayer'
import { CardStats } from './styles'
import ChampionCardRecentPlayed from '../CardChampionRecentPlayed'
import { ChampionCardRecentMockData as dataChampion } from '../../resources/DataSamples/ChampionCardRecentPlayed'

const PlayerAverageCard = ({ data }) => {
  console.log(data)
  return (
    <CardStats>
      {data === undefined ? <div /> : <Graphic graphicData={data.graphic} />}
      <AverageStatsPlayer kills={data.avarageKills} deaths={data.avarageDeaths} assits={data.avarageAssists} />
      <ChampionCardRecentPlayed championIcon={data.championSrc} rate={data.rate} wins={data.wins} loses={data.loses} kda={data.kda} />
    </CardStats>
  )
}

export default PlayerAverageCard
