import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const ContainerInputGameName = styled.div`
display: grid;
grid-template-columns: 18.75rem 3.125rem;
align-items: center
`
export const TitleGameName = styled.div` 
${withTheme('font-weight', 'typeFont.bold')}
`

export const BoxInputGameName = styled.input`
 width: 18rem;
 border-top-style: hidden;
 border-right-style: hidden;
 border-left-style: hidden;
 border-bottom-style: groove;
 &:focus{
    outline: none;
 }
`
