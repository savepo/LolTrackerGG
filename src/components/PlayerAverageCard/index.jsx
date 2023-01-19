import React from 'react'
import Graphic from '../GraphicRatio'
import AverageStatsPlayer from '../AverageStatsPlayer'
import { CardStats } from './styles'
import ChampionCardRecentPlayed from '../CardChampionRecentPlayed'
import { ChampionCardRecentMockData as dataChampion } from '../../resources/DataSamples/ChampionCardRecentPlayed'

const PlayerAverageCard = ({ dataTotalMatches }) => {
  return (
    <CardStats>
      <Graphic />
      <AverageStatsPlayer kills={7.8} deaths={7.7} assits={7.5} />
      <ChampionCardRecentPlayed championIcon={dataChampion.championSrc} rate={dataChampion.rate} wins={dataChampion.win} loses={dataChampion.loses} kda={dataChampion.kda} />
    </CardStats>
  )
}

export default PlayerAverageCard
