
import { useState } from "react";

function Profile( { currentProfile }){

    let randomProfile = currentProfile[Math.floor(Math.random() * currentProfile.length)];

    console.log(randomProfile)
    // console.log(randomProfile.name)
   

    return(
        <div id="profile_card">
            <h2>{randomProfile ? 
            <div>
            <p>{randomProfile.name}</p>
            <p>{randomProfile.age}</p>
            </div>
            
            : null}</h2>
            <button>Like</button>
            <button>Dislike</button>
        </div>
    )
}

export default Profile;