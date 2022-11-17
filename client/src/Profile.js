import { NavLink } from "react-router-dom";

function Profile({ user }) {
    console.log(user)
    return (
        <div>
            <NavLink to="/profilesettings">
                <button>Edit User Settings</button>
            </NavLink>
            <h3>hi! {user.id}</h3>
            <h3>this is my avatar:</h3>
            <h3>Meals List</h3>
            <h3>Workout List</h3>
        </div>
    )
}

export default Profile;