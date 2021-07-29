import { useEffect, useState } from 'react'
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom'

// import react components
import SignUp from "./SignUp";
import Login from "./Login";
import Navbar from "./Navbar/Navbar";
import Home from "./Home";

let App = () => {
  const [currentUser, setCurrentUser] = useState(true)

  if (currentUser === null) {
    return (
      <div>
        <Navbar
          // currentUser={currentUser}
          // setCurrentUser={setCurrentUser}
          />
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path='/login'>
                <Login setCurrentUser={setCurrentUser}/>
              </Route>
              <Route exact path='/signup'>
                <SignUp setCurrentUser={setCurrentUser}/>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Navbar 
          // currentUser={currentUser}
          // setCurrentUser={setCurrentUser}
        />
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path='/login'>
                <Login setCurrentUser={setCurrentUser}/>
              </Route>
              <Route exact path='/signup'>
                <SignUp setCurrentUser={setCurrentUser}/>
              </Route>
              <Route exact path='/'>
                <Home/>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App;
