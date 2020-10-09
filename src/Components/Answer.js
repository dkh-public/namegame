import React from 'react';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return(
            <span>{this.props.data[0].firstName} {this.props.data[0].lastName}</span>
        );
    }
}