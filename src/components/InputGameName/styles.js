import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const ContainerInputGameName = styled.div`
display: grid;
grid-template-columns: 18.75rem 3.125rem;
margin-left: 10px;
`
export const TitleGameName = styled.div` 

${withTheme('font-weight', 'typeFont.bold')}
`

export const BoxInputGameName = styled.input`
 width: 18rem;
 position: relative;
 top: 4px;
 border-top-style: hidden;
 border-right-style: hidden;
 border-left-style: hidden;
 border-bottom-style: hidden;
 &:focus{
    outline: none;
 }
`
