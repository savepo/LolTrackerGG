import React from 'react'
import { ProfileInformationContainer, ProfileInformationTitle, ProfileInformationIcon, ProfileInformationName, ProfileInformationLevelContainer, ProfileInformationLevelText, ProfileInformationLevelNumber } from './styles'

const ProfileInformation = ({ data }) => {
  let iconSource
  if (data !== undefined) {
    iconSource = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/' + data.profileIconId + '.png'
  } else {
    iconSource = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/1.png'
  }
  return (
    <ProfileInformationContainer>
      <ProfileInformationTitle data-testid='PI_Title'>PROFILE INFO</ProfileInformationTitle>
      <ProfileInformationIcon data-testid='PI_Icon' src={iconSource} />
      <ProfileInformationName data-testid='PI_Username'>{data.name}</ProfileInformationName>
      <ProfileInformationLevelContainer>
        <ProfileInformationLevelText data-testid='PI_LevelText'>Level</ProfileInformationLevelText>
        <ProfileInformationLevelNumber data-testid='PI_LevelNumber'>{data.summonerLevel}</ProfileInformationLevelNumber>
      </ProfileInformationLevelContainer>
    </ProfileInformationContainer>
  )
}

export default ProfileInformation
