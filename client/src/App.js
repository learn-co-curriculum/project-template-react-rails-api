// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect } from "react";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import MealForm from "./MealForm";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Calendar from "./Calendar";
import WorkOutForm from "./WorkOutForm";
import Profile from "./Profile";
import ProfileSettings from "./ProfileSettings";
import Reviews from "./WorkOutReviews"

function App() {
  const [user, setUser] = useState(null);
  const [needToRegister, setNeedToRegister] = useState(false);
  const [userWorkOuts, setUserWorkOuts] = useState([])
  const [itemToReview, setItemToReview] = useState(null)

  //CHECKS TO SEE IF CURRENT USER MATCHES SESSION USER
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  //SETS USER AND HANDLES STATE FOR SHOWING COMPONENTS
  function onLogin(user) {
    setUser(user);
  }

  function onLogout() {
    setUser("");
  }

  function onRegister(value) {
    setNeedToRegister(value);
  }

  //SETS USER WORKOUTS
  function getUserWorkOut(workout){
    console.log("this is from app to set the data")
    console.log(workout)
    setUserWorkOuts([...userWorkOuts, workout])
    console.log(userWorkOuts)
  }

  //REQUEST BACKEND TO UPDATE MY SHIT
  function updateUserInfo(user) {
    setUser(user);
    //call fetch to update current user info on the backend
    fetch("/updateUser", {
      method: "PATCH",
      body: JSON.stringify({
        username: user.username,
        name: user.name,
        image: user.image,
        meal: user.meal,
        workout: user.workout,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
  }

  //GETS THE ITEM TO REVIEW
  function getItemToReview(item) {
    setItemToReview(item)
  }
 

  if (!user) {
    //RENDER BASED ON REGISTER OR LOGIN
    const componentToRender = needToRegister ? (
      <RegisterPage onLogin={onLogin} onCancelClick={onRegister} />
    ) : (
      <LoginPage onLogin={onLogin} onRegisterClick={onRegister} />
    );
    return componentToRender;
  } else {
    return (
      <div className="nav-links">
        <NavBar onLogout={onLogout} user={user} />
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/workouts" element={<WorkOutForm getWorkOuts={getUserWorkOut}/>} />
          <Route path="/meals" element={<MealForm />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} listOfWorkOuts={userWorkOuts} setItemToReview={getItemToReview}/>}
          />
          <Route
            path="/profilesettings"
            element={
              <ProfileSettings user={user} updateUserInfo={updateUserInfo} />
            }
          />
          <Route path="/review" element={<Reviews itemToReview={itemToReview}/>} />
        </Routes>
      </div>
    );
  }
}

export default App;