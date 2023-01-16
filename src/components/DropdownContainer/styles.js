import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const DropdownContainer = styled.div`
 text-align: left;
 position: relative;
 border: 1px solid #ccc;
 ${withTheme('border-radius', 'sizes.rem03')}
`
