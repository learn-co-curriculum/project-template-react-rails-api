import {useState} from 'react'
import {useHistory} from 'react-router-dom'

let SignUp = (setCurrentUser) => {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState(null)

    let handleSubmit = async (e) => {
        e.preventDefault(e)
        console.log('hello the button is working')
        const user = {
            username, 
            address, 
            email,
            password, 
            passwordConfirmation
        }

        const res = await fetch(`http://localhost:3000/users`, {
            method: 'POST', 
            headers: {'Content-Type' : 'application/json'}, 
            body: JSON.stringify({user})
        })

        const userData = await res.json()
        console.log(userData)

        if (userData.id) {
            history.push('/login')
        } else {
            setErrors(userData.message)
        }
    
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label htmlFor="username">Username</label>
                <input className="login-input" type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>

                <label htmlFor="address">Address</label>
                <input className="login-input" type="text" value={address} onChange={(e)=> setAddress(e.target.value)}/>

                <label htmlFor="email-address">Email Address</label>
                <input className="login-input" type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input className="login-input" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

                <label htmlFor="password">Password Confirmation</label>
                <input className="login-input" type="password" value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}/>

                <button className="submit" type="submit">Sign Up</button>
                {/* <>errors ? errors.map error =>  return(<div>{error}<div>} : null</> */}
            </form>
        </div>
    )
}

export default SignUp