import React from 'react'
import { RecentMatchesContainer, RecentMatchesTitleContainer, RecentMatchesTitle } from './styles'
import RecentMatchCard from './subComponents/RecentMatchCard'

const RecentMatches = ({ data }) => {
  return (
    <RecentMatchesContainer>
      <RecentMatchesTitleContainer>
        <RecentMatchesTitle>RECENT MATCHES</RecentMatchesTitle>
      </RecentMatchesTitleContainer>
      {data.map((element) => (
        <RecentMatchCard key={element.matchIden} data={element} />))}
    </RecentMatchesContainer>
  )
}

export default RecentMatches
