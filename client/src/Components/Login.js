import {useState} from 'react'
import { useHistory } from 'react-router-dom'

let Login = ({setCurrentUser}) => {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState(null)


    let handleSignup = () => {
        console.log('hello world')
        history.push('/signup')
    }
    

    let handleSubmit = async (e) => {
        e.preventDefault()
        console.log('hello the button is working')

        const user = {
            username, 
            password, 
            password_confirmation: passwordConfirmation
        }

        const res = await fetch('/login', {
            method: 'POST', 
            headers: {'Content-type':'Application/json'}, 
            body: JSON.stringify(user)
        })
        const userData = await res.json()

        if (userData.id) {
            alert(`Welcome ${username}`) 
            history.push('/')
        } else {
            console.log(userData.errors)
            setErrors(userData.errors)
        }
    }

    return (
        <div className="login-container">
            <div>
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
                <div className="login-form">
                    <button className="submit" type="reset" onClick={handleSignup}>Sign Up</button>
                    {errors ? <div>{errors}</div>: null}
                </div>
            </div>
        </div>
    )
}

export default Login