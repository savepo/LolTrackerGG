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
