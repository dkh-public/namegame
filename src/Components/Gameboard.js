import React from 'react';
import {Container, Navbar, Row, Col, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import random from 'random-n';
import Answer from './Answer';
import EmpCard from './EmpCard';

export default class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.initState = {
            // Gameboard state
            options:[],
            answer:{},
            guesses: 0,
            correct: 0,
            wrong: 0,
            rounds: 1,
            thisRound: '',
            // Display state
            cardClass: 'card m-3',
            // Button state
            nextRound: 'disabled'
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
        })
    };

    newBoard = () => {
        let options = random(this.props.data,6);
        let answer = random(options,1)[0];
        this.setState({
            options: options,
            answer: answer,
            rounds: this.state.rounds+1,
            thisRound: '',
            nextRound: 'disabled',
            cardClass: this.initState.cardClass
        });
    };

    getResult = (result) => {
        this.setState({
            cardClass: 'card m-3 checked-card',
            nextRound: ''
        })
        if(result===this.state.answer.id) {
            this.setState({
                thisRound: 'Correct!',
                correct: this.state.correct+1,
            })
        } else {
            this.setState({
                thisRound: 'Incorrect!',
                wrong: this.state.wrong+1
            })
        };
    }

    render() {
        return (
            <Container fluid className="gameboard">
                {/* Render header bar w/ logo and "back" icon */}
                <Row className="header">
                    <Col className="text-left" lg={2}>
                        <img src="./name_game_back_icon.png" />
                    </Col>
                    <Col className="header text-center" lg={{span: 4, offset: 2}}>
                        <img src="./name_game_sub_logo.png" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 7, offset: 3}}>
                        <Row>
                            <Col className="text-center mt-3 mb-3 lead">
                                Which one of these good-looking photos is the real 
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center mb-3 lead">
                                {/* Render answer name*/}
                                <b>{this.state.answer.firstName} {this.state.answer.lastName}</b>
                            </Col>
                        </Row>
                        {this.state.correct < 5 ? 
                        <Row className="row row-cols-4">
                            {/* Lay out the card deck */}
                            {this.state.options.map((option, index) => (
                                <EmpCard key={option.id} data={option} answer={this.state.answer.id} getResult={this.getResult} cardClass={this.state.cardClass} />
                            ))}
                        </Row> : 
                        <Row>
                            <Col>
                                <h3>Nice job! Let's see how you did!</h3>
                            </Col>
                        </Row>
                        }
                        <Row className="mb-5">
                            <Col className="text-center">
                                {/* <Button onClick={() => this.newBoard()}>Play Again</Button> */}
                                {this.state.rounds < 6 ? 
                                    <Button disabled={this.state.nextRound} className="btn-lg btn-info w-25 rounded-5 mr-1" onClick={()  => this.newBoard()}>Continue</Button>
                                :
                                    <Link to="/stats"><Button className="btn-lg btn-info w-25 rounded-5 mr-1" onClick={()  => this.newBoard()}>Great! Let's see that score!</Button></Link>
                                }
                                <Link to="/"><Button className="btn-lg btn-info w-25 rounded-5 ml-1">Leave the Game</Button></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
      };
}