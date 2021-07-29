import {useState} from 'react'
import {useHistory} from 'react-router-dom'

let Login = (setCurrentUser) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const history = useHistory

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello the button is working')
    }

    return <div className="login-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <input type="text" value={username}/>
            <input type="password" value={password}/>
            <input type="password"value={passwordConfirmation}/>
            <button type="submit">Submit</button>
        </form>
    </div>

}

export default Login