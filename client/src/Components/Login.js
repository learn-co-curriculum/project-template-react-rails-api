import React, { useState } from 'react'
import { Title, Wrapper, Input, Label, LoginButton, Button } from './StyledComponentElements'

const Login = ({ setErrors, setUser, handleShowLoginClearErrors, setIsParent }) => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    function handleLogin(event) {
        setLoginData({...loginData,
            [event.target.name] : event.target.value
        })
    }

    function loginSubmit(e){
        e.preventDefault()
        fetch("/login",  {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(loginData),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    setUser(user)
                    setIsParent(user.is_parent)
                });
            } else {
                response.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <Wrapper>
            <form onSubmit={loginSubmit}>
                <Title>Login</Title>
                <Label for='username'>Username:</Label>
                <Input name='username' value={loginData.username} placeholder="Username" onChange={handleLogin}></Input>
                <Label for='password'>Password:</Label>
                <Input name='password' value={loginData.password} placeholder="Password" type="password" onChange={handleLogin}></Input>
                <LoginButton>Login</LoginButton>
                <Button onClick={handleShowLoginClearErrors}>Create New Account</Button>
            </form>
        </Wrapper>
    )
}

export default Login
