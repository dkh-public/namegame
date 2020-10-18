import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Gameboard from './Components/Gameboard';
import Stats from './Components/Stats';
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
  }

  render() {
    return (
    <div id="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/play" component={Gameboard} />
          <Route exact path="/stats" component={Stats} />
        </Switch>
      </Router>
    </div>
    )
  };
}