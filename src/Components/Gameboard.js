import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
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
            cardClass: 'card'
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
            thisRound: ''
        });
    };

    getResult = (result) => {
        if(result===this.state.answer.id) {
            this.setState({thisRound: 'Correct!'})
        } else {
            this.setState({thisRound: 'Incorrect!'})
        };
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Can you identify <b>{this.state.answer.firstName} {this.state.answer.lastName}</b>? <i>Round {this.state.rounds} {this.state.thisRound.length ? this.state.thisRound : ''}</i></h3>
                        <Button onClick={()  => this.newBoard()}>{this.state.rounds < 6 ? 'Next Round!' : 'Let\'s see that score!'}</Button>
                    </Col>
                </Row>
                {this.state.rounds <= 6 ? 
                <Row className="row row-cols-3">
                    {this.state.options.map((option, index) => (
                        <EmpCard key={option.id} data={option} answer={this.state.answer.id} getResult={this.getResult} className={this.state.cardClass} />
                    ))}
                </Row> : 
                <Row>
                    <Col>
                        <h3>Nice job! Let's see how you did!</h3>
                    </Col>
                </Row>
                }
                <Row>
                    {/* <Button onClick={() => this.newBoard()}>Play Again</Button> */}
                    <Link to="/"><Button>Leave the Game</Button></Link>
                </Row>
            </Container>
        );
      };
}