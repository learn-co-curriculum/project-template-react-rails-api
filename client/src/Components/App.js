import { useEffect, useState } from 'react'
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom'

// import react components
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

let App = () => {
  const [currentUser, setCurrentUser] = useState(true)

  if (currentUser === null) {
    return (
      <div className="App">
        <NavBar
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          />
        <div>
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
      <div className="App">
        <NavBar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <div>
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
