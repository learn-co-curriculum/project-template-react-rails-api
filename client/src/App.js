import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  // const [showStuff, setStuff] = useState([])

  //TEST CALL TO THE API AND GETTING DATA BACK COMPLETE

  // useEffect(() => {
  //   fetch('https://wger.de/api/v2/equipment', {
  //     headers: { 'Content-Type' : 'application/json' },
  //     method: 'GET'
  //   })
  //   .then(res => {
  //     // console.log(res)
  //     return res.json()
  //   })
  //   .then(data => {
  //     console.log(data.results)
  //     setStuff(data.results)
  //   })
  // }, [])

  // function showEqipment(item) {
  //   return (
  //     <li>{item.name}</li>
  //   )
  // }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* {showStuff.map(item => showEqipment(item))} */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
