import { GetSumoner } from '../../helpers/api.helper'
const testApi = () => {
  return GetSumoner('euw1', 'DinoKlk')
}

const pintaDatos = () => {
  return (
    <div>
      {testApi()}
    </div>
  )
}

export default pintaDatos
