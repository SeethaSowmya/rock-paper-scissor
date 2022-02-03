import {Component} from 'react'
import {Popup} from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  Div,
  Container,
  ScoreContainer,
  Headings,
  ScoreHead,
  ScorePara,
  RulesButton,
  Pad,
  CardsContainer,
  RowOne,
  PlayButton,
  RowTwo,
  Row,
  Button,
  Img,
  Image,
  Heads,
  ButtonDiv,
  RulesPage,
  WhiteBg,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Display extends Component {
  state = {
    score: 0,
    status: '',
    computerCardUrl: '',
    userImgUrl: '',
    output: false,
  }

  PlayButtonClick = () => {
    this.setState({output: false})
  }

  GenerateRandom = () => {
    const num = Math.floor(Math.random() * choicesList.length)
    return num
  }

  CardName = event => {
    const s = this.GenerateRandom()
    const CompName = choicesList[s].id
    const UserChoice = event.target.id
    console.log(UserChoice, '*', CompName, '*')

    let variable = ''
    if (UserChoice === CompName) {
      variable = 'IT IS DRAW'
      this.setState({
        status: variable,
        output: true,
        userImgUrl: choicesList[0].imageUrl,
        computerCardUrl: choicesList[s].imageUrl,
      })
    } else if (CompName === choicesList[1].id) {
      variable = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
        output: true,
        status: variable,
        userImgUrl: choicesList[0].imageUrl,
        computerCardUrl: choicesList[s].imageUrl,
      }))
    } else if (CompName === choicesList[2].id) {
      variable = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
        output: true,
        status: variable,
        userImgUrl: choicesList[0].imageUrl,
        computerCardUrl: choicesList[s].imageUrl,
      }))
    }
  }

  CardNameScissor = event => {
    const s = this.GenerateRandom()
    const CompName = choicesList[s].id
    const UserChoice = event.target.id

    let variable = ''
    if (UserChoice === CompName) {
      variable = 'IT IS DRAW'
      this.setState({
        status: variable,
        output: true,
        userImgUrl: choicesList[1].imageUrl,
        computerCardUrl: choicesList[s].imageUrl,
      })
    } else if (CompName === choicesList[0].id) {
      variable = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
        output: true,
        status: variable,
        userImgUrl: choicesList[1].imageUrl,
        computerCardUrl: choicesList[s].imageUrl,
      }))
    } else if (CompName === choicesList[2].id) {
      variable = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
        output: true,
        status: variable,
        userImgUrl: choicesList[1].imageUrl,
        computerCardUrl: choicesList[s].imageUrl,
      }))
    }
  }

  CardNamePaper = event => {
    const s = this.GenerateRandom()
    const CompName = choicesList[s].id
    const UserChoice = event.target.id

    let variable = ''
    if (UserChoice === CompName) {
      variable = 'IT IS DRAW'
      this.setState({
        status: variable,
        output: true,
        userImgUrl: choicesList[2].imageUrl,
        computerCardUrl: choicesList[s].imageUrl,
      })
    } else if (CompName === choicesList[0].id) {
      variable = 'YOU WON'
      this.setState(prevState => ({
        score: prevState.score + 1,
        output: true,
        status: variable,
        computerCardUrl: choicesList[s].imageUrl,
        userImgUrl: choicesList[2].imageUrl,
      }))
    } else if (CompName === choicesList[1].id) {
      variable = 'YOU LOSE'
      this.setState(prevState => ({
        score: prevState.score - 1,
        output: true,
        status: variable,
        userImgUrl: choicesList[2].imageUrl,
        computerCardUrl: choicesList[s].imageUrl,
      }))
    }
  }

  render() {
    const {score, output, status, computerCardUrl, userImgUrl} = this.state
    return (
      <Div>
        <Container>
          <div>
            <Headings>Rock</Headings>
            <Headings>Paper</Headings>
            <Headings>Scissors</Headings>
          </div>

          <ScoreContainer>
            <ScoreHead>Score</ScoreHead>
            <ScorePara>{score}</ScorePara>
          </ScoreContainer>
        </Container>
        <h1>Rock Paper Scissors</h1>
        <div>
          {!output && (
            <CardsContainer>
              <RowOne>
                <Button
                  data-testid="rockButton"
                  type="button"
                  onClick={this.CardName}
                >
                  <Image
                    src={choicesList[0].imageUrl}
                    alt={choicesList[0].id}
                    id={choicesList[0].id}
                  />
                </Button>
                <Button
                  data-testid="scissorsButton"
                  type="button"
                  onClick={this.CardNameScissor}
                >
                  <Image
                    src={choicesList[1].imageUrl}
                    alt={choicesList[1].id}
                    id={choicesList[1].id}
                  />
                </Button>
              </RowOne>
              <RowTwo>
                <Button
                  data-testid="paperButton"
                  type="button"
                  onClick={this.CardNamePaper}
                >
                  <Image
                    src={choicesList[2].imageUrl}
                    alt={choicesList[2].id}
                    id={choicesList[2].id}
                  />
                </Button>
              </RowTwo>
            </CardsContainer>
          )}
        </div>
        <div>
          {output && (
            <CardsContainer>
              <RowOne>
                <Row>
                  <Heads>YOU</Heads>
                  <Img src={userImgUrl} alt="your choice" />
                </Row>
                <Row>
                  <Heads>OPPONENT</Heads>

                  <Img src={computerCardUrl} alt="opponent choice" />
                </Row>
              </RowOne>

              <Row>
                <Pad>{status}</Pad>
                <PlayButton onClick={this.PlayButtonClick}>
                  PLAY AGAIN
                </PlayButton>
              </Row>
            </CardsContainer>
          )}
        </div>
        <Popup
          modal
          trigger={
            <ButtonDiv>
              <RulesButton>Rules</RulesButton>
            </ButtonDiv>
          }
        >
          {close => (
            <>
              <WhiteBg>
                <ButtonDiv>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </button>
                </ButtonDiv>
                <RulesPage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                  alt="rules"
                />
              </WhiteBg>
            </>
          )}
        </Popup>
      </Div>
    )
  }
}

export default Display
