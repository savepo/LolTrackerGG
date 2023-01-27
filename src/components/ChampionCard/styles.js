import styled from '@emotion/styled'

export const ChampionCardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    cursor: pointer;
`

export const Card = styled.div`
    width: fit-content;
    height: fit-content;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 20px;
    transition: all .3s;
    &:hover {
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
   `

export const Card2 = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: #1a1a1a;
    border-radius:;
    transition: all .2s;
    &:hover {
        transform: scale(0.98);
        border-radius: 20px;
    }
   `
