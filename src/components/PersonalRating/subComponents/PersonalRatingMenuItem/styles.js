import styled from '@emotion/styled'
import { withTheme } from '../../../../helpers/styles.helper'

export const ContainerNavitem = styled.div`
    width: 50%;
    height: 100%
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    ${withTheme('color', 'colors.softBlack')}   
    &:hover {
        cursor: pointer;
        ${withTheme('background-color', 'colors.coral')}
        ${withTheme('color', 'colors.white')}
    }     
`

export const IsSelected = styled.p`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${withTheme('background-color', 'colors.coral')}
    ${withTheme('color', 'colors.white')}
`

export const IsNotSelected = styled.p`
    color: black;
    &:hover{
        ${withTheme('background-color', 'colors.coral')}
    }
`
