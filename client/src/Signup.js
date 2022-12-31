import React from 'react';
import { useState } from 'react'

function SignupForm ( {switchPage, updateUser} ){
    const [submited, setSubmited] = useState (false)
    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password:""
    })
    const [errors, setErrors] = useState([])
    const {username, email, password} = signupData

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            email,
            password,
            avatar: "https://robohash.org/eumconsequaturlaborum.png?size=300x300&set=set1"
        }
        fetch('/users',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
          })
          .then(res => {
            if (res.ok){
                res.json().then(user => {
                    updateUser(user)
                })
            }else{
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
        setSubmited(!submited)
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    return (
        <div className = "signup-form">
            <form onSubmit={handleSubmit}>
                <div class = "title">
                    <h1> SIGNUP</h1>
                </div>
                <div className = "input-box">
                    <label htmlFor = "username">username: </label>
                    <input
                        type = "text"
                        id = "username"
                        placeholder = 'enter username'
                        name = "username"
                        value = {username}
                        onChange = {handleChange}/>
                    <label htmlFor = "email">email: </label>
                    <input
                        type = "text"
                        id = "email"
                        placeholder = 'enter your email'
                        name = "email"
                        value = {email}
                        onChange = {handleChange}
                        />
                    <label htmlFor ="password">password: </label>
                    <input
                        type = "password"
                        id ="password"
                        placeholder = 'enter password'
                        name = "password"
                        value = {password}
                        onChange = {handleChange}
                    />
                    <div style={ {margin : "10px" }}>
                        {submited ?
                        <p className = 'link-btn' onClick = {switchPage}> Successed, log in here</p>
                        :
                        <p className = 'link-btn' onClick = {switchPage}> Have an account? log in</p>}
                    </div>

                </div>
                <div className = "btn-box">
                    <button type = "submit">Sign Up</button>
                </div>
            </form>
            {errors?errors.map(e => <div className = "error-message">{e[0]+': ' + e[1]}</div>) : null}
        </div>
    )
}

export default SignupForm
