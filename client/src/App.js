import logo from './logo.svg';
import './App.css';
import CreateSale from './Components/CreateSale';
import { Route, Routes, Link, BrowserRouter, Navigate } from 'react-router-dom';
import DisplaySale from './Components/DisplaySale';
import Browse from './Components/Browse';
import Account from './Components/Account';
import Home from './Components/Home';
import Login from './Components/Login';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [goAfterLogin, setGoAfterLogin] = useState("");
  function doSetGoAfterLogin(e){
    setGoAfterLogin(e)
  }
  return (
    <div style={{width:"max", height:"max"}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<div>DOasdasasdasddsfadsasOO IT</div>}></Route>
            <Route path="/sale" element = {<CreateSale/>}>
            </Route>
            <Route path="/sale/:id" element={<DisplaySale/>}>
            </Route>
            <Route path="/account" element={<Account/>}>
            </Route>
            <Route path="/home" element={<Home setGoAfterLogin={doSetGoAfterLogin}/>}>
            </Route>
            <Route path="/browse" element={<Browse/>}>
            </Route>
            <Route path="/login" element={<Login afterloginpath={goAfterLogin}/>}>
            </Route>
            <Route path="*" element={<Navigate to="/home"/>}>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
