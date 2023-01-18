import React, { useState } from 'react'
import { ContainerInputGameName, TitleGameName, BoxInputGameName } from './styles'

const InputGameName = ({ onChange }) => {
  const [gameName, setGameName] = useState('')

  const handleChange = (e) => {
    setGameName(e.target.value)
    onChange(e.target.value)
  }

  return (
    <ContainerInputGameName>
      <div>
        <TitleGameName>GameName</TitleGameName>
        <BoxInputGameName
          type='text'
          placeholder='Enter gameName...'
          value={gameName}
          onChange={handleChange}
        />
      </div>
    </ContainerInputGameName>
  )
}

export default InputGameName
