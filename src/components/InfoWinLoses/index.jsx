import React from 'react'
import { InfoWinLosesContainer, TotalMatches, WinMatches, LosesMatches } from './styles'

const InfoWinLosesMatches = ({ numWinMatches, numLosesMatches, totalastMatches }) => {
  return (
    <InfoWinLosesContainer>
      <TotalMatches>{totalastMatches}G</TotalMatches>
      <WinMatches>{numWinMatches}W</WinMatches>
      <LosesMatches>{numLosesMatches}L</LosesMatches>
    </InfoWinLosesContainer>
  )
}

export default InfoWinLosesMatches
