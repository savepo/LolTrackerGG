import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const DropdownContainer = styled.div`
 text-align: left;
 position: relative;
 border: 1px solid #ccc;
 ${withTheme('border-radius', 'sizes.rem03')}
`
export const DropdownInput = styled.div`
 ${withTheme('padding', 'sizes.rem03')}
 display: flex;
 align-items: center;
 justify-content: space-between;
 user-select: none;
 `
export const DropdownMenuOptions = styled.div`
 position: absolute;
 transform: translateY(4px);
 width: 100%;
 border: 1px solid #ccc;
 ${withTheme('border-radius', 'sizes.rem03')}
 overflow: auto;
 ${withTheme('max-height', 'sizes.rem9')} 
`
export const DropdownnMenuItem = styled.div`
 ${withTheme('padding', 'sizes.rem03')}
 cursor: pointer;
 &:hover{
 ${withTheme('background-color', 'colors.highLight')}
 `

export const DropdownDisplayer = styled.div``

export const DropdownTools = styled.div``

export const DropdownIcon = styled.div``
