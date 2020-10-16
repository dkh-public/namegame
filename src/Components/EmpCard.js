import React from 'react';
import Card from 'react-bootstrap/Card';

export default class EmpCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            clicked: false,
            cardClass: 'card border-1',
            imgClass: 'card-img-top'
        }

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        if(this.props.data.id === this.props.answer) {
            this.props.getGuess('Correct');
            this.setState({
                cardClass: 'card right-card',
                imgClass: 'card-img-top checked-img'
            });
        } else {
            this.props.getGuess('Incorrect');
            this.setState({
                cardClass: 'card wrong-card',
                imgClass: 'card-img-top checked-img'
            });
        };
    };

    render() {
        return (
            // <div className={this.state.cardClass} id={this.props.data.id} onClick={this.handleClick}>
            //     <img alt='' src={this.props.data.headshot.url} width="100" />
            //     <span className='hide-name'>{this.props.data.firstName} {this.props.data.lastName}</span>
            // </div>
            <Card onClick={this.handleClick}>
            <Card.Img className={this.state.imgClass} variant="top" src={this.props.data.headshot.url} />
            <Card.Body className="hide-name">
                <Card.Title>{this.props.data.firstName} {this.props.data.lastName}</Card.Title>
            </Card.Body>
            </Card>
        )
    };
}