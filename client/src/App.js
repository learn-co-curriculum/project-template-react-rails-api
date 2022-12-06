import './App.css';
import React from "react"
import { Routes , Route, BrowserRouter as Router} from "react-router-dom"
import LoginForm from './LoginPage/LoginForm';
import CreateAccountForm from "./CreateAccount/CreateAccountForm"
import TodayPage from "./TodayPage/Today.js"
import Profile from './Profile';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route 
          exact path="/Login" 
          element={<LoginForm/>}
        />
        <Route 
          exact path="/create_account" 
          element={<CreateAccountForm/>}
        />
        <Route
          exact path="/"
          element={<TodayPage/>}
        />
        <Route
          exact path="/profile"
          element={<Profile/>}
        />
      </Routes>
    </Router>    </>
  );
}

export default App;
