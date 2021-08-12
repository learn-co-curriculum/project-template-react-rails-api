import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookCollection from "./components/BookCollection";
import SignupForm from "./components/SignupForm";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/books">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/books">
            <BookCollection />
          </Route>
          <Route exact path="/signup">
            <SignupForm setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
