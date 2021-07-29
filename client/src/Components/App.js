import { useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

// import react components
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

let App = () => {
  const [currentUser, setCurrentUser] = useState(true)

  if (currentUser === null) {
    return (
      <>
        <NavBar
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          />
        <div className="App">
          <Switch>
            <Route exact path='/login'>
              <Login setCurrentUser={setCurrentUser}/>
            </Route>
            <Route exact path='/signup'>
              <SignUp
                setCurrentUser={setCurrentUser}
              />
            </Route>
          </Switch>
        </div>
      </>
    )
  } else {
    return (
      <>
        <NavBar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <div className="App">
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
        </div>
      </>
    )
  }
}

export default App;
