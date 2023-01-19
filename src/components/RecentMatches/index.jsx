import React from 'react'
import { RecentMatchesContainer, RecentMatchesTitleContainer, RecentMatchesTitle } from './styles'
import RecentMatchCard from './subComponents/RecentMatchCard'
const RecentMatches = ({ data }) => {
  return (
    <RecentMatchesContainer>
      <RecentMatchesTitleContainer>
        <RecentMatchesTitle>RECENT MATCHES</RecentMatchesTitle>
      </RecentMatchesTitleContainer>
      <RecentMatchCard data={data} />
      <RecentMatchCard data={data} />
    </RecentMatchesContainer>
  )
}

export default RecentMatches
