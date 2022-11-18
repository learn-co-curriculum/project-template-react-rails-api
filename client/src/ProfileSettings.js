import { NavLink } from "react-router-dom";

function ProfileSettings({ user, updateUserInfo }) {
  //FUNCTION TO UPDATE USERS NAME AND PROFILE PIC
  function updatingUserInfo(event) {
    event.preventDefault();
    user.name = event.target.nameofuser.value;
    user.image = event.target.profilepic.value;
    console.log(user);
    console.log(event.target.nameofuser.value);
    console.log(event.target.profilepic.value);
    //SENDS THE USER INFO BACK UP TO APP TO HANDLE
    updateUserInfo(user);
  }

  return (
    <div>
      <form
        className="flex flex-col items-center max-h-max font-mono"
        id="profile-setting-form"
        onSubmit={updatingUserInfo}
      >
        <div className="p-4">
          <label htmlFor="nameofuser">Name: </label>
          <input
            className="border-2 border-red-500 rounded-md"
            name="nameofuser"
            type="text"
            id="nameofuser"
          />
        </div>
        <div className="p-4">
          <label htmlFor="profilepic">Link to Image: </label>
          <input
            className="border-2 border-red-500 rounded-md"
            name="profilepic"
            type="text"
            id="profilepic"
          />
        </div>
        <div className="p-4">
          <button
            className="bg-red-400 border-4 border-red-400 rounded-md"
            type="submit"
          >
            Save User Profile
          </button>
        </div>
        <NavLink to="/profile">
          <button className="bg-red-400 border-4 border-red-400 rounded-md">
            Go Back To Profile
          </button>
        </NavLink>
      </form>
    </div>
  );
}

export default ProfileSettings;
