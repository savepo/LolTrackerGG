import React, { useState } from 'react'

import PersonalRatingMenuItem from './subComponents/PersonalRatingMenuItem'

import { PersonalRatingContainer, PersonalRatingTitle, PersonalRatingMenu, PersonalRatingStatsContainer, PersonalRatingInformationContainer, PersonalRatingLabel, PersonalRatingImageContainer, PersonalRatingRankPicture } from './styles'

const PersonalRating = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState('Ranked Solo')
  const handleTabClick = (tab) => {
    setSelectedTab(tab)
    console.log(tab)
  }

  const getTierImage = (tier) => {
    let source
    switch (tier) {
      case 'IRON':
        source = '/rankingImages/Emblem_Iron.png'
        break

      case 'BRONZE':
        source = '/rankingImages/Emblem_Bronze.png'
        break

      case 'SILVER':
        source = '/rankingImages/Emblem_Silver.png'
        break

      case 'GOLD':
        source = '/rankingImages/Emblem_Gold.png'
        break

      case 'PLATINUM':
        source = '/rankingImages/Emblem_Platinum.png'
        break

      case 'DIAMOND':
        source = '/rankingImages/Emblem_Diamond.png'
        break

      case 'MASTER':
        source = '/rankingImages/Emblem_Master.png'
        break

      case 'GRANDMASTER':
        source = '/rankingImages/Emblem_Grandmaster.png'
        break

      case 'CHALLENGER':
        source = '/rankingImages/Emblem_Challenger.png'
        break

      default:
        source = '/rankingImages/Emblem_Unranked.png'
        break
    }
    return source
  }
  //   const [selectedItem, setSelectedItem] = useState(true)
  return (
    <PersonalRatingContainer>
      <PersonalRatingTitle>PERSONAL RATING</PersonalRatingTitle>
      <PersonalRatingMenu>
        <PersonalRatingMenuItem id={1} text='Ranked Solo' isSelected={selectedTab === 'Ranked Solo'} onChange={() => handleTabClick('Ranked Solo')} />
        <PersonalRatingMenuItem id={2} text='Ranked Flex' isSelected={selectedTab === 'Ranked Flex'} onChange={() => handleTabClick('Ranked Flex')} />
      </PersonalRatingMenu>
      <PersonalRatingStatsContainer>
        <PersonalRatingInformationContainer>
          <PersonalRatingLabel>{selectedTab === 'Ranked Solo' ? data.RankedSolo.tier : data.RankedFlex.tier} {selectedTab === 'Ranked Solo' ? data.RankedSolo.rank : data.RankedFlex.rank}</PersonalRatingLabel>
          <PersonalRatingLabel>{selectedTab === 'Ranked Solo' ? data.RankedSolo.leaguePoints : data.RankedFlex.leaguePoints} LP</PersonalRatingLabel>
          <PersonalRatingLabel>{selectedTab === 'Ranked Solo' ? data.RankedSolo.wins : data.RankedFlex.wins}W {selectedTab === 'Ranked Solo' ? data.RankedSolo.losses : data.RankedFlex.losses}L</PersonalRatingLabel>
        </PersonalRatingInformationContainer>
        <PersonalRatingInformationContainer>
          <PersonalRatingImageContainer>
            <PersonalRatingRankPicture src={selectedTab === 'Ranked Solo' ? getTierImage(data.RankedSolo.tier) : getTierImage(data.RankedFlex.tier)} />
          </PersonalRatingImageContainer>
        </PersonalRatingInformationContainer>
      </PersonalRatingStatsContainer>
    </PersonalRatingContainer>
  )
}

export default PersonalRating
