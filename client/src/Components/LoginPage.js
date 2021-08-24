import React, {useState} from 'react'
import Error from './Error'
import SignUp from './SignUp'
import Login from './Login'

function LoginPage({ setUser, setErrors, errors }){
    const [showLogin, setShowLogin] = useState(true)
    

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
