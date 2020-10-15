import React from 'react';
import Intro from './Components/Intro';
import Gameboard from './Components/Gameboard';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      startGame: true,
      error: null,
      data:[]
    };
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
      fetch('https://willowtreeapps.com/api/v1.0/profiles')
          .then(response => response.json())
          .then(
            (result) => {
              this.setState({
                dataLoaded: true,
                data: result
              });
            },
            (error) => {
              this.setState({
                dataLoaded: true,
                error
            });
          }
      )
  }

  startGame = (toggle) => {
    console.log(toggle);
    this.setState({
      startGame: toggle
    })
  };

  render() {
    const {error, dataLoaded, data} = this.state;
    if(error) {
      return <div>There was an error fetching data.</div>
    } else if (!dataLoaded) {
      return <div>Loading data...</div>
    } else if (!this.state.startGame) {
      return (
        <div className="App">
          <Intro startGame={this.startGame} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Gameboard data={data} startGame={this.startGame} />
        </div>
      )
    };
  };
}