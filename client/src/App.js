import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'

function App() {

  function onLogin(u){
    console.log(u)
  }

  return (
    <div className="App">
      <Login onLogin={onLogin}/>
      <h1>Dating App</h1>
    </div>
  );
}

export default App;
