import React from 'react';
import {Card, Button, Glyphicons} from 'react-bootstrap';

export default class EmpCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            clicked: false,
            cardClass: 'card border-1 empCard',
            answerClass: 'show-name',
            imgClass: 'card-img-top'
        }
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = () => {
        this.props.getResult(this.props.data.id);
        if(this.props.data.id===this.props.answer) {
            this.setState({
                cardClass: 'card border-1 empCard right-card'
            })
        } else {
            this.setState({
                cardClass: 'card border-1 empCard wrong-card'
            })
        }
    };

    render() {
        return (
            // <div className={this.state.cardClass} id={this.props.data.id} onClick={this.handleClick}>
            //     <img alt='' src={this.props.data.headshot.url} width="100" />
            //     <span className='hide-name'>{this.props.data.firstName} {this.props.data.lastName}</span>
            // </div>
            <Card className={this.props.cardClass} onClick={() => this.handleClick()}>
                <Card.Img className={this.state.imgClass} variant="top" src={this.props.data.headshot.url} />
                <Card.Body className={this.state.answerClass}>
                    <Card.Title>{this.props.data.firstName} {this.props.data.lastName}</Card.Title>
                </Card.Body>
            </Card>
        )
    };
}