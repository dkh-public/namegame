import React from 'react';
import {Card} from 'react-bootstrap';

export default class EmpCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hasLoaded: false,
            cardClass: this.props.cardClass
        }
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount = () => {
        this.setState({hasLoaded: true})
    }

    handleClick = () => {
        if(this.props.isClicked) { return false }; // Don't update anything if a card has already been clicked this round
        // Pass back the ID of the clicked card and "true", denoting an option has been clicked.
        this.props.getResult(this.props.data.id,true);
        if(this.props.answer===this.props.data.id) {
            this.setState({
                cardClass: 'card m-3 border-1 empCard right-card' // Makes card background green if correct
            })
        } else {
            this.setState({
                cardClass: 'card m-3 border-1 empCard wrong-card' // Makes card background red if incorrect
            })
        };
    };

    render() {
        return (
            /* Using React Bootstrap to make displaying cards easier */
            <Card className={this.state.cardClass} onClick={() => this.handleClick()}>
                <Card.Img className={this.props.imgClass} variant="top" src={this.props.data.headshot.url} />
                <Card.ImgOverlay className={this.props.answerClass}>
                    <Card.Text><span className="answer-overlay-text">{this.props.data.firstName} {this.props.data.lastName}</span></Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
    };
}