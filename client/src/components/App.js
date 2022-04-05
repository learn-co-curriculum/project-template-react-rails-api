// import logo from './logo.svg';
import '../App.css';
import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import StockFeed from './StockFeed'
import Login from './Login'


function App() {
  const [currentUser, setCurrentUser] = useState()
  const [error, setError] = useState(null)

  useEffect (() => {
    fetch("/current_user")
    .then(r => r.json())
    .then(data => {
      data ? setCurrentUser(data) : console.log("No login registered")
  }) 
}, [])


  

  return (
    <div className="App">
     <Switch>
       <Route exact path="/">
         <StockFeed />
       </Route>
       <Route exact path="/login">
        <Login error={error} setError={setError} setCurrentUser={setCurrentUser} /> 
       </Route>
     </Switch>
    </div>
  );
}

export default App;
