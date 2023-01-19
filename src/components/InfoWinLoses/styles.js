import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const InfoWinLosesContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 38px);
 text-align: center;
 padding-bottom: 10px;
 font-weigth: bold;
 ${withTheme('font-weight', 'typeFont.bold')}
`

export const TotalMatches = styled.div``

export const WinMatches = styled.div``

export const LosesMatches = styled.div``
