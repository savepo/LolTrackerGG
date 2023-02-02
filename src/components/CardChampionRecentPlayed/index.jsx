import React from 'react'
import { CardChampionContainer, IconChampion, RateChampion, WinsLosesChampion, KdaChampion, WinCharacter, LoseCharacter } from './styles'

const ChampionCardRecentPlayed = ({ championIcon, rate, wins, loses, kda }) => {
  return (
    <CardChampionContainer>
      <IconChampion src={championIcon} alt='iconChampion' />
      <RateChampion>{rate}</RateChampion>
      <WinsLosesChampion>{wins}<WinCharacter>W</WinCharacter>{loses}<LoseCharacter>L</LoseCharacter></WinsLosesChampion>
      <KdaChampion>{kda} KDA</KdaChampion>
    </CardChampionContainer>
  )
}

export default ChampionCardRecentPlayed
