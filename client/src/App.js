import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Homepage from './Homepage';

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
    <Homepage />
  );
}

export default App;
