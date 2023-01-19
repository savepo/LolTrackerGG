import React from 'react'
import { RecentMatchCardContainer, RecentMatchCardPictureContainer, RecentMatchCardPicture } from './styles'

// Navitem Component
const RecentMatchCard = ({ text = 'Default Text', isSelected = false, onChange = null }) => {
  // Returns the component
  return (
    <RecentMatchCardContainer>
      <RecentMatchCardPictureContainer>
        <RecentMatchCardPicture src='http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/Ashe.png' />
      </RecentMatchCardPictureContainer>
    </RecentMatchCardContainer>
  )
}
export default RecentMatchCard
