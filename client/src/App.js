import Login from './components/Login.js'
import { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Logout from './components/Logout.js';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);



  return (
    
    <div className="App">
      <nav className="nav-container">
        {user ? <Logout onLogout={setUser}/> : <Login onLogin={setUser}/> }
       </nav> 
      <h1>Dating welcome</h1>
      {user ? null : <Signup onLogin={setUser}/> }
    </div>
  );
}

export default App;
