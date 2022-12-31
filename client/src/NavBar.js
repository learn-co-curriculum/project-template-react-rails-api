import { NavLink } from "react-router-dom"
import{ useNavigate } from "react-router-dom"

function NavBar( {updateUser}){

    let navigate = useNavigate()

  const handleLogOut = () => {
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        updateUser(false)
        navigate("/")
      }
    })
  }

    return (
    <div className= "navbar">
        <div className= "navbar-div">
            <div className="logo-name">
                <h1> Chime </h1>
                <img src = {require("./image/chimelogo-ch.png")} alt = "logo"/>
            </div>
           <div className= "navbar-list">
                {/* <NavLink to="/">
                    <a className="home-nav">Home</a>
                </NavLink> */}
                <NavLink to="/welcome">
                    <p  className="welcome-nav">Welcome!</p>
                </NavLink>
                <NavLink to="/posts">
                    <p className="posts-nav">Posts</p>
                </NavLink>
                <button id= "logout-btn" onClick={handleLogOut}>Log Out</button>
           </div>
        </div>
    </div>
    )

}

export default NavBar
