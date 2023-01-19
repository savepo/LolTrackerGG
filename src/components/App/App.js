import ProfileInformation from '../ProfileInformation'
import PersonalRating from '../PersonalRating'
import FavouriteChampion from '../FavouriteChampion'
import RecentMatches from '../RecentMatches'
import ProfileInformationMockData from '../../resources/DataSamples/ProfileInformation'
import FavouriteChampionMockData from '../../resources/DataSamples/FavouriteChampion'
import PersonalRatingMockData from '../../resources/DataSamples/PersonalRating'
import RecentMatchesMockData from '../../resources/DataSamples/RecentMatches'

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
    <>
      <RecentMatches data={RecentMatchesMockData} />
      <ProfileInformation data={ProfileInformationMockData} />
      <FavouriteChampion data={FavouriteChampionMockData} />
      <PersonalRating data={PersonalRatingMockData} />
    </>

  )
}

export default App
