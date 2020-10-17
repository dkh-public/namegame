import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Container, Row, Col, Button, Navbar} from 'react-bootstrap';
import Home from './Components/Home';
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
    const {error, dataLoaded, data} = this.state;
    if(error) {
      return <div>There was an error fetching data.</div>
    } else if (!dataLoaded) {
      return <div>Loading data...</div>
    } else {
      return (
        <Container>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">WillowTree Name Game</Navbar.Brand>
          </Navbar>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/play">
                <Gameboard data={this.filterData(this.state.data)} />
              </Route>
            </Switch>
          </Router>
        </Container>
      )
    };
  };
}