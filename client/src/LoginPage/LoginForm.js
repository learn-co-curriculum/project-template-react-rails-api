import React,{useState} from "react"
import { useNavigate } from  "react-router-dom"
import "./Login.css"


let LoginForm = () => {
    
    const navigate = useNavigate()

    //Controlled form for username and password
    const [formData, setFormData] = useState({username:"", password:""})

    const onDataChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const onCreateAccount = () => {
        navigate("/create_account")
    }

    const onLogin = event => {
        event.preventDefault()
        console.log(formData)
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then(answer => {
            if (answer.error) {
                console.log(answer.error)
            }
            else {
                console.log(answer)
                navigate("/")
            }
        })
    }


    return (
        <div className="loginPage">
        <h3 className="Login">FitnessFriend</h3>
        <form className="Login" onSubmit={onLogin}>
            <label>
            <input 
                id="username"
                type="text" 
                name="username" 
                onChange={onDataChange} 
                placeholder="Username"
            />
            <br/>
            <input 
                type="text" 
                name="password" 
                onChange={onDataChange} 
                placeholder="Password"
            />
            </label>
            <br/>
            <input id="sign-in" type="submit" value="Sign in"/>
            

        </form>
        <p className="Login">OR</p>
        <button className="Login" onClick={onCreateAccount}>Create an account</button>
        </div>
    )
}

export default LoginForm