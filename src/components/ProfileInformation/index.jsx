import React from 'react'
import { getSummonerData } from '../../helpers/api.helper'
import LoadingSpinner from '../LoadingSpinner'
import useFetchData from '../../hook/useFetchData'
import { ProfileInformationContainer, ProfileInformationTitle, ProfileInformationIcon, ProfileInformationName, ProfileInformationLevelContainer, ProfileInformationLevelText, ProfileInformationLevelNumber, SpinnerSlot } from './styles'

const ProfileInformation = ({ gameName, region, onData }) => {
  const [isLoading, summonerData, error] = useFetchData(gameName, getSummonerData(region, gameName))

  if (summonerData !== null) {
    onData(summonerData)
  }

  let iconSource
  if (summonerData !== null) {
    iconSource = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/' + summonerData.profileIconId + '.png'
  } else {
    iconSource = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/1.png'
  }
  return (
    <ProfileInformationContainer>
      {isLoading ? <SpinnerSlot><LoadingSpinner /></SpinnerSlot> : <></>}

      {summonerData !== null
        ? <>
          <ProfileInformationTitle data-testid='PI_Title'>PROFILE INFO</ProfileInformationTitle>
          <ProfileInformationIcon data-testid='PI_Icon' src={iconSource} />
          <ProfileInformationName data-testid='PI_Username'>{summonerData.name}</ProfileInformationName>
          <ProfileInformationLevelContainer>
            <ProfileInformationLevelText data-testid='PI_LevelText'>Level</ProfileInformationLevelText>
            <ProfileInformationLevelNumber data-testid='PI_LevelNumber'>{summonerData.summonerLevel}</ProfileInformationLevelNumber>
          </ProfileInformationLevelContainer>
          </>
        : <div />}
    </ProfileInformationContainer>
  )
}

export default ProfileInformation
