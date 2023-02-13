import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const CardStats = styled.div`
 width: 100%;
 height: 100%;
 display: grid;
 grid-template-columns: 20% 20% 60%;
 ${withTheme('background-color', 'colors.lightBlue')}
 border-radius: 1rem;
`
