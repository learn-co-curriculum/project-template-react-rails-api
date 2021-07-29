import {Link} from 'react-router-dom'

let NavBar = (currentUser, setCurrentUser) => {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setCurrentUser(null);
          }
        });
      }

    return (
        <header>
          {/* <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            {currentUser ? (
              <button onClick={handleLogoutClick}>Logout</button>
            ) : (
              <>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div> */}
        </header>
      );
}

export default NavBar