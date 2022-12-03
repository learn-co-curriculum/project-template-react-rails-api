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

    //create a function that fetches data to server to see if username and password match user input


    return (
        <>
        <h3>FitnessFriend</h3>
        <form>
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
                type="password" 
                name="password" 
                onChange={onDataChange} 
                placeholder="Password"
            />
            </label>
            <br/>
            <input id="sign-in" type="submit" value="Sign in"/>
            

        </form>
        <p>OR</p>
        <button onClick={onCreateAccount}>Create an account</button>
        </>
    )
}

export default LoginForm