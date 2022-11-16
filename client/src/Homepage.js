import React from "react"
import NavBar from "./NavBar"

function Homepage({ onLogout }) {
    return (
        <NavBar onLogout={onLogout}/>
    )
}

export default Homepage