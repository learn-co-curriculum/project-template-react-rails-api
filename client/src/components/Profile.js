import React from 'react';
import '../Profile.css'
import { Label } from "../styles"

function Profile({user, questions}) {

    function conquered(questions) {
        return questions.map(question => {
            if (user.score <= question.id) {
                return (<div>
                    <Label>Q{question.id}</Label>
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
                <button>Edit Profile</button>
                <button>Delete Profile</button>
            </div>
            <div className="grid-4">
                <h2>Conquered Quest-ions</h2>
            </div>
            <div className="grid-5">
                {questions.map(question => {
                return (<div>
                    <Label>Q{question.id}</Label>
                    <button>See Question</button>
                    </div>)}
                )}
            </div>
        </div>
    )
}

export default Profile