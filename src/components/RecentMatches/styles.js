import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const RecentMatchesContainer = styled.div`
    width: 100%;
    height: fit-content;
    border-radius: 1rem;
    ${withTheme('background-color', 'colors.lightBlue')}

`

export const RecentMatchesTitleContainer = styled.div`
    width: 100%
    height: fit-content;
    display: flex;
    justify-content: center;
    color: #595959;
`

export const RecentMatchesTitle = styled.h2`
    font-family: Sans-serif, Arial;
    font-size: 2vw;
    color: #595959;
    text-align: center;
    justify-content: center;
`
