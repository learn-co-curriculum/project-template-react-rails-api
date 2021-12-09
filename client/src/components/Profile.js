import React from 'react';
import '../Profile.css'
import { Label, Button } from "../styles"
import {prompts} from './prompts n solution/prompt.js'

function Profile({user}) {

    function conquered(prompts) {
        return prompts.map(prompt => {
            if (user.score <= prompt.id) {
                return (<div>
                    <Label>Q{prompt.id}</Label>
                    <button>See Question</button>
                    </div>)
            }}
            )
    }
    
    return (
        <div id="profile-card">
            <div className="grid-1">
                <h1>User Profile</h1>
            </div>
            <div className="grid-2">
                <img id="profile-avatar" src={user.avatar.img_url} alt={user.avatar.name}/>
            </div>
            <div className="grid-3">
                <h2>Username: {user.username}</h2>
                <h3>Avatar: {user.avatar.name}</h3>
                <Button>Delete Profile</Button>
            </div>
            <div className="grid-4">
                <h2>Conquered Quest-ions</h2>
            </div>
            <div className="grid-5">
                {prompts.map(prompt => {
                return (<div>
                    {/* <Label>Q{prompt}</Label> */}
                    <Button>See Question</Button>
                    </div>)}
                )}
            </div>
        </div>
    )
}

export default Profile