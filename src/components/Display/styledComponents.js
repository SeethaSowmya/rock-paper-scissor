import styled from 'styled-components'

export const Div = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
`
export const Headings = styled.h1`
  font-size: 20px;
  margin: 0px;
  font-family: Bree Serif;
  color: #ffffff;
`
export const ScoreContainer = styled.div`
  padding: 12px;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export const ScoreHead = styled.p`
  font-size: 12px;
  margin: 1px;
  font-family: Bree Serif;
  color: #223a5f;
`
export const Heads = styled(ScoreHead)`
  color: #ffffff;
  font-family: Roboto;
`

export const Pad = styled(Heads)`
  margin: 20px;
`
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10vh;
`
export const RowOne = styled(CardsContainer)`
  flex-direction: row;
  justify-content: center;
  align-items: row;
`
export const Row = styled(RowOne)`
  flex-direction: column;

  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 90px;
  height: 80px;
  margin-left: 10px;
  margin-right: 10px;
`
export const Img = styled(Image)`
  margin-left: 0px;
  margin-right: 10px;
`
export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
`
export const PlayButton = styled.button`
  background-color: #ffffff;
  border-width: 0px;
  color: #223a5f;
  padding-left: 80px;
  padding-right: 10px;
  font-size: 8px;
  border-radius: 4px;
  padding: 3px;
  width: 100px;
  height: 20px;
`

export const RowTwo = styled(RowOne)``

export const RulesButton = styled(PlayButton)`
  width: 70px;
`
export const ButtonDiv = styled(RowOne)`
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`
export const WhiteBg = styled.div`
  background-color: #ffffff;
  padding: 30px;
`
export const RulesPage = styled.img`
  height: 300px;
  width: 300px;
`
export const ScorePara = styled.p`
  font-family: 'Roboto';
`
