import React, { useState } from 'react'
import NavigationBar from '../NavigationBar'
import { GetSummmoner } from '../../helpers/api.helper'
import { Graphic } from '../GraphicRatio'
import { GraphicContainer } from './styles'

function App () {
  const [getData, setGetData] = useState([])

  const handleOnChange = (getData) => {
    setGetData(getData)
  }
  let region
  let gameName
  if (getData[1] !== undefined) {
    region = getData[1].toLowerCase()
    gameName = getData[0]
  }
  const userInfo = GetSummmoner(region, gameName)
  console.log(userInfo)
  return (
    <div>
      <NavigationBar setGetData={handleOnChange} />
      Name{userInfo.name}
      <div>
        iconIdPrifle {userInfo.profileIconId}
      </div>
      Level{userInfo.summonerLevel}
      <div>
        id {userInfo.puuid}
      </div>
      <GraphicContainer>
        <Graphic />
      </GraphicContainer>

    </div>

  )
}

export default App
