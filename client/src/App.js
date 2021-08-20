import React, {useState, useEffect} from 'react'
import LoginPage from './Components/LoginPage';
import Home from './Components/Home' 
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOut() {
    fetch("/logout", { method: "DELETE"}).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    })
  }

  return (
    <Router>
      <Navbar user={user} handleLogOut={handleLogOut} />
      { !user 
      ? 
      <LoginPage setUser = {setUser}/>
      :
      <>
      <Switch>
        <Route path="/" exact component={() => <Home user={user}/>} /> 
      </Switch>
      <Switch>
        <Route path="/signup" exact component={() => <LoginPage setUser = {setUser}/>} /> 
      </Switch>
      </>
      }
    </Router>
  );
}

export default App;