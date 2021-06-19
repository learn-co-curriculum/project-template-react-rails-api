import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/login/Login';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Index from './components/login/Index';
import NavBar from './components/NavBar'
import Wellness from './pages/Wellness';
import Therapist from './pages/Therapist';
import Trainers from './pages/Trainers'
import Trainerscheduler from './pages/Trainerscheduler';


function App() {
  const[user, setUser] = useState(null);
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/specialists")
      .then((r) => r.json())
      .then(setSpecialists);
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
        <Route path="/trainers">
      <Trainers specialists={specialists} />
      </Route>
    <Route path="/trainerschedular">
    <Trainerscheduler />
    </Route>
      </Switch>
    </main>
      </Router>
  </>
  );
}

export default App;
