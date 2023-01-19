import React from 'react'
import { RecentMatchesContainer, RecentMatchesTitleContainer, RecentMatchesTitle } from './styles'
import RecentMatchCard from './subComponents/RecentMatchCard'
const RecentMatches = () => {
  return (
    <RecentMatchesContainer>
      <RecentMatchesTitleContainer>
        <RecentMatchesTitle>RECENT MATCHES</RecentMatchesTitle>
      </RecentMatchesTitleContainer>
      <RecentMatchCard />
    </RecentMatchesContainer>
  )
}

export default RecentMatches
