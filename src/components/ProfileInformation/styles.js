import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'


export const ProfileInformationContainer = styled.div`
    width: 30%;
    margin-top: 161px;
    height: 75%;
    text-align: center;
    ${withTheme('background-color', 'colors.lightBlue')}
    top: 15px;
    left: 30px;
    position: fixed;
    border-radius: 1rem;
    
`

export const ProfileInformationTitle = styled.h2`
    display: flex;
    font-family: Sans-serif, Arial;
    font-size: 2vw;
    color: #595959;
    text-align: center;
    justify-content: center;

`

export const ProfileInformationIcon = styled.img`
    width: 45%;
    border-radius: 10rem;
    border: 0.1rem solid pink;
    margin-top: 5%;
    margin-bottom: 1%;
`

export const ProfileInformationName = styled.h3`
    color: #000000;
    font-family: 'Kufam', sans-serif;
    font-size: 2vw;
    text-shadow: 0px 3px 2px #948f8f;
`

export const ProfileInformationLevelContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2%;
`

export const ProfileInformationLevelText = styled.p`
    color: #000000;
    display: inline-block;
    margin-right: 0.2rem;
    font-family: 'Kufam', sans-serif;
    font-weight: bold;
    font-size: 1vw;
`

export const ProfileInformationLevelNumber = styled.p`
    color: #595959;
    display: inline-block;
    margin-left: 0.2rem;
    font-family: 'Kufam', sans-serif;
    font-weight: bold;
    font-size: 1vw;
`
