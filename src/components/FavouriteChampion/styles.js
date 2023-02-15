import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const FavouriteChampionContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    ${withTheme('background-color', 'colors.lightBlue')}
    border-radius: 1rem;
    padding-top: 15px;
    padding-bottom: 5px;
`

export const FavouriteChampionTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
    font-family: Sans-serif, Arial;
    color: #595959;
    text-align: center;
    font-size: 1.5vw;
    margin-top: 0;
    margin-bottom: 0;
`

export const FavouriteChampionInformationContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
`

export const FavouriteChampionNameContainer = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const FavouriteChampionName = styled.h1`
    color: #000000;
    font-family: 'Kufam', sans-serif;
    font-size: 2vw;
    text-shadow: 0px 3px 2px #948f8f;
    margin-bottom: 2rem;
`

export const FavouriteChampionPictureContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`

export const FavouriteChampionPicture = styled.img`
    width: 6vw;
    max-width: 100px;
    height: auto;
    max-height: 220px;
    border-radius: 1rem;
`

export const SpinnerSlot = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
