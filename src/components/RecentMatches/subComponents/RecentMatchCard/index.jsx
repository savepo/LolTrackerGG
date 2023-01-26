import React from 'react'
import { RecentMatchCardContainer, RecentMatchCardPictureContainer, RecentMatchCardPicture, RecentMatchCardInformationContainer, RecentMatchCardInformationRow, RecentMatchCardGameStatusAndType, RecentMatchCardInformationGameStatus, Victory, Defeat, GameType, KillsDeathsAssistsContainer, KillsDeathsAssists, Spacer, InfoContainer, Title, Text, SpellsContainer, Spell, SummonerSpellImage, PerksContainer, Perk, SummonerPerkImage, ItemsContainer, SummonerItemImage } from './styles'

const RecentMatchCard = ({ data }) => {

  //  console.log(getIconChampionSrc(data.championId))
  const iconSource = await getIconChampionSrc()

  return (
    <RecentMatchCardContainer>
      <RecentMatchCardPictureContainer>
        <RecentMatchCardPicture src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${5}.png`} />
      </RecentMatchCardPictureContainer>
      <RecentMatchCardInformationContainer>
        <RecentMatchCardInformationRow>
          <RecentMatchCardGameStatusAndType>
            {data.gameStatus === 'Victory' ? <Victory>{data.gameStatus}</Victory> : <Defeat>{data.gameStatus}</Defeat>}
            <GameType>{data.gameType}</GameType>
          </RecentMatchCardGameStatusAndType>
          <Spacer />
          <KillsDeathsAssistsContainer><KillsDeathsAssists>{data.kills} / {data.deaths} / {data.assists}</KillsDeathsAssists></KillsDeathsAssistsContainer>
          <Spacer />
          <InfoContainer>
            <Title>KDA</Title>
            <Text>{data.kda}</Text>
          </InfoContainer>
          <Spacer />
          <InfoContainer>
            <Title>Minions</Title>
            <Text>{data.totalMinionsKilled}</Text>
          </InfoContainer>
          <Spacer />
          <InfoContainer>
            <Title>Gold</Title>
            <Text>{data.gold}</Text>
          </InfoContainer>
          <Spacer />
          <InfoContainer>
            <Title>Game time</Title>
            <Text>{data.gameTime}</Text>
          </InfoContainer>
          <Spacer />
          <InfoContainer>
            <Title>Date</Title>
            <Text>{data.date}</Text>
          </InfoContainer>
        </RecentMatchCardInformationRow>

        <RecentMatchCardInformationRow>
          <SpellsContainer>
            <Spell>
              <SummonerSpellImage src={data.summoner1Src} />
            </Spell>
            <Spell>
              <SummonerSpellImage src={data.summoner2Src} />
            </Spell>
          </SpellsContainer>
          <PerksContainer>
            <Perk>
              <SummonerPerkImage src={data.perk1Src} />
            </Perk>
            <Perk>
              <SummonerPerkImage src={data.perk2Src} />
            </Perk>
          </PerksContainer>
        </RecentMatchCardInformationRow>

        <RecentMatchCardInformationRow>
          <ItemsContainer>
            <SummonerItemImage src={data.item1Src} />
          </ItemsContainer>
          <ItemsContainer>
            <SummonerItemImage src={data.item2Src} />
          </ItemsContainer>
          <ItemsContainer>
            <SummonerItemImage src={data.item3Src} />
          </ItemsContainer>
          <ItemsContainer>
            <SummonerItemImage src={data.item4Src} />
          </ItemsContainer>
          <ItemsContainer>
            <SummonerItemImage src={data.item5Src} />
          </ItemsContainer>
          <ItemsContainer>
            <SummonerItemImage src={data.item6Src} />
          </ItemsContainer>
        </RecentMatchCardInformationRow>
      </RecentMatchCardInformationContainer>
    </RecentMatchCardContainer>
  )
}
export default RecentMatchCard
