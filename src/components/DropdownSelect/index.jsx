import React from 'react'
import { DropdownContainer, DropdownInput } from './styles'

const DropdownSelect = ({ placeholder, options = [] }) => {
  const getDisplay = () => {
    return placeholder
  }
  // TODO input the icon
  return (
    <DropdownContainer className='dropdownContainer'>
      <DropdownInput className='dropdownInput'>
        <div className='dropdownDisplayer'>{getDisplay()}</div>
        <div className='dropdownTools'>
          <div className='dropdownIcon' />
        </div>
      </DropdownInput>
      <div className='dropdownMenuOptions'>
        {options.map((element) => (
          <div key={element.label}>{element.value}</div>
        ))}
      </div>
    </DropdownContainer>
  )
}

export default DropdownSelect
