import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";

import HomeNavBar from "./components/HomeNavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AdoptablePets from "./components/AdoptablePets";
import Portal from "./components/Portal"

// Color Palatte
// Text - Dark Grey #424242
// Primary Color - E
// Secondary Color - #


// Petfinder API Key: K7wpPYjZCTiRxVfWsCeKixCdj9iqZ2IKVHTuLbmeWA1XmTBB0M
// Petfinder Secret: t2MHR3Cw0WlithMtbyOfwN7aRv8c2iBWeApgTbWw
// Petfinder uses OAuth for secure authentication

function App() {
  return (
    <div className="App">
      <HomeNavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/adoptablepets">
          <AdoptablePets />
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
