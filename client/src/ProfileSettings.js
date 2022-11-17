import { NavLink } from "react-router-dom";

function ProfileSettings() {
    return (
        <div>
            <form id="profile-setting-form">
                <label htmlFor="nameofuser">Name: </label>
                <input name="nameofuser" type="text" id="nameofuser" />
                <label htmlFor="profilepic">Link to Image: </label>
                <input name="profilepic" type="text" id="profilepic" />
                <NavLink to="/profile">
                    <button>Save User Profile</button>
                </NavLink>
            </form>
        </div>
    )
}

export default ProfileSettings