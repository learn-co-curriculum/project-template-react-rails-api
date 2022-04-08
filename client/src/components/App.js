// import logo from './logo.svg';
import '../App.css';
import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import StockFeed from './StockFeed'
import Login from './Login'
import SignUp from "./SignUp"
import UserPortfolio from "./UserPortfolio"
import Navbar from "./Navbar"


function App() {
  const [currentUser, setCurrentUser] = useState()
  const [error, setError] = useState(null)
  const [userStocks, setUserStocks] = useState([])

  useEffect (() => {
    fetch("/current_user")
    .then(r => r.json())
    .then(data => {
      data ? setCurrentUser(data) : setCurrentUser(null)
  }) 
}, [])

  

  useEffect(() => {
      fetch("/current_user")
      .then(r => r.json())
      .then(user => setUserStocks(user.user_stocks))
  }, [])

  console.log(userStocks)
  

  return (
    <div className="App">
      <Navbar 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser} 
      />
     <Switch>
       <Route exact path={currentUser ? "/" : "login"}>
         <StockFeed currentUser={currentUser} userStocks={userStocks} setUserStocks={setUserStocks}/>
       </Route>
       <Route exact path={currentUser ? "/portfolio" : "login"}>
         <UserPortfolio userStocks={userStocks} setUserStocks={setUserStocks}/>
       </Route>
       <Route exact path="/login">
        <Login error={error} setError={setError} setCurrentUser={setCurrentUser} /> 
       </Route>
       <Route exact path="/signup">
        <SignUp error={error} setError={setError} setCurrentUser={setCurrentUser} /> 
       </Route>
     </Switch>
    </div>
  );
}

export default App;
