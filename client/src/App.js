import Login from './components/Login.js'
import { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Logout from './components/Logout.js';
import SwipePage from './components/SwipePage.js';
import NavBar from './components/NavBar.js';
import Matches from './components/Matches.js';
import { Route, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState([]);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);




const welcome = (user ? `Welcome ${user.name}` : "Login to Start Swiping")

  return (
    
    <div className="App">
      <NavBar user={user}/>
      {user ? null : <Signup onLogin={setUser}/> }
      <nav className="nav-container">
        {user ? <Logout onLogout={setUser}/> : <Login onLogin={setUser}/> }
       </nav> 
      <h1>{welcome}</h1>


      <Switch>
      <Route exact path="/">
      {user ? <SwipePage profiles={profiles} setProfiles={setProfiles} user={user}/> : null}
      </Route>
      <Route exact path="/matches">
      <Matches />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
