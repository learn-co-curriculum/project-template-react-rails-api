import './App.css';
import Login from './components/Login';
import Signup from './components/Signup'
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import GameBoard from './components/GameBoard';

function App() {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('/questions')
      .then(resp => resp.json())
      .then(data => {
          console.log(data)
          setQuestions(data)
      });
    }, []);

  return (
    <div className="App">
      <Header user={user}/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/login' element={user === null ? <Login onLogin={setUser}/> : null} />
        <Route exact path='/signup' element={user === null ? <Signup onLogin={setUser}/> : null} />
        <Route exact path='/play' element={<GameBoard/>} />
        <Route exact path= '/profile' element={user? <Profile user={user} questions={questions} /> : null} />
      </Routes>
    </div>
  );
}


export default App;
