import React from 'react'
import DropdownSelect from '../DropdownSelect'
import InputGameName from '../InputGameName'
import { NavigationBarContainer } from './styles'

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
  return (
    <NavigationBarContainer>
      <DropdownSelect placeholder={regions[2].label} options={regions} />
      <InputGameName />
    </NavigationBarContainer>
  )
}

export default NavigationBar
