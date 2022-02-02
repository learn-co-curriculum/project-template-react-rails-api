import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import HomeNavBar from "./components/HomeNavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AdoptablePets from "./components/AdoptablePets";
import Portal from "./components/Portal"

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("/pets")
    .then(r=>r.json())
    .then(pets => setPets(pets))
  }, [])

  return (
    <div className="App">
      <HomeNavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/adoptablepets">
          <AdoptablePets pets={pets}/>
        </Route>
        <Route exact path="/portal">
          <Portal />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
