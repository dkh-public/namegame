import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import random from 'random-n';
import EmpCard from './EmpCard';

export default class Gameboard extends React.Component {
    constructor(props) {
        super(props);
        // Save state as initState so we can easily reload the gameboard
        this.initState = {
            // Gameboard state
            data: [],
            dataLoaded: false, 
            options:[],
            answer:{},
            correct: 0,
            incorrect: 0,
            rounds: 0,
            thisRound: '',
            isClicked: false,
            // Display states for EmpCards
            cardClass: 'card m-3 border-1 empCard',
            imgClass: 'card-img-top',
            answerClass: 'hide',
            // Continue button state
            nextRound: 'disabled',
            elapsedTime: 0
        };
        this.state = this.initState;
        this.getData = this.getData.bind(this);
        this.newBoard = this.newBoard.bind(this);
        this.filterData = this.filterData.bind(this);
    }

    componentDidMount() {
        // Fetch the data from the WillowTree JSON API
        fetch('https://willowtreeapps.com/api/v1.0/profiles')
            .then(response => response.json())
            .then(
              (result) => {
                this.setState({
                  dataLoaded: true,
                  data: result
                });
                // Save the data in the Gameboard state
                this.getData(this.state.data);
              },
              (error) => {
                this.setState({
                  dataLoaded: true,
                  error
              });
            }
        ) // End Fetch
    }

    getData = (data) => {
        // Use the filterData function below to filter result set (e.g. omit records with no image file, etc.)
        let options = random(this.filterData(data),6);
        let answer = random(options,1)[0];
        // Set the options and answer in the Gameboard state
        this.setState({
            options: options,
            answer: answer
        });
    }
  
    filterData = (data) => {
        // Simple filters to pare down JSON result set
        let fData = data;
            // fData = fData.filter(item => item.headshot.width >= 2000);
            // fData = fData.filter(item => !item.headshot.url == '');
            // fData = fData.filter(item => !item.headshot.url.includes('featured-image-TEST1.png'));
            // fData = fData.filter(item => item.headshot.hasOwnProperty('url'));
        return fData;
    }

    newBoard = () => {
        // Render a new board once the round is over
        let options = random(this.state.data,6);
        let answer = random(options,1)[0];
        this.setState({
            options: options,
            answer: answer,
            thisRound: '',
            nextRound: 'disabled',
            cardClass: this.initState.cardClass,
            answerClass: this.initState.answerClass,
            imgClass: this.initState.imgClass,
            isClicked: false
        });
    };

    getResult = (result,isClicked) => {
        // Passed to child component (EmpCard), this function returns the clicked employee's ID to compare to the Answer ID held in Gameboard state. Also gets "isClicked" from EmpCard so that all cards on the board can be obscured (prevents users from clicking more than one card per round)
        this.setState({
            nextRound: '',
            imgClass: this.state.imgClass + ' checked-blur',
            answerClass: 'd-flex align-items-end show',
            isClicked: isClicked,
            rounds: this.state.rounds+1 // Count the number of rounds so we can get correct/incorrect %ages
        })
        if(result===this.state.answer.id) {
            this.setState({
                thisRound: 'Correct!',
                correct: this.state.correct+1, // Adds to correct answer tally
            })
        } else {
            this.setState({
                thisRound: 'Incorrect!',
                incorrect: this.state.incorrect+1 // Adds to incorrect answer tally
            })
        };
    }

    render() {
        return (
            <Container fluid className="gameboard">
                <Row id="gameboardHeader" className="header">
                    <Col className="text-left" lg={2}>
                        <Link to="/"><img src="./name_game_back_icon.png" alt="Click here to return to homepage" /></Link>
                    </Col>
                    <Col className="header text-center" lg={{span: 4, offset: 2}}>
                        <img src="./name_game_sub_logo.png" alt="The Name Game" />
                    </Col>
                </Row>

                <Row id="gameboardPlayArea">
                    <Col lg={{span: 6, offset: 3}}>
                        <Row id="question">
                            <Col className="text-center mt-3 mb-3 lead">
                                Which one of these good-looking photos is the real 
                            </Col>
                        </Row>

                        <Row>
                            <Col className="text-center mb-3 lead">
                                <b className="answer-display">{this.state.answer.firstName} {this.state.answer.lastName}</b>
                            </Col>
                        </Row>

                        <Row id="cardDeck" className="row row-cols-4 justify-content-center">
                            {/* Lay out the card deck based on the six options chosen randomly by random-n */}
                            {this.state.options.map((option, index) => (
                                <EmpCard key={option.id} 
                                         data={option} // Option mapped by this.state.options.map
                                         getResult={this.getResult} // Function to process the result when the user clicks an option
                                         answer={this.state.answer.id} // Pass the answer ID to the EmpCard for comparison
                                         // Passing card classes from parent component so it can control toggling classes on click
                                         cardClass={this.state.cardClass} 
                                         imgClass={this.state.imgClass} 
                                         answerClass={this.state.answerClass} 
                                         isClicked={this.state.isClicked}
                                />
                            ))}
                        </Row>

                        <Row id="rules">
                            {this.state.correct < 5 ?
                            // We're playing to five. So as long as the # of correct answers is less than five, show the "Rules"
                            <Col className="text-center mb-3 lead">
                                Let's play to five. So far you've guessed <b>{this.state.correct}</b> right and <b>{this.state.incorrect}</b> wrong through <b>{this.state.rounds}</b> {this.state.rounds===1 ? 'round' : 'rounds'}.
                            </Col>
                            :
                            // Once you hit five correct answers, the game ends and you can check your stats.
                            <Col className="text-center mb-3 lead">
                                <h3>Nice job! Let's see how you did!</h3>
                            </Col>
                            }
                        </Row>

                        <Row id="controls" className="mb-5">
                            <Col className="text-center">
                                {/* <Button onClick={() => this.newBoard()}>Play Again</Button> */}
                                {this.state.correct < 5 ? 
                                    // Show the next round button until the user hits five correct answers
                                    <Button disabled={this.state.nextRound} className="btn-lg btn-info w-25 rounded-5 mr-1" onClick={()  => this.newBoard()}>Next Round</Button>
                                :
                                    // React Router link to stats component once user has answered five correct guesses
                                    // Pass the # correct, # incorrect and # of rounds to the stats page for calculating
                                    <Link to={{
                                        pathname: '/stats',
                                        state: {
                                            correct: this.state.correct,
                                            incorrect: this.state.incorrect,
                                            rounds: this.state.rounds
                                        }
                                    }}><Button className="btn-lg btn-info w-25 rounded-5 mr-1" onClick={()  => this.newBoard()}>Show Me My Stats!</Button></Link>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
      };
}