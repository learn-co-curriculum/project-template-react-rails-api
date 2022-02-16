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
import Applications from "./components/Applications";
import ApplicantNavBar from "./components/ApplicantNavBar";
// import ApplicantPortal from "./components/ApplicantPortal";
import ApplicantSignUp from "./components/ApplicantSignUp";
import AdminNavBar from "./components/AdminNavBar";
import AdminPortal from "./components/AdminPortal";
import AdminPets from "./components/AdminPets";
import AdminApplicants from "./components/AdminApplicants";
import AdminFosters from "./components/AdminFosters";
import AdminApplications from "./components/AdminApplications";
import AdminSignUp from "./components/AdminSignUp";
import FosterNavBar from "./components/FosterNavBar";
import FosterPortal from "./components/FosterPortal";
import FosterSignUp from "./components/FosterSignUp";
import FosterPets from "./components/FosterPets";

function App() {
  const [pets, setPets] = useState([]);
  const [users, setUsers] = useState([]);
  const [fosters, setFosters] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [applications, setApplications] = useState([]);
  const [petFosters, setPetFosters] = useState([]);
  const [portal, setPortal] = useState("Home");

  //auto-login for existing users
  useEffect(() => {
    fetch("/me")
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
  // set applicants
  useEffect(() => {
    fetch("/applicants")
    .then(r=>r.json())
    .then(applicants => setApplicants(applicants))
  }, [])
  // set applications from pet_applications
  useEffect(() => {
    fetch("/pet_applications")
    .then(r=>r.json())
    .then(apps => setApplications(apps))
  }, [])
  // set applications from pet_fosters
  useEffect(() => {
    fetch("/pet_fosters")
    .then(r=>r.json())
    .then(petFosters => setPetFosters(petFosters))
  }, [])
  //logout user
  function handleLogOut() {
    //reset portal and current User
    setPortal("Home");
    console.log("Set portal to Home")
    setCurrentUser("");
    console.log("Logged Out!")
    //delete session w "/logout"
    fetch('/logout', {method: "DELETE"})
    .then(res => {
        if (res.ok) {
          setCurrentUser("")
          setPortal("Home")
        } else {
          console.log("COULDN'T LOG OUT IN handleLogOut() in App.js")
        }
      })
  }

  if (portal === "Home") {
    return (
      <div className="App">
        <HomeNavBar handleLogOut={handleLogOut}/>

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
            <Login setCurrentUser={setCurrentUser} portal={portal} setPortal={setPortal}/>
          </Route>
          <Route exact path="/homeportal/signup">
            <ApplicantSignUp 
              setCurrentUser={setCurrentUser} 
              setPortal={setPortal} />
          </Route>
          <Route exact path="/adminportal/signup">
            <AdminSignUp setCurrentUser={setCurrentUser} setPortal={setPortal} />
          </Route>
          <Route exact path="/fosterportal/signup">
            <FosterSignUp fosters={fosters} setFosters={setFosters} setCurrentUser={setCurrentUser} setPortal={setPortal} />
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
            <Applications currentUser={currentUser} applications={applications}/>
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
            <AdminPortal 
              setCurrentUser = {setCurrentUser}  
              portal = {portal} setPortal = {setPortal} 
              pets = {pets} setPets = {setPets} 
              petFosters={petFosters} setPetFosters={setPetFosters}
              users = {users} setUsers = {setUsers} 
              fosters = {fosters} setFosters = {setFosters} 
              applicants = {applicants} setApplicants = {setApplicants} 
              applications = {applications} setApplications = {setApplications} 
            />
          </Route>
          <Route exact path="/adminportal/pets">
            <AdminPets pets={pets} setPets={setPets} fosters={fosters} setFosters={setFosters} petFosters={petFosters} setPetFosters={setPetFosters}/>
          </Route>
          <Route exact path="/adminportal/applications">
            <AdminApplications applications={applications} setApplications={setApplications}/>
          </Route>
          <Route exact path="/adminportal/applicants">
            <AdminApplicants pets={pets} applicants={applicants} setApplicants={setApplicants}/>
          </Route>
          <Route exact path="/adminportal/fosters">
            <AdminFosters fosters={fosters} setFosters={setFosters} pets={pets} setPets={setPets} petFosters={petFosters} setPetFosters={setPetFosters} />
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  } else if (portal === "Foster") {
    return (
      <div className="App">
        <FosterNavBar currentUser={currentUser} handleLogOut={handleLogOut}/>

        <Switch>
          <Route exact path="/fosterportal">
            <FosterPortal 
              currentUser={currentUser} setCurrentUser={setCurrentUser} 
              users={users} setUsers={setUsers}
              portal={portal} setPortal={setPortal} 
              pets={pets} setPets={setPets}
            />
          </Route>
          <Route exact path="/fosterportal/pets">
            <FosterPets currentUser={currentUser} petFosters={petFosters} setPets={setPets}/>
          </Route>
        </Switch> 
    
        <Footer />
      </div>
    );
  }


}

export default App;
