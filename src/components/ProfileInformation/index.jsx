import React from 'react'
import { ProfileInformationContainer, ProfileInformationTitle, ProfileInformationIcon, ProfileInformationName, ProfileInformationLevelContainer, ProfileInformationLevelText, ProfileInformationLevelNumber } from './styles'

const ProfileInformation = ({ data }) => {
  return (
    <ProfileInformationContainer>
      <ProfileInformationTitle data-testid='PI_Title'>PROFILE INFO</ProfileInformationTitle>
      <ProfileInformationIcon data-testid='PI_Icon' src={data.iconSrc} />
      <ProfileInformationName data-testid='PI_Username'>{data.name}</ProfileInformationName>
      <ProfileInformationLevelContainer>
        <ProfileInformationLevelText data-testid='PI_LevelText'>Level</ProfileInformationLevelText>
        <ProfileInformationLevelNumber data-testid='PI_LevelNumber'>{data.level}</ProfileInformationLevelNumber>
      </ProfileInformationLevelContainer>
    </ProfileInformationContainer>
  )
}

export default ProfileInformation
