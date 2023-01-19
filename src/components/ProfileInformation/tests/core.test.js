import { render, screen } from '@testing-library/react'
import ProfileInformation from '..'
import ProfileInformationMockData from '../../../resources/DataSamples/ProfileInformation'

test('title is rendered', () => {
  render(<ProfileInformation data={ProfileInformationMockData} />)
  const title = screen.getByTestId('PI_Title').innerHTML
  expect(title).toBe('PROFILE INFO')
})

test('icon is correct', () => {
  render(<ProfileInformation data={ProfileInformationMockData} />)
  const iconSrc = screen.getByTestId('PI_Icon').getAttribute('src')
  expect(iconSrc).toBe(ProfileInformationMockData.iconSrc)
})

test('username is correct', () => {
  render(<ProfileInformation data={ProfileInformationMockData} />)
  const username = screen.getByTestId('PI_Username').innerHTML
  expect(username).toBe(ProfileInformationMockData.name)
})

test('level text is correct', () => {
  render(<ProfileInformation data={ProfileInformationMockData} />)
  const levelText = screen.getByTestId('PI_LevelText').innerHTML
  expect(levelText).toBe('Level')
})

test('level number is correct', () => {
  render(<ProfileInformation data={ProfileInformationMockData} />)
  const levelNumber = screen.getByTestId('PI_LevelNumber').innerHTML
  expect(levelNumber).toBe(ProfileInformationMockData.level.toString())
})
