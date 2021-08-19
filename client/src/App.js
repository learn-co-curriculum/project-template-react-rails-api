import './App.css';
import React, {useState} from 'react'
import Login from './Components/Login'
import SignUp from './Components/SignUp';

function App() {
  const [user, setUser] = useState([])

  return (
    <div className="App">
      <Login /> 
      <SignUp />
    </div>
  );
}

export default App;
