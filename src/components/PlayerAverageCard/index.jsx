import React from 'react'
import Graphic from '../GraphicRatio'
import AverageStatsPlayer from '../AverageStatsPlayer'
import { CardStats } from './styles'

const PlayerAverageCard = () => {
  return (
    <CardStats>
      <Graphic />
      <AverageStatsPlayer />
    </CardStats>
  )
}

export default PlayerAverageCard
