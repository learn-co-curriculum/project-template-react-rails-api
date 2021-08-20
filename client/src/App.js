import './App.css';
import React, {useState, useEffect} from 'react'
import Login from './Components/Login'
import SignUp from './Components/SignUp';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser = {setUser}/>;

  return (
    <div className="App">
      <SignUp
        setUser = {setUser}
      />
    </div>
  );
}

export default App;