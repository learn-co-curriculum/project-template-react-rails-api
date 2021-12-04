import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
