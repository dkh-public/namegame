import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import random from 'random-n';
import Answer from './Answer';
import Card from './Card';

export default class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options:[],
            answerid:[]
        };
        this.getOptions = this.getOptions.bind(this);
        this.getAnswer = this.getAnswer.bind(this);
    }

    getOptions = (arr) => {
        return (random(arr,6));
    };

    getAnswer = (arr) => {
        return (random(arr,1));
    };

    render() {
        let options = this.getOptions(this.props.data);
        let answer = this.getAnswer(options,1);

        return (
            <Container fluid className='w-50'>
            <Row>
                <Col>WillowTree Name Game</Col>
            </Row>
            <Row>
                <Col>Can you identify <Answer data={answer} /></Col>
            </Row>
            <Row className="row row-cols-3">
                {options.map((option, index) => (
                    <Card key={option.id} id={option.id} headshotURL={option.headshot.url} data={option} />
                ))}
            </Row>
            <Row>
    
            </Row>
            </Container>
        );
      };
}