import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import logo from '../logo.svg';
import '../App.css';

import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/">
            <Home user={user} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
