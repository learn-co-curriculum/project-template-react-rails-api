import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import ProfileUpdateAge from "./ProfileUpdateAge";

function Profile(){

    const [user, setUser] = useState("")
    const [age, setAge] = useState(user.age)
    const [sex, setSex] = useState(user.sex)
    const [calories_goal, setCaloriesGoal] = useState(user.calories_goal)
    const [username, setUsername] = useState(user.username)

    useEffect(() => {
        fetch("/me")
        .then(resp => resp.json())
        .then(data => setUser(data))
    }, [])

    function handleAgeSubmit(e) {
        e.preventDefaut()
      }
    
    function handleAge(e){
        console.log(e)
    }
  

    return (
    <div>
        <NavBar />
        <div className="profileContainer">
            <div className="profileInformation">
                <h1>Your Profile</h1> 
                <h2>Personal Information</h2>
                <p>Username: {user.username}</p> 
                <p>
                    Age: {user.age}
                    <ProfileUpdateAge age={age} handleAge={handleAge} handleAgeSubmit={handleAgeSubmit}/>
                </p>
                <p>Sex: {user.sex}   <button>Update Sex</button></p>
                <h2>Personal Goals</h2>
                <p>Daily Calories Goal: {user.calories_goal}   <button>Update Goal</button></p>
            </div>
        </div>
     </div>
    )

}

export default Profile;