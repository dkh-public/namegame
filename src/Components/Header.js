import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return(
            <Row id="gameboardHeader" className="header">
                <Col className="text-left" sm={1}>
                    <Link to="/"><img src="./name_game_back_icon.png" alt="Click here to return to homepage" /></Link>
                </Col>
                <Col className="header text-center" sm={{span: 8, offset: 1}}>
                    <Link to="/"><img src="./name_game_sub_logo.png" alt="The Name Game" /></Link>
                </Col>
            </Row>
        )
    }
  }