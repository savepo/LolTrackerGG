import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const PersonalRatingContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    ${withTheme('background-color', 'colors.lightBlue')}
    border-radius: 1rem;
    padding-top: 15px;
    padding-bottom: 5px;
`

export const PersonalRatingTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
    font-family: Sans-serif, Arial;
    color: #595959;
    text-align: center;
    font-size: 1.5vw;
    margin-top:0;
`

export const PersonalRatingMenu = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    ${withTheme('background-color', 'colors.lightBlue')}
`

export const PersonalRatingMenuItem = styled.div`
    width: 50%;
    height: 100%
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        ${withTheme('background-color', 'colors.highLight')}
      }
`

export const IsSelected = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${withTheme('background-color', 'colors.highLight')}
`

export const PersonalRatingMenuItemText = styled.p`
    text-align: center;
`

export const PersonalRatingStatsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
`

export const PersonalRatingInformationContainer = styled.div`
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const PersonalRatingLabel = styled.p`
    width: 100%;
    height: 33.3333%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 1.1vw;
`

export const PersonalRatingImageContainer = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
`

export const PersonalRatingRankPicture = styled.img`   
    width: 5vw;
`

export const SpinnerSlot = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
