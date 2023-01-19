import React from 'react'

const AverageStatsPlayer = ({ kills, deaths, assits }) => {
  return (
    <div>
      <div>{kills}</div>
      <div>{deaths}</div>
      <div>{assits}</div>
      <div>
        1.99
      </div>
    </div>
  )
}

export default AverageStatsPlayer
