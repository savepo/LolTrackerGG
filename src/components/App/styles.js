import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    background: rgba(99, 126, 223, 1);
`

export const TitleContainer = styled.div`
    width: fit-content;
    height: 100%;
`

export const Title = styled.h1`
    color: #000000;
    font-family:  Verdana,Geneva,sans-serif;
    font-size: 2vw;
    text-shadow: 0px 3px 2px #5f76e8;
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
        text-shadow: 0px 3px 2px rgba(229, 87, 87, 1);
        }
`
