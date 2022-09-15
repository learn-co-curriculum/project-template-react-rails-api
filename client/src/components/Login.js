import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState([])
  const history = useHistory()

  const { name, email, password } = formData

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      email,
      password
    }

    fetch(`/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            history.push(`/home`)
            alert(`Welcome ${user.name}!`)
          })
        } else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
        }
      })

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Email
        </label>
        <input type='text' name='email' value={email} onChange={handleChange} />

        <label>
          Password
        </label>
        <input type='password' name='password' value={password} onChange={handleChange} />


        <input type='submit' value='Log in!' />
      </form>
      {errors ? errors.map(e => <div>{e[0] + ': ' + e[1]}</div>) : null}
    </>
  )
}

export default Login;
