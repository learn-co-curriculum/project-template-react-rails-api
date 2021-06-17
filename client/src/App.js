import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/login/Login';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Index from './components/login/Index';


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
    {/* <NavBar user={user} setUser={setUser} /> */}
    <Router>
    <main>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
      </Router>
  </>
  );
}

export default App;
