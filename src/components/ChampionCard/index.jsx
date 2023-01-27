import React from 'react'
import { GetChampionList } from '../../helpers/api.helper'
import { ChampionCardImage, Card, Card2 } from './styles'

const ChampionCard = ({ data }) => {
  const source = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`
  return (
    <Card>
      <Card2>
        <ChampionCardImage src={source} />
      </Card2>
    </Card>

  )
}

export default ChampionCard
