import React, {useState} from 'react'
import {Input} from "../styles";

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
        <div>
            {(avatars.map(avatar => {
                <div>
                    <input id={avatar.id} type="radio" name="selectavatar" onClick={setAvatar(avatar)}></input>
                    <img src={avatar.img_url} alt={avatar.name}/>
                </div>})
        )}
        </div>
    )
}

export default AssignAvatar
