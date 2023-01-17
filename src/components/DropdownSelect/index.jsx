import React, { useEffect, useState } from 'react'
import { DropdownContainer, DropdownInput, DropdownMenuOptions, DropdownnMenuItem, DropdownDisplayer, DropdownTools, DropdownIcon, DropdownTitle } from './styles'
import iconDropdown from './img/iconDropdown.svg'
import { GetSumoner } from '../../helpers/api.helper'

const DropdownSelect = ({ placeholder, options = [] }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  useEffect(() => {
    const handleClickDropdown = () => setIsOpenMenu()
    window.addEventListener('click', handleClickDropdown)
    return () => {
      window.removeEventListener('click', handleClickDropdown)
    }
  })
  const hanldeInputClick = (e) => {
    e.stopPropagation()
    setIsOpenMenu(!isOpenMenu)
  }

  const [selectedValue, setSelectedValue] = useState(null)

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label
    }
    return placeholder
  }

  const optionSelected = (option) => {
    setSelectedValue(option)
  }

  /* const isOptionSelected = (option) => {
    if (!selectedValue) {
      return false
    }
    return selectedValue.value === option.value
  } */
  return (
    <DropdownContainer className='dropdownContainer'>
      <DropdownTitle>Region</DropdownTitle>
      <DropdownInput onClick={hanldeInputClick} className='dropdownInput'>
        <DropdownDisplayer className='dropdownDisplayer'>{getDisplay()}</DropdownDisplayer>
        <DropdownTools className='dropdownTools'>
          <DropdownIcon className='dropdownIcon'>
            <img src={iconDropdown} alt='icon-dropdown-selects' />
          </DropdownIcon>
        </DropdownTools>
      </DropdownInput>
      {isOpenMenu && (
        <DropdownMenuOptions className='dropdownMenuOptions'>
          {options.map((element) => (
            <DropdownnMenuItem
              onClick={() => optionSelected(element)}
              className='dropdownMenuItem'
              key={element.value}
            >
              {element.label}
            </DropdownnMenuItem>
          ))}
        </DropdownMenuOptions>)}
    </DropdownContainer>
  )
}

export default DropdownSelect
