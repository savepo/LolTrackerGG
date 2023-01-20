import React from 'react'
import { AverageStatsContainer, Kills, Deaths, Assists, AverageStats } from './styles'

const AverageStatsPlayer = ({ kills, deaths, assits }) => {
  return (
    <AverageStatsContainer>
      <Kills>{kills}/</Kills>
      <Deaths>{deaths}/</Deaths>
      <Assists>{assits}</Assists>
      <AverageStats>{1.99}</AverageStats>
    </AverageStatsContainer>
  )
}

export default AverageStatsPlayer
