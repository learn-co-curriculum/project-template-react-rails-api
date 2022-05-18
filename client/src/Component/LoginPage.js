import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import '../Style/LoginPage.css'

function LoginPage({setUser}) {
    const [username, setUsername] = useState('') //login/signup  state
    const [password, setPassword] = useState('') //login/signup  state
    const [confirmP, setConfirmP] = useState('')
    const [name, setName] = useState('') //signup state
    const [error, setError] = useState(null)
    const [forms, setForms] = useState(true)

    let navigate = useNavigate()


    function login(e){
        e.preventDefault()
        fetch("/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password })
        })
        .then(res => res.json())
        .then(data => {
            if (!data.error){
                setUser(data)
            } else{ setError(data)}
        })
        
navigate('/')
    }

    function signup(e){
      e.preventDefault()
      fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, username: username, password: password, password_confirmation: confirmP})
      })
      .then(res => res.json())
      .then(data => {
        if(data.error){
          setError(data)
        }
        else{setForms(true); setError(null)}
      })
    }

  return (
    <>
    {forms? 
    
    <div className='login-body'>
    <div className='position-form box'>
      <div>
        <h1>Login</h1>
      </div>
      <form className='form-content-login' onSubmit={login}>
        <label>Username</label><br />
        <input type='text' onChange={(e) => setUsername(e.target.value)} value={username} /><br />
        <label>Password</label><br />
        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} /><br/>
        <button type='submit'>submit</button>
        <div>
      <div className='error'>{error? error.error : null}</div>
          <p onClick={()=> setForms(false) }>No Account? Signup Here</p>
        </div>
      </form>
      
    </div>
  </div>

    :

    <div className='login-body'>
    <div className='position-form box'>
      <div>
        <h1>SignUp</h1>
      </div>
      <form className='form-content-signup' onSubmit={signup}>
        <label>Name</label><br/>
        <input type='text' onChange={(e) => setName(e.target.value)} value={name}/><br/>
        <label>Username</label><br />
        <input type='text' onChange={(e) => setUsername(e.target.value)} value={username} /><br />
        <label>Password</label><br />
        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} /><br/>
        <label>Confirm Password</label><br/>
        <input type='password' onChange={(e) => setConfirmP(e.target.value)} value={confirmP}/><br/>
        <button type='submit'>submit</button>
      </form>
      <div className='error'>{error? error.error : null}</div>
      <p onClick={()=> setForms(true)}>Already have a account? Signin Here</p>
    </div>
  </div>

  
  }

    </>
  )
}

export default LoginPage