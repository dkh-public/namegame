import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import random from 'random-n';
import EmpCard from './EmpCard';

export default class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.initState = {
            // Gameboard state
            options:[],
            answer:{},
            correct: 0,
            incorrect: 0,
            rounds: 0,
            thisRound: '',
            isClicked: false,
            // Display state
            cardClass: 'card m-3 border-1 empCard',
            imgClass: 'card-img-top',
            answerClass: 'hide',
            // Button state
            nextRound: 'disabled',
            elapsedTime: 0
        };
        this.state = this.initState;
        this.newBoard = this.newBoard.bind(this);
    }

    componentDidMount = () => {
        let options = random(this.props.data,6);
        let answer = random(options,1)[0];
        this.setState({
            options: options,
            answer: answer
        });
    };

    newBoard = () => {
        let options = random(this.props.data,6);
        let answer = random(options,1)[0];
        this.setState({
            options: options,
            answer: answer,
            thisRound: '',
            nextRound: 'disabled',
            cardClass: this.initState.cardClass,
            answerClass: this.initState.answerClass,
            imgClass: this.initState.imgClass,
            isClicked: false
        });
    };

    getResult = (result,isClicked) => {
        this.setState({
            nextRound: '',
            imgClass: this.state.imgClass + ' checked-blur',
            answerClass: 'd-flex align-items-end show',
            isClicked: isClicked,
            rounds: this.state.rounds+1
        })
        if(result===this.state.answer.id) {
            this.setState({
                thisRound: 'Correct!',
                correct: this.state.correct+1,
            })
        } else {
            this.setState({
                thisRound: 'Incorrect!',
                incorrect: this.state.incorrect+1
            })
        };
    }

    render() {
        return (
            <Container fluid className="gameboard">
                {/* Render header bar w/ logo and "back" icon */}
                <Row id="gameboardHeader" className="header">
                    <Col className="text-left" lg={2}>
                        <Link to="/"><img src="./name_game_back_icon.png" alt="" /></Link>
                    </Col>
                    <Col className="header text-center" lg={{span: 4, offset: 2}}>
                        <img src="./name_game_sub_logo.png" alt="" />
                    </Col>
                </Row>

                <Row id="gameboardPlayArea">
                    <Col lg={{span: 6, offset: 3}}>
                        <Row id="question">
                            <Col className="text-center mt-3 mb-3 lead">
                                Which one of these good-looking photos is the real 
                            </Col>
                        </Row>

                        <Row>
                            <Col className="text-center mb-3 lead">
                                <b>{this.state.answer.firstName} {this.state.answer.lastName}</b>
                            </Col>
                        </Row>

                        <Row id="cardDeck" className="row row-cols-4 justify-content-center">
                            {/* Lay out the card deck */}
                            {this.state.options.map((option, index) => (
                                <EmpCard key={option.id} 
                                         data={option} 
                                         getResult={this.getResult} 
                                         answer={this.state.answer.id} 
                                         cardClass={this.state.cardClass} 
                                         imgClass={this.state.imgClass} 
                                         answerClass={this.state.answerClass} 
                                         isClicked={this.state.isClicked}
                                />
                            ))}
                        </Row>

                        <Row id="rules">
                            {this.state.correct < 5 ?
                            <Col className="text-center mb-3 lead">
                                Let's play to five. So far you've guessed <b>{this.state.correct}</b> right and <b>{this.state.incorrect}</b> wrong through <b>{this.state.rounds}</b> {this.state.rounds===1 ? 'round' : 'rounds'}.
                            </Col>
                            :
                            <Col className="text-center mb-3 lead">
                                <h3>Nice job! Let's see how you did!</h3>
                            </Col>
                            }
                        </Row>

                        <Row id="controls" className="mb-5">
                            <Col className="text-center">
                                {/* <Button onClick={() => this.newBoard()}>Play Again</Button> */}
                                {this.state.correct < 5 ? 
                                    <Button disabled={this.state.nextRound} className="btn-lg btn-info w-25 rounded-5 mr-1" onClick={()  => this.newBoard()}>Next Round</Button>
                                :
                                    <Link to={{
                                        pathname: '/stats',
                                        state: {
                                            correct: this.state.correct,
                                            incorrect: this.state.incorrect,
                                            rounds: this.state.rounds
                                        }
                                    }}><Button className="btn-lg btn-info w-25 rounded-5 mr-1" onClick={()  => this.newBoard()}>Show Me My Stats!</Button></Link>
                                }

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        );
      };
}