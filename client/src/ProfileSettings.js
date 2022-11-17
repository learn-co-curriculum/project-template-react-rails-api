import { NavLink } from "react-router-dom";

function ProfileSettings({ user, updateUserInfo }) {

    //FUNCTION TO UPDATE USERS NAME AND PROFILE PIC
    function updatingUserInfo(event) {
        event.preventDefault()
        user.name = event.target.nameofuser.value
        user.image = event.target.profilepic.value 
        console.log(user)
        console.log(event.target.nameofuser.value)
        console.log(event.target.profilepic.value )
        //SENDS THE USER INFO BACK UP TO APP TO HANDLE
        updateUserInfo(user)
    } 

    return (
        <div>
            <form id="profile-setting-form" onSubmit={updatingUserInfo}>
                <label htmlFor="nameofuser">Name: </label>
                <input name="nameofuser" type="text" id="nameofuser" />
                <label htmlFor="profilepic">Link to Image: </label>
                <input name="profilepic" type="text" id="profilepic" />
                <button type="submit">Save User Profile</button>
                <NavLink to="/profile">
                    <button>Go Back To Profile</button>
                </NavLink>
            </form>
        </div>
    )
}

export default ProfileSettings