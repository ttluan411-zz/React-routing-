import React, { Component } from 'react';
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Roster, {Player} from './Roster';
import logo from './logo.svg';
import './Roster.css';
import './App.css';
import {getRoster, getPlayer} from './rosterService';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <div>
           
          </div>
        </div>
        
         <HashRouter>
           <div>
              <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/roster">Roster</Link>
              </div>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
                <Switch>
                  <Route path="/roster/:player_id" component={Player}/>
                  <Route path="/roster" component={Roster}/>
                </Switch>
              </div>
          </HashRouter>
         
      </div>
    );
  }
}

export default App;

