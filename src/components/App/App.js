import React, { useState } from 'react'
import { HeaderContainer, Title, HeaderItem, MenuItem, ChampionCardContainer, ChampionCardRow, ChampionCardsGeneralContainer, Row } from './styles'
import ChampionCard from '../ChampionCard'
import { GetChampionList } from '../../helpers/api.helper'
import './styles.css'

function App() {
  let championList
  let arrayChamps
  let preparedArrayChamps
  const test = async () => {
    championList = GetChampionList()
    arrayChamps = Object.values(championList)
    // preparedArrayChamps = preparedArray(arrayChamps)
    return arrayChamps
  }

  // const preparedArray = (array) => {
  //   let row = []
  //   const preparedArray3 = []
  //   for (let i = 0; i < array.length; i++) {
  //     row.push(array[i])
  //     if ((i + 1) % 10 === 0) {
  //       preparedArray3.push(row)
  //       row = []
  //     }
  //     if (i === array.length - 1) {
  //       preparedArray3.push(row)
  //     }
  //   }
  //   return preparedArray3
  // }

  test()
  console.log(arrayChamps)
  console.log(preparedArrayChamps)
  const champ1 = {
    name: 'Aatrox',
    championSrc: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'
  }
  const champ2 = {
    name: 'Ahri',
    championSrc: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg'
  }
  const champ3 = {
    name: 'Akali',
    championSrc: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_0.jpg'
  }
  const champ4 = {
    name: 'Amumu',
    championSrc: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg'
  }
  const champ5 = {
    name: 'Blitzcrank',
    championSrc: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Blitzcrank_0.jpg'
  }
  const champ6 = {
    name: 'BelVeth',
    championSrc: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Belveth_0.jpg'
  }

  return (
    <div>
      <HeaderContainer>
        <HeaderItem>
          <MenuItem>CHAMPIONS</MenuItem>
        </HeaderItem>
        <HeaderItem>
          <Title>LOL TRACKER GG</Title>
        </HeaderItem>
        <HeaderItem>
          <MenuItem>ITEMS</MenuItem>
        </HeaderItem>
      </HeaderContainer>

      <ChampionCardsGeneralContainer>
        {arrayChamps.map((champ, i) => {
          console.log(champ)
          return (
            <ChampionCardContainer>
              <ChampionCard data={champ} />
            </ChampionCardContainer>)
        })}




      </ChampionCardsGeneralContainer>

    </div>
  )
}

export default App
