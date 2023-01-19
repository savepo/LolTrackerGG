import ProfileInformation from '../ProfileInformation'
import PersonalRating from '../PersonalRating'
import FavouriteChampion from '../FavouriteChampion'
import RecentMatches from '../RecentMatches'
import ProfileInformationMockData from '../../resources/DataSamples/ProfileInformation'
import FavouriteChampionMockData from '../../resources/DataSamples/FavouriteChampion'
import PersonalRatingMockData from '../../resources/DataSamples/PersonalRating'
import RecentMatchesMockData from '../../resources/DataSamples/RecentMatches'

function App () {
  return (
    <>
      <RecentMatches data={RecentMatchesMockData} />
      <ProfileInformation data={ProfileInformationMockData} />
      <FavouriteChampion data={FavouriteChampionMockData} />
      <PersonalRating data={PersonalRatingMockData} />
    </>

  )
}

export default App
