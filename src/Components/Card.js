import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            clicked: false,
            cardClass: 'card border-0',
            imgClass: 'card-img-top'
        }

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        console.log(this.props.id + ' = ' + this.props.answer);
        this.setState({checked: true});
        if(this.props.id === this.props.answer) {
            this.setState({
                cardClass: 'card right-card',
                imgClass: 'card-img-top checked-img'
            })
        } else {
            this.setState({
                cardClass: 'card wrong-card',
                imgClass: 'card-img-top checked-img'
            })
        };
    };

    render() {
        return (
            <div className={this.state.cardClass} id={this.props.id} onClick={this.handleClick}>
                <img className={this.state.imgClass} alt='' src={this.props.headshotURL} />
                <span className='hide-name'>{this.props.data.firstName} {this.props.data.lastName}</span>
            </div>
        )
    };
}