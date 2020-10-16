import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Home(props) {
    return (
        <Container fluid className='w-50'>
            <Row>
                <Col>
                    Welcome to the WillowTree Name Game!
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/play"><Button>Click Here to Play!</Button></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;