import React, { useState, useEffect } from 'react'
import PersonalRatingMenuItem from './subComponents/PersonalRatingMenuItem'
import { getRankedLevel } from '../../helpers/api.helper'
import LoadingSpinner from '../LoadingSpinner'
import useFetchData from '../../hook/useFetchData'

import { PersonalRatingContainer, PersonalRatingTitle, PersonalRatingMenu, PersonalRatingStatsContainer, PersonalRatingInformationContainer, PersonalRatingLabel, PersonalRatingImageContainer, PersonalRatingRankPicture, SpinnerSlot } from './styles'

const PersonalRating = ({ summonerId, region }) => {
  const [isLoading, rankedLevelData, error] = useFetchData(summonerId, region, getRankedLevel)

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
      {isLoading ? <SpinnerSlot><LoadingSpinner /></SpinnerSlot> : <></>}

      {rankedLevelData !== null
        ? <>
          <PersonalRatingTitle>PERSONAL RATING</PersonalRatingTitle>
          <PersonalRatingMenu>
            <PersonalRatingMenuItem id={1} text='Ranked Solo' isSelected={selectedTab === 'Ranked Solo'} onChange={() => handleTabClick('Ranked Solo')} />
            <PersonalRatingMenuItem id={2} text='Ranked Flex' isSelected={selectedTab === 'Ranked Flex'} onChange={() => handleTabClick('Ranked Flex')} />
          </PersonalRatingMenu>
          <PersonalRatingStatsContainer>
            <PersonalRatingInformationContainer>
              <PersonalRatingLabel>{selectedTab === 'Ranked Solo' ? rankedLevelData.RankedSolo.tier : rankedLevelData.RankedFlex.tier} {selectedTab === 'Ranked Solo' ? rankedLevelData.RankedSolo.rank : rankedLevelData.RankedFlex.rank}</PersonalRatingLabel>
              <PersonalRatingLabel>{selectedTab === 'Ranked Solo' ? rankedLevelData.RankedSolo.leaguePoints : rankedLevelData.RankedFlex.leaguePoints} LP</PersonalRatingLabel>
              <PersonalRatingLabel>{selectedTab === 'Ranked Solo' ? rankedLevelData.RankedSolo.wins : rankedLevelData.RankedFlex.wins}W {selectedTab === 'Ranked Solo' ? rankedLevelData.RankedSolo.losses : rankedLevelData.RankedFlex.losses}L</PersonalRatingLabel>
            </PersonalRatingInformationContainer>
            <PersonalRatingInformationContainer>
              <PersonalRatingImageContainer>
                <PersonalRatingRankPicture src={selectedTab === 'Ranked Solo' ? getTierImage(rankedLevelData.RankedSolo.tier) : getTierImage(rankedLevelData.RankedFlex.tier)} />
              </PersonalRatingImageContainer>
            </PersonalRatingInformationContainer>
          </PersonalRatingStatsContainer>
          </>
        : <></>}
    </PersonalRatingContainer>
  )
}

export default PersonalRating
