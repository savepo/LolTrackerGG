import { render, screen } from '@testing-library/react'
import FavouriteChampion from '..'
import FavouriteChampionMockData from '../../../resources/DataSamples/FavouriteChampion'

test('title is rendered', () => {
  render(<FavouriteChampion data={FavouriteChampionMockData} />)
  const title = screen.getByTestId('FC_Title').innerHTML
  expect(title).toBe('FAVOURITE CHAMPION')
})

test('champ name is correct', () => {
  render(<FavouriteChampion data={FavouriteChampionMockData} />)
  const title = screen.getByTestId('FC_Name').innerHTML
  expect(title).toBe(FavouriteChampionMockData.name)
})

test('champ image is correct', () => {
  render(<FavouriteChampion data={FavouriteChampionMockData} />)
  const title = screen.getByTestId('FC_ChampImage').getAttribute('src')
  expect(title).toBe(FavouriteChampionMockData.championSrc)
})
