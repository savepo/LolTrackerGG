
import React from 'react'
import { ContainerNavitem, IsSelected, IsNotSelected } from './styles.js'

// Navitem Component
const PersonalRatingMenuItem = ({ text = 'Default Text', isSelected = false, onChange = null }) => {
  // Function that changes the class of the clicked <NavItem /> to selected
  const select = (e) => {
    if (onChange !== null) {
      onChange(e)
    }
    isSelected = true
  }
  // Returns the component
  return (
    <ContainerNavitem onClick={event => { select(event) }}>
      {isSelected === true
        ? <IsSelected>{text}</IsSelected>
        : <IsNotSelected>{text}</IsNotSelected>}
    </ContainerNavitem>
  )
}
export default PersonalRatingMenuItem
