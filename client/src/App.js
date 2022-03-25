import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  function onLogin(u){
    console.log(u)
  }

  return (
    <div className="App">
      <Login onLogin={setUser}/>
      <h1>Dating App</h1>
    </div>
  );
}

export default App;
