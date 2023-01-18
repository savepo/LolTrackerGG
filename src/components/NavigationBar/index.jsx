import React, { useState } from 'react'
import DropdownSelect from '../DropdownSelect'
import InputGameName from '../InputGameName'
import { NavigationBarContainer, ContainerIcon, Icon } from './styles'
import searchIcon from './img/searchIcon.svg'

const NavigationBar = () => {
  const regions = [
    { value: 'BR1', label: 'Brazil' },
    { value: 'EUN1', label: 'Europe Nordic & East' },
    { value: 'EUW1', label: 'Europe West' },
    { value: 'JP1', label: 'Japan' },
    { value: 'KR', label: 'Korea' },
    { value: 'LA1', label: 'Latin America North' },
    { value: 'LA2', label: 'Latin America South' },
    { value: 'NA1', label: 'North America' },
    { value: 'OC1', label: 'Oceania' },
    { value: 'PH2', label: 'The Philippines' },
    { value: 'RU1', label: 'Russia' },
    { value: 'SG2', label: 'Singapore, Malaysia & Indonesia' },
    { value: 'TH2', label: 'Thailand' },
    { value: 'TR1', label: 'Turkey' },
    { value: 'TW2', label: 'Taiwan, Hong Kong and Macao' },
    { value: 'VN2', label: 'Vietnam' }
  ]
  const [dataReceived, setDataReceived] = useState('')
  const [selectedValue, setSelectedValue] = useState(regions[2].label)
  const [getData, setGetData] = useState([dataReceived, selectedValue])

  const handleInputGameName = (dataReceived) => {
    setDataReceived(dataReceived)
  }
  const handleSelectedChange = (selectedValue) => {
    setSelectedValue(selectedValue)
  }
  const handleClick = () => {
    setGetData([dataReceived, selectedValue])
  }
  return (
    <div>
      <NavigationBarContainer>
        <DropdownSelect placeholder={regions[2].label} options={regions} onChange={handleSelectedChange} />
        <InputGameName onChange={handleInputGameName} />
        <ContainerIcon onClick={handleClick}>
          <Icon src={searchIcon} alt='icon-search' />
        </ContainerIcon>
        <h1>{getData[0] + ' ' + getData[1]}</h1>
      </NavigationBarContainer>
    </div>

  )
}

export default NavigationBar
