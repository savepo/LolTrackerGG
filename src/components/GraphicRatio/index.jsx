import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)
const centerText = 'HOLA'
const win = 60
const loses = 40
export const data = {
  labels: ['Win', 'Loses'],
  datasets: [
    {
      label: 'Percentage ratio',
      data: [win, loses],
      backgroundColor: [
        'rgba(99, 126, 223, 1)',
        ' rgba(229, 87, 87, 1)'

      ],
      borderColor: [
        'rgba(99, 126, 223, 1)',
        'rgba(255, 99, 132, 1)'

      ],
      borderWidth: 1,
      cutout: '80%'

    }
  ]
}

const plugins = [{
  beforeDraw: (chart) => {
    const width = chart.width
    const height = chart.height
    const ctx = chart.ctx
    ctx.restore()
    const fontSize = (height / 114).toFixed(2)
    ctx.font = `${fontSize}em sans-serif`
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.fillStyle = '#000000'
    const text = centerText
    const x = width / 2
    const y = height / 2
    ctx.fillText(text, x, y)
    ctx.save()
  }
}]

export function Graphic () {
  return (
    <div>
      <p>aa</p>
      <Doughnut data={data} plugins={plugins} />
    </div>

  )
}
