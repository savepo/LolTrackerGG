import styled from '@emotion/styled'

export const RecentMatchCardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10rem;
    margin-top: 0.5rem;
`

export const RecentMatchCardPictureContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14%;
    height: 100%;
`

export const RecentMatchCardPicture = styled.img`
    width: 70%;
    border-radius: 10rem;
`

export const RecentMatchCardInformationContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const RecentMatchCardInformationRow = styled.div`
    width: 100%;
    height: 33.33333%;
    display: flex;
    align-items: center;
`

export const RecentMatchCardGameStatusAndType = styled.div`
    height: 100%;
    `

export const RecentMatchCardInformationGameStatus = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 1.5vw;
    height: fit-conte
`

export const GameType = styled.div`
    width: 100%;
    height: 50%;
    font-size: 1vw;
`

export const Victory = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #1E02C9;
    font-weight: bold;
    font-size: 1.5vw;
`

export const Defeat = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #C9020E;
    font-weight: bold;
    font-size: 1.5vw;
`
export const Spacer = styled.div`
    width: 2rem;
    height: 100%;
`

export const KillsDeathsAssistsContainer = styled.div`
    min-width: 5rem;
    border: 1px solid grey;
    border-radius: 10rem;
`

export const KillsDeathsAssists = styled.p`
    margin: 5px;
`

export const InfoContainer = styled.div`
    height: 100%;
    bordes: 1px solid orange;
`

export const Title = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9B9393;
`

export const Text = styled.div`
    height: 50%;
    justify-content: center;
    align-items: center;
`
// Summoner Spells
export const SpellsContainer = styled.div`
    height: 100%;
    margin-right: 0.5rem;
`

export const Spell = styled.div`
    height: 50%;
`

export const SummonerSpellImage = styled.img`
    height: 95%;
    border-radius: 0.3rem;
`

// Summoner Perks
export const PerksContainer = styled.div`
    height: 100%;
`

export const Perk = styled.div`
    height: 50%;
`

export const SummonerPerkImage = styled.img`
    height: 90%;
`

// Summoner Items
export const ItemsContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 0.7rem;
`

export const SummonerItemImage = styled.img`
    height: 70%;
    border-radius: 0.3rem;
`