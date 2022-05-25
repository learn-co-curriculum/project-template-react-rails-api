import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import LoginPage from './Component/LoginPage';
import Home from './Component/Home';
import About from './Component/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar';
import Profile from './Component/Profile';
import StartShopping from './Component/StartShopping';
import Shoplist from './Component/Shoplist';
import Cart from './Component/Cart';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      if(data.error){
        setUser(null)
      }
      else {setUser(data)}
    })
  },[])
  console.log(user)

  
  return (
    <div>
      {user ?
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home user={user}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/Start_Shopping' element={<StartShopping />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart user={user}/>} />
            <Route path='/shoplist' element={<Shoplist />} />
          </Routes>
        </>
        :
        <LoginPage setUser={setUser} />}
    </div>
  );
}

export default App;





