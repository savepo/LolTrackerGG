import React, { useState } from 'react'
import { DropdownContainer, DropdownInput, DropdownMenuOptions, DropdownnMenuItem, DropdownDisplayer, DropdownTools, DropdownIcon } from './styles'
import iconDropdown from './img/iconDropdown.svg'

const DropdownSelect = ({ placeholder, options = [] }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleClickDropdown = () => setOpenMenu(!openMenu)

  const getDisplay = () => {
    return placeholder
  }
  // TODO input the icon
  return (
    <DropdownContainer className='dropdownContainer'>
      <DropdownInput onClick={handleClickDropdown} className='dropdownInput'>
        <DropdownDisplayer className='dropdownDisplayer'>{getDisplay()}</DropdownDisplayer>
        <DropdownTools className='dropdownTools'>
          <DropdownIcon className='dropdownIcon'>
            <img src={iconDropdown} alt='icon-dropdown-selects' />
          </DropdownIcon>
        </DropdownTools>
      </DropdownInput>
      {openMenu && (
        <DropdownMenuOptions className='dropdownMenuOptions'>
          {options.map((element) => (
            <DropdownnMenuItem className='dropdownMenuItem' key={element.label}>{element.value}</DropdownnMenuItem>
          ))}
        </DropdownMenuOptions>)}
    </DropdownContainer>
  )
}

export default DropdownSelect
