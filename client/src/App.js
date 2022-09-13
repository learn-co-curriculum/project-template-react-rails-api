import React from 'react';
import Signup from './components/Signup';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Lineup from './components/Lineup'
import Schedule from './components/Schedule'
import Tickets from './components/Tickets'
import Login from './components/Login'

function App() {


  return (
    <div>
    <div id="nav-container">
    <Navbar/>
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/lineup'>
          <Lineup />
        </Route>
        <Route exact path='/schedule'>
          <Schedule/>
        </Route>
        <Route exact path= '/tickets'>
          <Tickets />
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
      </Switch>
  </div>
  </div>
  );
}

export default App;