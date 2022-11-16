// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Homepage from './Homepage';
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage';
import MealForm from './MealForm';
import { NavLink } from "react-router-dom";

function App() {

  const [user, setUser] = useState(null)
  const [needToRegister, setNeedToRegister] = useState(false)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogin(user) {
    setUser(user)
  }

  function onLogout() {
    setUser("")
  }

  function onRegister(value) {
    setNeedToRegister(value)
  }


  if (!user) {
    const componentToRender = needToRegister ? <RegisterPage onLogin={onLogin} onCancelClick={onRegister} /> : <LoginPage onLogin={onLogin} onRegisterClick={onRegister}/>;
    return componentToRender
  } else {
    return (
      <div>
        <h2>Welcome {user.username}!</h2>
        <Homepage onLogout={onLogout} />
      
      </div>
    );
  }

}

export default App;
