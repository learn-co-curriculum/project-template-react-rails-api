import { NavLink } from "react-router-dom";

function NavBar({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div>
      <nav id="navbar">
        <NavLink to="/">
          <ul className="navicons">Calendar</ul>
        </NavLink>
        <NavLink to="/profile">
          <ul className="navicons">User</ul>
        </NavLink>
        <NavLink to="/workouts">
          <ul className="navicons">Workouts</ul>
        </NavLink>
        <NavLink to="/meals">
          <ul className="navicons">Meals</ul>
        </NavLink>
        <ul className="navicons" onClick={handleLogout}>
          Log out
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
