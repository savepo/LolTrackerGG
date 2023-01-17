import './App.css'
import { TestComponent } from '../TestComponent'
import ProfileInformation from '../ProfileInformation'
import PersonalRating from '../PersonalRating'

function App () {
  return (
    <>
      <ProfileInformation iconNumber={5295} username='GasKu' level={236} />
      <PersonalRating />
    </>

  )
}

export default App
