import './App.css';
import Login from './components/Login';
import Signup from './components/Signup'
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import GameBoard from './components/GameBoard';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div className="App">
      <Header setLoggedIn={setUser} loggedIn={user}/>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route exact path='/login' element={user === null ? <Login onLogin={setUser}/> :null} />
        <Route exact path='/signup' element={user === null ? <Signup onLogin={setUser}/> : null} />
        <Route exact path='/play' element={<GameBoard user={user} setUser={setUser}/>} />
      </Routes>
    </div>
  );
}


export default App;
