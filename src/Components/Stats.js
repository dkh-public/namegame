import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return(
            <Container fluid className="stats">

                {/* Render header bar w/ logo and "back" icon */}
                <Row id="gameboardHeader" className="header">
                    <Col className="text-left" md={2}>
                        <Link to="/"><img src="./name_game_back_icon.png" alt="" /></Link>
                    </Col>
                    <Col className="header text-center" lg={{span: 4, offset: 2}}>
                        <img src="./name_game_sub_logo.png" alt="" />
                    </Col>
                </Row>

                <Row className="stats-body">
                    <Col md="12" className="text-center">
                        <div className="stats-light-bold lead mt-1 mb-5">
                            How'd you do?
                        </div>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col md={{span: 3, offset: 3}} className="text-center">
                        <div className="display-4">
                            {Math.floor(this.props.location.state.correct/this.props.location.state.rounds*100)}%
                        </div>
                        <div className="text-center lead">
                            Correct Selections
                        </div>
                    </Col>
                    <Col md="3" className="text-center">
                        <div className="display-4">
                        {Math.floor(this.props.location.state.incorrect/this.props.location.state.rounds*100)}%
                        </div>
                        <div className="text-center lead">
                            Incorrect Selections
                        </div>
                    </Col>
                    {/* <Col md="2" className="text-center lead">
                        <div className="display-4">
                            2.3 sec
                        </div>
                        <div className="text-center lead">
                            Avg Selection Time
                        </div>
                    </Col> */}
                </Row>
                
            </Container>
        )
    }
}