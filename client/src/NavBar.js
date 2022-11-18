import { NavLink } from "react-router-dom";

function NavBar({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div className="flex items-center justify-between flex-wrap p-10 mx-auto bg-black">
      <nav
        className="text-white space-x-5 uppercase font-mono font-extrabold text-2xl flex"
        id="navbar"
      >
        <div className="hover:scale-110 transition duration-300 ease-in-out">
          <NavLink to="/">
            <a href="#calendar">Calendar</a>
          </NavLink>
        </div>
        <div className="hover:scale-110 transition duration-300 ease-in-out">
          <NavLink to="/profile">
            <a href="#user-profile">Profile</a>
          </NavLink>
        </div>
        <div className="hover:scale-110 transition duration-300 ease-in-out">
          <NavLink to="/workouts">
            <a href="#workouts">Workouts</a>
          </NavLink>
        </div>
        <div className="hover:scale-110 transition duration-300 ease-in-out">
          <NavLink to="/meals">
            <a href="#meals">Meals</a>
          </NavLink>
        </div>
        <div className="hover:scale-110 transition duration-300 ease-in-out text-red-300">
          <NavLink to="/">
            <a href="#log-out" onClick={handleLogout}>
              Logout
            </a>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
