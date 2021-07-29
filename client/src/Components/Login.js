import {useState} from 'react'
import { useHistory } from 'react-router-dom'

let Login = (setCurrentUser) => {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello the button is working')
    }

    return <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input className="login-input" type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input className="login-input" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <label htmlFor="password">Password Confirmation</label>
            <input className="login-input" type="password"value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
            <button className="submit" type="submit">Submit</button>
        </form>
    </div>

}

export default Login