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
            answer:[]
        };
    }

    render() {
        let options = random(this.props.data,6);
        let answer = random(options,1);
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