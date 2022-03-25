import Login from './components/Login.js'
import { useState, useEffect } from 'react';
import Signup from './components/Signup';

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
      <Login onLogin={setUser}/>
      <h1>Dating welcome</h1>
      <Signup onLogin={setUser}/>
    </div>
  );
}

export default App;
