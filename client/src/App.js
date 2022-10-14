 import {useEffect, useState} from 'react'
import React from  'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import AddYogaTutorials from './components/AddYogaTutorials'
import YogaTutorials from './components/YogaTutorials'
import Signup from './components/Signup'
import Login from './components/Login'
import Breadcrumbs from './components/Breadcrumb'
import { Link } from "react-router-dom";

const App = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);
  
    if (!user) return <Login onLogin={setUser} />;
    return (
<>
<Header/>
<div className='container' style={{background:"#dede"}}> 
<Breadcrumbs/>
{/* <YogaTutorials/> */}
{/* <AddYogaTutorials/> */}
<Login />
{/* <Signup/> */}

<Footer/>
</div>

<Router>
<Routes>
<Route to="./reviews" component={Reviews} />
</Routes>
</Router>
</>

 );
}
export default App
