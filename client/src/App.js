import './App.css';
import Login from './components/Login';
import Signup from './components/Signup'
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import styled from 'styled-components';
import {Button} from "./styles"

function App() {
  const [user, setUser] = useState(null);

  function handleLogout() {
    fetch("/logout", { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route exact path='/login' element={user === null ? <Login onLogin={setUser}/> :
         <Button onClick={() => handleLogout()}/>} />
        <Route exact path='/signup' element={user === null ? <Signup onLogin={setUser}/> : null} />
      </Routes>
    </div>
  );
}


export default App;
