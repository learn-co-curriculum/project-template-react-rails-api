import { NavLink } from "react-router-dom";

function NavBar({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div>
      <nav className="nav-bar" id="navbar">
        <NavLink to="/">
          <a href="#calendar" className="navicons">
            Calendar
          </a>
        </NavLink>
        <NavLink to="/profile">
          <a href="#user-profile" className="navicons">
            Profile
          </a>
        </NavLink>
        <NavLink to="/workouts">
          <a href="#workouts" className="navicons">
            Workouts
          </a>
        </NavLink>
        <NavLink to="/meals">
          <a href="#meals" className="navicons">
            Meals
          </a>
        </NavLink>
          <NavLink to="/workoutreview">
            <a href="#workoutreview" className="navicons">
              Workouts Review
            </a>
          </NavLink>
          <NavLink to="/mealreview">
            <a href="#workoutreview" className="navicons">
              Meals Reviews
            </a>
          </NavLink>
        <NavLink to="/">
          <a href="#log-out" className="navicons" onClick={handleLogout}>
            Log out
          </a>
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
