import React from 'react';
import {Card, Button} from 'react-bootstrap';

export default class EmpCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            clicked: false,
            cardClass: 'card border-1',
            answerClass: 'hide-name',
            imgClass: 'card-img-top'
        }
    };

    render() {
        return (
            // <div className={this.state.cardClass} id={this.props.data.id} onClick={this.handleClick}>
            //     <img alt='' src={this.props.data.headshot.url} width="100" />
            //     <span className='hide-name'>{this.props.data.firstName} {this.props.data.lastName}</span>
            // </div>
            <Card className="m-3" onClick={() => this.props.getResult(this.props.data.id)}>
                <Card.Img className={this.state.imgClass} variant="top" src={this.props.data.headshot.url} />
                <Card.Body className={this.state.answerClass}>
                    <Card.Title>{this.props.data.firstName} {this.props.data.lastName}</Card.Title>
                </Card.Body>
            </Card>
        )
    };
}