import React, {useState, useEffect} from 'react'
import LoginPage from './Components/LoginPage';
import Home from './Components/Home' 
import Navbar from './Components/Navbar/Navbar';
import ChoreForm from './Components/ChoreForm';
import SignUp from './Components/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState(null)
  const [chores, setChores] = useState([])

  const [isParent, setIsParent] = useState('')
  
  const [household, setHousehold] = useState([])

    
  useEffect(() => {
      fetch(`/chores`)
      .then(response => response.json())
      .then(data => {
          setChores(data)
      })
  },[])
  
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)

          setIsParent(user.is_parent)

          setHousehold(user.household)

        });
      }
    });
  }, []);

  function handleLogOut() {
    fetch("/logout", { method: "DELETE"}).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    })
  }

  return (
    <Router>
      <Navbar user={user} isParent={isParent} handleLogOut={handleLogOut} />
      { !user 
      ? 
      <LoginPage setUser = {setUser} setIsParent={setIsParent} setErrors={setErrors} errors = {errors}/>
      :
      <>
      <Switch>
        <Route path="/" exact component={() => <Home user={user} chores={chores} household={household}/>} /> 
      </Switch>
      <Switch>
        <Route path="/new-chore" exact component={() => <ChoreForm user={user} chores={chores} setChores={setChores}/>} />
      </Switch>
      <Switch>
        <Route path="/signup" exact component={() => <SignUp setUser = {setUser} setErrors = {setErrors}/>} />
      </Switch>
      </>
      }
    </Router>
  );
}

export default App;