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
    this.filterData = this.filterData.bind(this);
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

  filterData = (data) => {
    let fData = data.filter(item => item.headshot.width >= 200);
    return fData;
  }

  render() {
    const {error, dataLoaded} = this.state;
    if(error) {
      return <div>There was an error fetching data.</div>
    } else if (!dataLoaded) {
      return <div>Loading data...</div>
    } else {
      return (
        <div id="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/play">
                <Gameboard data={this.filterData(this.state.data)} />
              </Route>
              <Route exact path="/stats" component={Stats} />
            </Switch>
          </Router>
        </div>
      )
    };
  };
}