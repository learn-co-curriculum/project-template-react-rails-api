import React, {useState} from 'react'
import Error from './Error'
import SignUp from './SignUp'
import Login from './Login'

function LoginPage({ setUser, setIsLoading }){
    const [showLogin, setShowLogin] = useState(true)
    const [errors, setErrors] = useState([])

    function handleShowLoginClearErrors() {
        setShowLogin(!showLogin)
        setErrors([])
    }
    
    return (
        <div>
            { showLogin 
            ? 
            <Login 
                setErrors = {setErrors}
                setUser = {setUser}
                handleShowLoginClearErrors = {handleShowLoginClearErrors}
                setIsLoading = {setIsLoading}
            />
            :
            <SignUp
                setUser = {setUser}
                handleShowLoginClearErrors = {handleShowLoginClearErrors}
                setErrors = {setErrors}
            />
            }
            {errors.map((err) => (
                <Error key={err}>{err}</Error>
            ))}
        </div>
    )
}

export default LoginPage
