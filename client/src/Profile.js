import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import ProfileUpdateAge from "./ProfileUpdateAge";
import ProfileUpdateCalories from "./ProfileUpdateCalories";
import ProfileUpdateSex from "./ProfileUpdateSex";
import ProfileUpdateUsername from "./ProfileUpdateUsername";

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
        e.preventDefault()
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                age: age
            })
        })
        .then(resp => resp.json())
        .then((user) => setUser(user))
    }

    function handleSexSubmit(e) {
        e.preventDefault()
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                sex: sex
        })
    })
        .then(resp => resp.json())
        .then((user) => setUser(user))
    }
    function handleCaloriesSubmit(e) {
        e.preventDefault()
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                calories_goal: calories_goal
            })
        })
        .then(resp => resp.json())
        .then((user) => setUser(user))
    }

    function handleUsernameSubmit(e) {
        e.preventDefault()
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username
            })
        })
        .then(resp => resp.json())
        .then((user) => setUser(user))
    }


    function handleAge(e){
       setAge(e.target.value)
    }

    function handleSex(e){
        setSex(e.target.value)
    }
    
    function handleCalories(e){
        setCaloriesGoal(e.target.value)
    }

    function handleUsername(e){
        setUsername(e.target.value)
    }
    

    return (
    <div>
        <NavBar />
        <div className="profileContainer">
            <div className="profileInformation">
                <h1>Your Profile</h1> 
                <h2>Personal Information</h2>
                <p>
                    Username: {user.username}
                    <ProfileUpdateUsername handleUsername={handleUsername} username={username} handleUsernameSubmit={handleUsernameSubmit}/>
                </p> 
                <p>
                    Age: {user.age}
                    <ProfileUpdateAge age={age} handleAge={handleAge} handleAgeSubmit={handleAgeSubmit}/>
                </p>
                <p>
                    Sex: {user.sex}
                    <ProfileUpdateSex sex={sex} handleSex={handleSex} handleSexSubmit={handleSexSubmit}/>
                </p>
                <h2>Personal Goals</h2>
                <p>
                    Daily Calories Goal: {user.calories_goal}
                    <ProfileUpdateCalories calories_goal={calories_goal} handleCalories={handleCalories} handleCaloriesSubmit={handleCaloriesSubmit}/>
                </p>
            </div>
        </div>
     </div>
    )

}

export default Profile;