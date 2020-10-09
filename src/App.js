import React from 'react';
import Gameboard from './Components/Gameboard';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      data:[]
    };
  }

  componentDidMount() {
      fetch('https://willowtreeapps.com/api/v1.0/profiles')
          .then(response => response.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result
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
    const {error, isLoaded, data} = this.state;
    if(error) {
      return <div>There was an error fetching data.</div>
    } else if (!isLoaded) {
      return <div>Loading data...</div>
    } else {
      return (
        <div className="App">
          <Gameboard data={data} />
        </div>
      );
    };
  };
}