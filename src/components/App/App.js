import { MainContainer } from './styles'
import { TestComponent } from '../TestComponent'
import ProfileInformation from '../ProfileInformation'
import PersonalRating from '../PersonalRating'
import FavouriteChampion from '../FavouriteChampion'
import RecentMatches from '../RecentMatches'

function App () {
  return (
    <>
      <RecentMatches />
      <ProfileInformation iconNumber={5295} username='GasKu' level={236} />
      <FavouriteChampion name='RekSai' />
      <PersonalRating />
    </>

  )
}

export default App
