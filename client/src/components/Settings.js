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
    const deleteAccount = () => {
        fetch('/users',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }
    return (
        <div className="template">
            <h1>Settings</h1>
            <button className="button" onClick={deleteAccount}>delete</button>

            <div>
                <button className="button" onClick={logout}>Logout</button>
                <h3><Link className="button" to="/home"> Home</Link></h3>
            </div>
        </div>
    )
}

export default Settings;