import React, { useState, useEffect } from 'react';
import Signup from './components/Signup';
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Lineup from './components/Lineup'
import Schedule from './components/Schedule'
import Tickets from './components/Tickets'
import Login from './components/Login'
import Profile from './components/Profile';


function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch(`/logged_in`)
      .then(res => {
        if (res.ok) {
          setLoggedIn(true)
          console.log(loggedIn)
          res.json().then(user => setCurrentUser(user))
        }

      }
      )
  }, loggedIn);

  console.log(currentUser)
  return (
    <div>
      <div id="nav-container">
        <BrowserRouter>
          <Navbar setCurrentUser={setCurrentUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/lineup'>
              <Lineup />
            </Route>
            <Route exact path='/schedule'>
              <Schedule />
            </Route>
            <Route exact path='/tickets'>
              <Tickets loggedIn={loggedIn} />
            </Route>
            <Route exact path='/login'>
              <Login setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path='/signup'>
              <Signup setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path='/profile'>
              <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;