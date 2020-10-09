import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        console.log(this.props.id);
    };

    render() {
        return (
            <div className='card' id={this.props.id} onClick={this.handleClick}>
                <img className='card-img-top' alt='' src={this.props.headshotURL} />
                <span>{this.props.data.firstName} {this.props.data.lastName}</span>
            </div>
        )
    };
}