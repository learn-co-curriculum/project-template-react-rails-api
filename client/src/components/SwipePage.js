import React from "react";
import Profile from "./Profile";
import { useEffect, useState } from "react";

function SwipePage({ profiles, setProfiles, user }){

    const currentProfile = profiles.filter((p) => p.id !== user.id )

    useEffect(() => {
        fetch("/users")
    .then((res) => res.json())
    .then((data) => setProfiles(data))}, 
    [])



   


    return(
        <div>
            <h1>
                Welcome to the Swipe Page
            </h1>
            <div >
                <Profile currentProfile={currentProfile}/>
            </div>
        </div>
    )
}

export default SwipePage;