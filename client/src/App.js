import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookCollection from "./components/BookCollection";
import LoginSignupPage from "./components/LoginSignupPage";
import BookDetails from "./components/BookDetails";
import MyShelf from "./components/MyShelf";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  if (!currentUser) return <LoginSignupPage onLogin={setCurrentUser}/>

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/books">Home</Link>
            </li>
            <li>
              <Link to="/myshelf">My Shelf</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route  path="/books/:id" exact>
            <BookDetails />
          </Route>
          <Route path="/books" exact>
            <BookCollection currentUser={currentUser} />
          </Route>
          <Route path = "/myshelf">
            <MyShelf currentUser={currentUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
