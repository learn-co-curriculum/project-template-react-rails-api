import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import HomeNavBar from "./components/HomeNavBar";
import Login from "./components/Login";
import Portal from "./components/Portal";
import AdoptablePets from "./components/AdoptablePets";
import ApplicantNavBar from "./components/ApplicantNavBar";
import ApplicantPortal from "./components/ApplicantPortal";
import ApplicantSignUp from "./components/ApplicantSignUp";
import AdminNavBar from "./components/AdminNavBar";
import AdminPortal from "./components/AdminPortal";
import AdminPets from "./components/AdminPets";

function App() {
  const [pets, setPets] = useState([]);
  const [users, setUsers] = useState([]);
  const [fosters, setFosters] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [applications, setApplications] = useState([]);
  const [portal, setPortal] = useState("Admin");

  //auto-login for existing users
  useEffect(() => {
    fetch("/me") // "/auth" in Ix's lecture - https://learning.flatironschool.com/courses/4552/pages/video-authorization-client?module_item_id=346181
    .then(res => {
      if(res.ok) {
        res.json().then((user) => {
          setCurrentUser(user)
          setPortal(user.role)
        })
      }
    })
  }, [])
  // set pets
  useEffect(() => {
    fetch("/pets")
    .then(r=>r.json())
    .then(pets => setPets(pets))
  }, [])
  // set users
  useEffect(() => {
    fetch("/users")
    .then(r=>r.json())
    .then(users => setUsers(users))
  }, [])
  // set fosters
  useEffect(() => {
    fetch("/fosters")
    .then(r=>r.json())
    .then(fosters => setFosters(fosters))
  }, [])
  // set applications from pet_applications
  useEffect(() => {
    fetch("/pet_applications")
    .then(r=>r.json())
    .then(apps => setApplications(apps))
  }, [])
  //logout user
  function handleLogOut() {
    //reset portal and current User
    setPortal("Home");
    console.log("Set portal to  Home")
    setCurrentUser({});
    console.log("Logged Out!")
    //delete session w "/logout"
    fetch('/logout', {method: "DELETE"})
    .then(res => {
        if (res.ok) {
          setCurrentUser("")
        }
      })
  }

  if (portal === "Home") {
    return (
      <div className="App">
        <HomeNavBar currentUser={currentUser} handleLogOut={handleLogOut}/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/adoptablepets">
            <AdoptablePets currentUser={currentUser} pets={pets}/>
          </Route>
          <Route exact path="/homeportal">
            <Portal 
              setCurrentUser={setCurrentUser} 
              setPortal={setPortal} />
          </Route>
          <Route exact path="/homeportal/login">
            <Login setCurrentUser={setCurrentUser} setPortal={setPortal}/>
          </Route>
          <Route exact path="/homeportal/signup">
            <ApplicantSignUp 
              setCurrentUser={setCurrentUser} 
              setPortal={setPortal} />
          </Route>
        </Switch> 

        <Footer />
      </div>
    );

  } else if (portal === "Applicant") {
    return (
      <div className="App">
        <ApplicantNavBar currentUser={currentUser} handleLogOut={handleLogOut}/>

        <Switch>
          <Route exact path="/applicantportal">
            <ApplicantPortal currentUser={currentUser} applications={applications} setApplications={setApplications} pets={pets}/>
          </Route>
          <Route exact path="/applicantportal/adoptablepets">
            <AdoptablePets currentUser={currentUser} pets={pets} setApplications={setApplications} />
          </Route>
        </Switch> 
    
        <Footer />
      </div>
    );
  } else if (portal === "Admin") {
    return (
      <div className="App">
        <AdminNavBar currentUser={currentUser} handleLogOut={handleLogOut}/>

        <Switch>
          <Route exact path="/adminportal">
            <AdminPortal />
          </Route>
          <Route exact path="/adminportal/pets">
            <AdminPets currentUser={currentUser} pets={pets} setApplications={setApplications}/>
          </Route>
          <Route exact path="/adminportal/applicants">
          </Route>
          <Route exact path="/adminportal/fosters">
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  } else if (portal === "Foster") {
    // work on later
  }


}

export default App;
