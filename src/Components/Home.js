import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Home(props) {
    return (
        <Container fluid className='home'>
            <Row>
                <Col xs={12} md={12} className="text-center mb-5">
                    <img src="name_game_logo.png" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} className="text-center mb-5">
                    <div className="text-light lead">
                        Try matching the WillowTree employee to their photo!
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} className="text-center pb-10">
                    <Link to="/play">
                        <Button className="btn-lg btn-info w-25 rounded-5">
                            Play!
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;