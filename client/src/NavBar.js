import { NavLink } from "react-router-dom"

function NavBar(){
    return ( 
    <div className= "navbar">      
        <div className= "navbar-div">
            <div className="logo-name">
                <h1> Chime </h1> 
                <img src = {require("./image/chimelogo-ch.png")} alt = "logo"/>
            </div>
           <div className= "navbar-list">
                <NavLink to="/">
                    <a className="home-nav">Home</a>
                </NavLink>

                <NavLink to="/posts">
                    <a className="posts-nav">Posts</a>
                </NavLink>
           </div>
        </div>
    </div>  
    )

}

export default NavBar