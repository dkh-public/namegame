import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';

function Intro(props) {
    return (
        <Container fluid className='w-50'>
            <Row>
                <Col>
                    Welcome to the WillowTree Name Game!
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => props.startGame(true)}>Click Here to Play!</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;