import React, {useState} from 'react'
import '../App.css';

function AssignAvatar({setAvatar, avatars}) {


    // function renderAvatars() {
    //     return (avatars.map(avatar => {
    //             <div>
    //                 <input id={avatar.id} type="radio" name="selectavatar" onClick={setAvatar(avatar)}></input>
    //                 <img src={avatar.img_url} alt={avatar.name}/>
    //             </div>})
    //     )
    // }


    return (
        <div id="avatar-container">
            {(avatars.map(avatar => {
                return <img key={avatar.id} className="avatar-icon" src={avatar.img_url} alt={avatar.name} onClick={() => setAvatar(avatar)}/> })
        )}
        </div>
    )
}

export default AssignAvatar
