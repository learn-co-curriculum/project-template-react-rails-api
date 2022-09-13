import React, { useState } from 'react';
import Signup from './components/Signup';
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Lineup from './components/Lineup'
import Schedule from './components/Schedule'
import Tickets from './components/Tickets'
import Login from './components/Login'


function App() {

  const [currentUser, setCurrentUser] = useState({})

  return (
    <div>
      <div id="nav-container">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/lineup'>
              <Lineup />
            </Route>
            <Route exact path='/schedule'>
              <Schedule />
            </Route>
            <Route exact path='/tickets'>
              <Tickets />
            </Route>
            <Route exact path='/login'>
              <Login setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path='/signup'>
              <Signup setCurrentUser={setCurrentUser} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;