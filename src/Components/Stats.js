import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            // This page will throw an error if you navigate directly to it b/c Router will not pass the props.location data necessary to render.
            // If I had more time, I would include error handling to ensure that the proper data is loaded, and if not, display a nice error msg.
        }
    }

    render() {
        return(
            <Container fluid className="stats">

                {/* Render header bar w/ logo and "back" icon STUB: The back icon image needs to be cleaned up. */}
                <Row id="gameboardHeader" className="header">
                    <Col className="text-left" lg={2}>
                        <Link to="/"><img src="./name_game_back_icon.png" alt="Click here to return to homepage" /></Link>
                    </Col>
                    <Col className="header text-center" lg={{span: 4, offset: 2}}>
                        <img src="./name_game_sub_logo.png" alt="The Name Game" />
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
                    <Col md={{span: 2, offset: 3}} className="text-center">
                        <div className="display-4">
                            {/* Convert the correct answers divided by rounds to %age */}
                            {this.props.location.state.rounds}
                        </div>
                        <div className="text-center lead">
                            Rounds Played
                        </div>
                    </Col>
                    <Col md={2} className="text-center">
                        <div className="display-4">
                            {/* Convert the correct answers divided by rounds to %age */}
                            {Math.floor(this.props.location.state.correct/this.props.location.state.rounds*100)}%
                        </div>
                        <div className="text-center lead">
                            Correct Selections
                        </div>
                    </Col>
                    <Col md={2} className="text-center">
                        <div className="display-4">
                        {/* Convert the incorrect answers divided by rounds to %age */}
                        {Math.floor(this.props.location.state.incorrect/this.props.location.state.rounds*100)}%
                        </div>
                        <div className="text-center lead">
                            Incorrect Selections
                        </div>
                    </Col>
                    {/* STUB: This should be controlled by a setInterval value that runs in a timer on each gameboard round. I haven't been able to get that working correctly tho. */}
                    {/* <Col md="2" className="text-center lead">
                        <div className="display-4">
                            2.3 sec
                        </div>
                        <div className="text-center lead">
                            Avg Selection Time
                        </div>
                    </Col> */}
                </Row>
                <Row>
                    <Col xs={12} md={12} className="text-center mt-5">
                        <Link to="/play">
                            <Button className="btn-lg btn-info w-25 rounded-5">
                                Let's Play Again!
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}