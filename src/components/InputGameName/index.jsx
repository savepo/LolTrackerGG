import React, { useState } from 'react'
import iconSearch from './img/iconSearch.svg'
import { ContainerInputGameName, TitleGameName, BoxInputGameName, ContainerIcon, Icon } from './styles'

const InputGameName = () => {
  const [gameName, setGameName] = useState('')
  const [getGameName, setGetGameName] = useState(gameName)

  const handleButtonClick = () => {
    setGetGameName(gameName)
  }
  getGameNameUser(getGameName)
  return (
    <ContainerInputGameName>
      <div>
        <TitleGameName>GameName</TitleGameName>
        <BoxInputGameName
          type='text'
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
      </div>
      <ContainerIcon onClick={handleButtonClick}>
        <Icon src={iconSearch} alt='icon-search' />
      </ContainerIcon>
    </ContainerInputGameName>
  )
}
export const getGameNameUser = (getGameName) => {
  return getGameName
}

export default InputGameName
