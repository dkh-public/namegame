import React from 'react';
import random from 'random-n';

export default class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                error: null,
                isLoaded: false,
                items:[]
            };
        }

    componentDidMount() {
        fetch('https://willowtreeapps.com/api/v1.0/profiles')
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                isLoaded: true,
                items: result.items
                });
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
        )
    }

    render() {
        const{error,isLoaded,items} = this.state;
        if(error) {
            return <div>ERROR: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                console.log(items)
            );
        };
      };
}