import React from 'react'
import { CardChampionContainer, IconChampion, RateChampion, WinsLosesChampion, KdaChampion } from './styles'

const ChampionCardRecentPlayed = ({ championIcon, rate, wins, loses, kda }) => {
  return (
    <CardChampionContainer>
      <IconChampion src={championIcon} alt='iconChampion' />
      <RateChampion>{rate}</RateChampion>
      <WinsLosesChampion>({wins}W {loses}L)</WinsLosesChampion>
      <KdaChampion>{kda} KDA</KdaChampion>
    </CardChampionContainer>
  )
}

export default ChampionCardRecentPlayed
