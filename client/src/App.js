import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import BookCollection from './components/BookCollection';


function App() {
  return (
    <Router>
      <div> 
        <nav>
          <ul>
            <li>
              <Link to = "/books">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path ="/books">
            <BookCollection/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
