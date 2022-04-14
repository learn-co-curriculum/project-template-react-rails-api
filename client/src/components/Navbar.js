import { NavLink, useHistory } from "react-router-dom"

function Navbar ({ currentUser, setCurrentUser }) {

    // useEffect(() => {
    //     fetch("/current_user")
    //     .then(r => r.json())
    //     .then(data => {
    //         data ? setCurrentUser(data) : console.log("No login registered")
    //     })
    // }, []) 

    let history = useHistory()

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
                history.push("/login")
                setCurrentUser(null)
            }
        })
    }

    function checkUser () {
        return currentUser && !currentUser.error
    }

    function pleaseLoginMessage () {
        if (!currentUser) {
            window.alert("Please login to access site")
        }
    }

    console.log(currentUser)

    return (
        <div className="navbar">
            <div className="nav-left">
                <NavLink to={checkUser() ? "/" : "/login"} className="nav-link">
                    <h2 className="navbar-item" onClick={pleaseLoginMessage}>
                        Featured
                    </h2>
                </NavLink>
            </div>
            <div className="nav-right">
                {checkUser() ? <h2 className="navbar-item"> Hi, {currentUser.username}! </h2> : 
                    <>
                        <NavLink to="/login" className="nav-link">
                            <h2 className="navbar-item">Login</h2>
                        </NavLink>
                        <NavLink to="/signup" className="nav-link">
                            <h2 className="navbar-item">Sign Up</h2>
                        </NavLink> 
                    </>}
                {checkUser() ? 
                    <NavLink to={checkUser() ? "/portfolio" : "/login"} className="nav-link">
                        {checkUser() ? <h2 className="navbar-item">My Portfolio</h2> : null}
                    </NavLink> : null }
                    { checkUser() ? 
                    <NavLink to={checkUser() ? "/mycompanies" : "/login"} className="nav-link">
                        {checkUser() ? <h2 className="navbar-item">My Companies</h2> : null}
                    </NavLink> : null }
                {checkUser() ? 
                    <h2 className="navbar-item" onClick={handleLogout}>Logout</h2> : null}
            </div>
        </div>
    )
}

export default Navbar