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
            rounds: 0
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
        let {guesses,correct,wrong} = this.state;
        if(result==='Correct') {
            this.setState({
                guesses: this.state.guesses+1,
                correct: this.state.correct+1,
            })
        } else {
            this.setState({
                guesses: this.state.guesses+1
            })
        };
        this.setState({
            rounds: this.state.rounds+1
        });
        setTimeout(
            () => this.newBoard(),3000
        )
    };

    render() {
        return (
            <Container fluid className='w-50'>
                <Row>
                    <Col><h1>WillowTree Name Game</h1></Col>
                </Row>
                <Row>
                    <Col>
                    <h3>Can you identify <b>{this.state.answer.firstName} {this.state.answer.lastName}</b>?</h3>
                    </Col>
                </Row>
                {this.state.rounds < 6 ? 
                <Row className="row row-cols-3">
                    {this.state.options.map((option, index) => (
                        <Card key={option.id} data={option} answer={this.state.answer.id} getGuess={this.getGuess} />
                    ))}
                </Row> : 
                <Row>
                    <Col>
                        <h3>Nice job! Let's see how you did!</h3>
                    </Col>
                </Row>
                }
                <Row>
                    <Col>
                    <h3>So far, you've got {this.state.correct} out of {this.state.guesses} guess{this.state.guesses != 1 ? 'es' : ''} correct!</h3>
                    </Col>
                </Row>
                <Row>
                    {/* <Button onClick={() => this.newBoard()}>Play Again</Button> */}
                    <Button onClick={() => this.props.startGame(false)}>Quit</Button>
                </Row>
            </Container>
        );
      };
}