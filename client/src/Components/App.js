import React from "react";
import { Route, Switch } from "react-router-dom";

import Character from "./Character";
import Equipment from "./Equipment";
import Homepage from "./Homepage";
import Minions from "./Minions";
import NavBar from "./Navbar";
import NewCharacterForm from "./NewCharacterForm";
import Outfits from "./Outfits";
import Spells from "./Spells";

function App() {
  let MY_URL = "http://localhost:4000";
  return (
    <div className="App">
      <h1>OP Character Builder</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage url={MY_URL} />
        </Route>
        <Route path="/NewCharacterForm">
          <NewCharacterForm url={MY_URL} />
        </Route>
        <Route path="/Minions/:id">
          <Minions url={MY_URL} />
        </Route>
        <Route exact path="/Outfits">
          <Outfits url={MY_URL} />
        </Route>
        <Route exact path="/Character">
          <Character url={MY_URL} />
        </Route>
        <Route exact path="/Equipment">
          <Equipment url={MY_URL} />
        </Route>

        <Route exact path="/Spells">
          <Spells url={MY_URL} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
