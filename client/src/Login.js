import React from 'react';
import { useState } from 'react'

function LoginPage ( {switchPage}){

    return (
        <div className = "login-form">
        <form>
            <div className = "title">
                <h1>LOG IN</h1>
            </div>
            <div className = " input-box">
                <label htmlFor = "username">username: </label>
                <input type = "text" id = "username" placeholder = 'enter username'/>
                <label htmlFor = "password">password: </label>
                <input type = "password" id ="password" placeholder = 'enter password'/>
                <a onClick = {switchPage}> create an account</a>
            </div>
            <div className = "btn-box">
                <button tpye = "submit"> Login</button>
            </div>
        </form>
    </div>
    )
}

export default LoginPage
