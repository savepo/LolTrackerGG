import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    background: #255059;
`

export const TitleContainer = styled.div`
    width: fit-content;
    height: 100%;
`

export const Title = styled.h1`
    color: #000000;
    font-family:  Verdana,Geneva,sans-serif;
    font-size: 2vw;
    text-shadow: 0px 3px 2px #48ab82;
    cursor: pointer;
`

export const HeaderItem = styled.div`
    width: 20vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MenuItem = styled.h2`
    color: #000000;
    font-family: Verdana,Geneva,sans-serif;
    font-size: 1.5vw;
    text-shadow: 0px 3px 2px #948f8f;
    cursor: pointer;
    &:hover {
        text-shadow: 0px 3px 2px #48ab82;
        }
`

export const ChampionCardContainer = styled.div`
    width: 8%;
    min-width: 120px;
    padding-top: 1%;
    background: #23272a;
`

export const ChampionCardsGeneralContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1%;
    background: #23272a;
    padding-top: 1.5rem;
`

export const ChampionCardRow = styled.div`
    width: 90%;
    gap: 1%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
