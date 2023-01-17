import { render, screen } from '@testing-library/react'
import ProfileInformation from '..'

test('title is correct', () => {
  render(<ProfileInformation iconNumber={5295} username='GasKu' level={236} />)
  const title = screen.getByTestId('PI_Title').innerHTML
  expect(title).toBe('PROFILE INFO')
})

test('icon is correct', () => {
  render(<ProfileInformation iconNumber={5295} username='GasKu' level={236} />)
  const iconSrc = screen.getByTestId('PI_Icon').getAttribute('src')
  expect(iconSrc).toBe('http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/5295.png')
})

test('username is correct', () => {
  render(<ProfileInformation iconNumber={5295} username='GasKu' level={236} />)
  const username = screen.getByTestId('PI_Username').innerHTML
  expect(username).toBe('GasKu')
})

test('level text is correct', () => {
  render(<ProfileInformation iconNumber={5295} username='GasKu' level={236} />)
  const levelText = screen.getByTestId('PI_LevelText').innerHTML
  expect(levelText).toBe('Level')
})

test('level number is correct', () => {
  render(<ProfileInformation iconNumber={5295} username='GasKu' level={236} />)
  const levelNumber = screen.getByTestId('PI_LevelNumber').innerHTML
  expect(levelNumber).toBe('236')
})
