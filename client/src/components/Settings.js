import {Link } from 'react-router-dom';

function Settings({setIsAuthenticated, setUser, user}) {
    console.log(user)
    const logout = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }
    return (
        <div className="settings">
            <h1>Settings</h1>
            <button type="button">delete</button>
            <button onClick={logout}>Logout</button>
            <h1><Link to="/home"> Home</Link></h1>
            </div>
    )
}

export default Settings;