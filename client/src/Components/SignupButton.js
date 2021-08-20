import { useState } from 'react'

const SignupButton = () => {
    const [showSignupForm, setShowSignupForm ] = useState(false)

    function handleSignUp(){
        setShowSignupForm(!showSignupForm)
    }

    return (
        <div className='signup-div'>
            <p>Don't have an account?</p>
            {showSignupForm ? (<button onClick={handleSignUp}className='signup-btn'>SIGN UP</button>) : (<h1>FORM HERE</h1>)}   
        </div>
    )
}

export default SignupButton
