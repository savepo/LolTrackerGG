import React from 'react'
import { ProfileInformationContainer, ProfileInformationTitle, ProfileInformationIcon, ProfileInformationName, ProfileInformationLevelContainer, ProfileInformationLevelText, ProfileInformationLevelNumber } from './styles'

const ProfileInformation = ({ iconNumber, username, level }) => {
  const iconSrc = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/' + iconNumber + '.png'
  return (
    <ProfileInformationContainer>
      <ProfileInformationTitle data-testid='PI_Title'>PROFILE INFO</ProfileInformationTitle>
      <ProfileInformationIcon data-testid='PI_Icon' src={iconSrc} />
      <ProfileInformationName data-testid='PI_Username'>{username}</ProfileInformationName>
      <ProfileInformationLevelContainer>
        <ProfileInformationLevelText data-testid='PI_LevelText'>Level</ProfileInformationLevelText>
        <ProfileInformationLevelNumber data-testid='PI_LevelNumber'>{level}</ProfileInformationLevelNumber>
      </ProfileInformationLevelContainer>
    </ProfileInformationContainer>
  )
}

export default ProfileInformation
