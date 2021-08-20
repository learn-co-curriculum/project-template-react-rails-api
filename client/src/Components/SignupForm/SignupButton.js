
import { useState } from 'react'
import SignupForm from './SignupForm'

const SignupButton = ({ onLogin }) => {
    const [showSignupForm, setShowSignupForm ] = useState(false)

    function handleSignUp(){
        setShowSignupForm(!showSignupForm)
    }

    return (
        <div className='signup-div'>
            <p>Don't have an account?</p>
            {showSignupForm ? (<button onClick={handleSignUp}className='signup-btn'>SIGN UP</button>) : (<SignupForm onLogin={onLogin} />)}   
        </div>
    )
}

export default SignupButton

