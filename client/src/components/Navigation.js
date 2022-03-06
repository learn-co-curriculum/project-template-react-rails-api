import {Link} from "react-router-dom";

function Navigation({user, isAuthenticated, setIsAuthenticated, setUser}) {
    function logout() {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }
    return (
        <> 
   
         <div>
          {user?<h1 onClick={logout}> Logout</h1>:<h1><Link to="/login"> Login</Link></h1>}
           <h1><Link to="/sign_up"> Sign Up</Link></h1>
           <h1><Link to="/"> Home</Link></h1>
           {isAuthenticated ? <p>yes</p> : <p>no</p>}
         </div>

        </>
    )
}

export default Navigation;