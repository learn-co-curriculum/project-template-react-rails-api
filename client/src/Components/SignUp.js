import {useState} from 'react'
import {useHistory} from 'react-router-dom'

let SignUp = (setCurrentUser) => {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello the button is working')
        history.push('/login')
    }

    return (
        <div className="login-container">
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <input type="text" value={username}/>
                <input type="password" value={password}/>
                <input type="password"value={passwordConfirmation}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp