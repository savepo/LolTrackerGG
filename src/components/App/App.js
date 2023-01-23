import React, { useState } from 'react'
import { HeaderContainer, Title, HeaderItem, MenuItem } from './styles'
import ChampionCard from '../ChampionCard'
import './styles.css'

function App () {
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
      <ChampionCard championId='Aatrox' />
    </div>
  )
}

export default App
