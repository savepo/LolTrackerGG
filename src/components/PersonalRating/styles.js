import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const PersonalRatingContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    background: white;
    border-radius: 1rem;
    padding-top: 15px;
    padding-bottom: 10px;

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
    border: 0px solid red;
    display: flex;
    background-color: #F9F9F9;
`

export const PersonalRatingMenuItem = styled.div`
    width: 50%;
    height: 100%
    border: 1px solid blue;
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
    height: 60%;
`

export const PersonalRatingInformationContainer = styled.div`
    width: 50%;
    height: 80%;
    align-items: center;
    justify-content: center;
`

export const PersonalRatingLabel = styled.p`
    width: 100%;
    height: 33.3333%%;
    display: flex;
    justify-content: center;
    align-items: center;
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
