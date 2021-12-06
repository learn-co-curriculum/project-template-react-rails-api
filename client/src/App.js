import './App.css';
import Login from './components/Login';
import Signup from './components/Signup'
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [user, setUser] = useState(null);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route exact path='/login' element={!user ? <Login onLogin={setUser}/>: null} />
        <Route exact path='/signup' element={!user ? <Signup onLogin={setUser}/> : null} />
      </Routes>
    </div>
  );
}

export default App;
