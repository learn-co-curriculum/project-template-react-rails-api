import React, { useState } from "react"
import styled from 'styled-components'

const Wrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function SignUp({ setUser, handleShowLoginClearErrors, setErrors, Title, Wrapper, Label, Input, Button, LoginButton }){
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        first_name: "",
        is_parent: "",
        email: "",
        last_name: ""
    })

    function handleCreateUser(event) {
        setUserData({...userData, 
            [event.target.name] : event.target.value})
    }

    function handleRadioButton(event) {
        setUserData({...userData,
            [event.target.name] : Boolean(event.target.value)})
    }

    function userSubmit(event) {
    event.preventDefault()
    fetch("/signup", {
        method: "POST",
        headers: {
        "Content-Type": "Application/json"
        },
        body: JSON.stringify(userData)
    }).then((resp) => {
        if (resp.ok) {
            resp.json().then((user) => setUser(user));
        } else {
            resp.json().then((err) => setErrors(err.errors));
        }
    })
}
 
    return (
        <Wrapper>
            <form onSubmit={userSubmit}>
                <Title>Create New User</Title>
                <Label for='first_name'>First Name:</Label>
                <Input name='first_name' placeholder='First Name' value={userData.first_name} onChange={handleCreateUser}></Input>
                <Label for='last_name'>Last Name:</Label>
                <Input name='last_name' placeholder='Last Name' value={userData.last_name} onChange={handleCreateUser}></Input>
                <Label for='email'>Email:</Label>
                <Input name='email' placeholder='Email' value={userData.email} onChange={handleCreateUser}></Input>
                <Label for='username'>Username:</Label>
                <Input name='username' placeholder='Username' value={userData.username} onChange={handleCreateUser}></Input>
                <Label for='password'>Password:</Label>
                <Input name='password' placeholder='Password' type='password' value={userData.password} onChange={handleCreateUser}></Input>
                <Wrapper2>
                    <h4>Parent or Child Account?</h4>
                    <Label for='is_parent'>Parent</Label>
                    <Input type='radio' name='is_parent' value='true' onChange={handleRadioButton}></Input>
                    <Label for='is_child'>Child</Label>
                    <Input type='radio' name='is_parent' value='' onChange={handleRadioButton}></Input>
                    <LoginButton>Sign Up</LoginButton>
                    <Button onClick={handleShowLoginClearErrors}>Already Have an Account?</Button>
                </Wrapper2>
            </form>
        </Wrapper>
    )
}

export default SignUp
