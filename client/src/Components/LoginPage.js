import React, {useState} from 'react'
import Error from './Error'
import SignUp from './SignUp'
import Login from './Login'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
`;

const Wrapper = styled.div`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    display: block;
    margin-bottom: 10px;
`;

const Label = styled.label`
    display: block;
`;

const LoginButton = styled.button`
    margin: 10px;
    border-radius: 15px;
    padding: 10px;
    font-size: 1em;
`; 

const Button = styled.button`
    float: right;
    margin: 10px;
    border-radius: 15px;
    padding: 10px;
    font-size: 1em;
`;

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
                Title = {Title}
                Wrapper = {Wrapper}
                Input = {Input}
                Label = {Label}
                LoginButton = {LoginButton}
                Button = {Button}
            />
            :
            <SignUp
                setUser = {setUser}
                handleShowLoginClearErrors = {handleShowLoginClearErrors}
                setErrors = {setErrors}
                Title = {Title}
                Wrapper = {Wrapper}
                Input = {Input}
                Label = {Label}
                LoginButton = {LoginButton}
                Button = {Button}
            />
            }
            {errors.map((err) => (
                <Error key={err}>{err}</Error>
            ))}
        </div>
    )
}

export default LoginPage
