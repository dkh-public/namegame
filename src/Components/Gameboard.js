import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import random from 'random-n';
import Answer from './Answer';
import Card from './Card';

export default class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.initState = {
            options:[],
            answer:{},
            guesses: 0,
            correct: 0,
            wrong: 0,
            score: '0%'
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
            answer: answer
        })
    };

    getGuess = (result) => {
        let guesses = this.state.guesses+1;
        let correct = this.state.correct;
        let wrong = this.state.wrong;

        if(result==='Correct') {
            correct++;
            let score = ((parseFloat(correct)/parseFloat(guesses))*100).toFixed(0);
            this.setState({score: score+'%'});
            let reloadBoard = setTimeout(this.newBoard,3000);
        } else {
            wrong++;
        };

        this.setState({
            guesses: guesses,
            correct: correct,
            wrong: wrong
        });

    };

    render() {
        return (
            <Container fluid className='w-50'>
            <Row>
                <Col>WillowTree Name Game</Col>
            </Row>
            <Row>
                <Col>
                    CORRECT: {this.state.correct} | WRONG: {this.state.wrong} | SCORE: {this.state.score}
                </Col>
            </Row>
            <Row>
                <Col>Can you identify <span>{this.state.answer.firstName} {this.state.answer.lastName}</span></Col>
            </Row>
            <Row className="row row-cols-3">
                {this.state.options.map((option, index) => (
                    <Card key={option.id} data={option} answer={this.state.answer.id} getGuess={this.getGuess} />
                ))}
            </Row>
            <Row>
                <button onClick={() => this.newBoard()}>Play Again</button>
            </Row>
            </Container>
        );
      };
}