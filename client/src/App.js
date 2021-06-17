import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/login/Login';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Index from './components/login/Index';
import NavBar from './components/NavBar'
import Wellness from './pages/Wellness';
import Therapist from './pages/Therapist';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Index onLogin={setUser} />;

  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <Router>
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/wellness">
          <Wellness />
        </Route>
        <Route path="/therapist">
          <Therapist />
        </Route>
      </Switch>
    </main>
      </Router>
  </>
  );
}

export default App;
