import logo from '../logo.svg';
import '../styles/App.css';
import { Switch, Route, Router } from "react-router-dom"; 
import RestaurantFeed from './RestaurantFeed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Switch> 
          <Route exact path="/restaurants">
              <RestaurantFeed />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
