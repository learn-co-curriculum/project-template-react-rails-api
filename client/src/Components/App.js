import { useEffect, useState } from 'react'
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom'

// import react components
import SignUp from "./SignUp";
import Login from "./Login";
import Logout from './Logout'
import Navbar from "./Navbar/Navbar";
import Home from "./Home";

let App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  console.log(currentUser)

  useEffect(() => {
    console.log('hello world')
    fetch('/user').then(res => {
      if(res.ok){
        console.log('hello')
        res.json().then(user => setCurrentUser(user))
      } else {
        setCurrentUser(null)
      }
    })
  },[])

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
    console.log(currentUser)
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
              <Route exact path="logout">
                <Logout setCurrentUser={setCurrentUser}/>
              </Route>
              <Route exact path='/'>
                <Home currentUser={currentUser}/>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App;
