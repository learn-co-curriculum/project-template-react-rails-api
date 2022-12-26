import React from 'react';
import { useState } from 'react'

function SignupForm ( {switchPage} ){

    return (
        <div className = "signup-form">
            <form>
                <div class = "title">
                    <h1> SIGNUP</h1>
                </div>
                <div className = "input-box">
                    <label htmlFor = "username">username: </label>
                    <input type = "text" id = "username" placeholder = 'enter username'/>
                    <label htmlFor = "email">email: </label>
                    <input type = "text" id = "email" placeholder = 'enter your email'/>
                    <label htmlFor ="password">password: </label>
                    <input type = "password" id ="password" placeholder = 'enter password'/>
                    <input type = "password" id ="password" placeholder = 'confirm password'/>
                    <a onClick = {switchPage}> Have an account? log in here</a>
                </div>
                <div class = "btn-box">
                    <button type = "submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
