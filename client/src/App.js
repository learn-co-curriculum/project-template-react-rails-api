import './App.css';
import React, {useState} from 'react'
import Login from './Components/Login'
import SignUp from './Components/SignUp';

function App() {
  const [user, setUser] = useState(false)

  return (
    <div className="App">
      <Login 
        setUser = {setUser}
      /> 
      <SignUp
        setUser = {setUser}
      />
    </div>
  );
}

export default App;