import React from 'react';
import {Container, Navbar, Row, Col, Button} from 'react-bootstrap';

export default class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        Results!
                    </Col>
                </Row>
            </Container>
        )
    }
}