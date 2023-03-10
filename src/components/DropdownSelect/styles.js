import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const DropdownContainer = styled.div`
 text-align: left;
 border-right: 1px solid #ccc;
 line-height: 15px;
`
export const DropdownInput = styled.div`
 ${withTheme('padding-left', 'sizes.rem1')}
 display: flex;
 align-items: center;
 justify-content: space-between;
 user-select: none;
 `
export const DropdownMenuOptions = styled.div`
 position: absolute;
 transform: translateY(4px);
 width: 13rem;
 margin-left: 40px;
 border: 1px solid #ccc;
 background-color: #ccc;
 ${withTheme('border-radius', 'sizes.rem03')}
 overflow: auto;
`
export const DropdownnMenuItem = styled.div`
 ${withTheme('padding', 'sizes.rem03')}
 cursor: pointer;
 &:hover{
 ${withTheme('background-color', 'colors.highLight')}
 color: white;
}
 `

export const DropdownDisplayer = styled.div``

export const DropdownTools = styled.div``

export const DropdownIcon = styled.div`
 cursor: pointer;
`
export const DropdownTitle = styled.div`
 ${withTheme('padding-left', 'sizes.rem1')}
 padding-top: 9px;
 ${withTheme('font-weight', 'typeFont.bold')}


`
