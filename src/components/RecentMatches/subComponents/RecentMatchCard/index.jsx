import React from 'react'
import {
  RecentMatchCardContainer,
  RecentMatchCardPictureContainer,
  RecentMatchCardPicture,
  RecentMatchCardInformationContainer,
  RecentMatchCardInformationRow,
  RecentMatchCardGameStatusAndType,
  Victory,
  Defeat,
  GameType,
  KillsDeathsAssistsContainer,
  KillsDeathsAssists,
  Spacer,
  InfoContainer,
  Title,
  Text,
  SpellsContainer,
  Spell,
  SummonerSpellImage,
  PerksContainer,
  Perk,
  SummonerPerkImage,
  ItemsContainer,
  SummonerItemImage,
  EmptySlot
} from './styles'

const RecentMatchCard = ({ data }) => {
  //  console.log(getIconChampionSrc(data.championId))
  const secondsToMinute = (seconds) => {
    const minutes = seconds / 60
    return minutes.toFixed(2)
  }

  const timeStampToTime = (gameTimeStamp) => {
    const date = new Date(gameTimeStamp)
    return date.toDateString()
  }

  const calculateKda = (kills, deaths, assists) => {
    const kda = (kills + assists) / deaths
    return kda.toFixed(2)
  }
  return (
    <RecentMatchCardContainer>
      <RecentMatchCardPictureContainer>
        <RecentMatchCardPicture src={data.championIconSrc} />
      </RecentMatchCardPictureContainer>
      <RecentMatchCardInformationContainer>
        <RecentMatchCardInformationRow>
          <RecentMatchCardGameStatusAndType>
            {data.win ? <Victory>Victory</Victory> : <Defeat>Defeat</Defeat>}
            <GameType>{data.queueId}</GameType>
          </RecentMatchCardGameStatusAndType>
          <Spacer />
          <KillsDeathsAssistsContainer><KillsDeathsAssists>{data.kills} / {data.deaths} / {data.assists}</KillsDeathsAssists></KillsDeathsAssistsContainer>
          <Spacer />
          <InfoContainer>
            <Title>KDA</Title>
            <Text>{calculateKda(data.kills, data.deaths, data.assists) === 'Infinity' ? 'Perfect' : calculateKda(data.kills, data.deaths, data.assists)}</Text>
          </InfoContainer>
          <Spacer />
          <InfoContainer>
            <Title>Minions</Title>
            <Text>{data.totalMinionsKilled}</Text>
          </InfoContainer>
          <Spacer />
          <InfoContainer>
            <Title>Gold</Title>
            <Text>{data.goldEarned}</Text>
          </InfoContainer>
          <Spacer />
          <InfoContainer>
            <Title>Game time</Title>
            <Text>{secondsToMinute(data.gameTime)}</Text>
          </InfoContainer>
          <Spacer />
          <InfoContainer>
            <Title>Date</Title>
            <Text>{timeStampToTime(data.gameEndTimestamp)}</Text>
          </InfoContainer>
        </RecentMatchCardInformationRow>

        <RecentMatchCardInformationRow>
          <SpellsContainer>
            <Spell>
              <SummonerSpellImage src={`${data.summonerId1}`} />
            </Spell>
            <Spell>
              <SummonerSpellImage src={`${data.summonerId2}`} />
            </Spell>
          </SpellsContainer>
          <PerksContainer>
            <Perk>
              <SummonerPerkImage src={`/perkImages/${data.perks.styles[0].style}.png`} />
            </Perk>
            <Perk>
              <SummonerPerkImage src={`/perkImages/${data.perks.styles[1].style}.png`} />
            </Perk>
          </PerksContainer>
        </RecentMatchCardInformationRow>
        <RecentMatchCardInformationRow>
          {data.item0 === 0
            ? <EmptySlot />
            : <ItemsContainer>
              <SummonerItemImage src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${data.item0}.png`} />
              </ItemsContainer>}
          {data.item1 === 0
            ? <EmptySlot />
            : <ItemsContainer>
              <SummonerItemImage src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${data.item1}.png`} />
              </ItemsContainer>}
          {data.item2 === 0
            ? <EmptySlot />
            : <ItemsContainer>
              <SummonerItemImage src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${data.item2}.png`} />
              </ItemsContainer>}
          {data.item3 === 0
            ? <EmptySlot />
            : <ItemsContainer>
              <SummonerItemImage src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${data.item3}.png`} />
              </ItemsContainer>}
          {data.item4 === 0
            ? <EmptySlot />
            : <ItemsContainer>
              <SummonerItemImage src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${data.item4}.png`} />
              </ItemsContainer>}
          {data.item5 === 0
            ? <EmptySlot />
            : <ItemsContainer>
              <SummonerItemImage src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${data.item5}.png`} />
              </ItemsContainer>}
          {data.item6 === 0
            ? <EmptySlot />
            : <ItemsContainer>
              <SummonerItemImage src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${data.item6}.png`} />
              </ItemsContainer>}
        </RecentMatchCardInformationRow>
      </RecentMatchCardInformationContainer>
    </RecentMatchCardContainer>
  )
}
export default RecentMatchCard
