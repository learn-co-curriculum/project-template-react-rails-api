import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: ''
  // })
  const [errors, setErrors] = useState([])
  // const history = useHistory()

  // const { name, email, password } = formData

  // function onSubmit(e) {
  //   e.preventDefault()
  //   const user = {
  //     email,
  //     password
  //   }

  //   fetch(`/login`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(user)
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then(user => {
  //           history.push(`/home`)
  //           setCurrentUser(user)
  //         })
  //       } else {
  //         res.json().then(json => setErrors(Object.entries(json.errors)))
  //       }
  //     })

  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: value })
  // }
  return (
    <div id="form-box">
      <div id="login-box">
        <h1>Login</h1>
        <div id="form-container">
          <form className="login-signup-form" action='/login' method='post'>
            <section className="input-form">
              <label>
                Email:
              </label>
              <input type='text' name='email' />
            </section>
            <section className="input-form">
              <label>
                Password:
              </label>
              <input type='password' name='password' />
            </section>
            <section className="input-form">
              <input type='submit' value='Log in!' />
            </section>
          </form>
          {errors ? errors.map(e => <div>{e[0] + ': ' + e[1]}</div>) : null}
        </div>
        <div id="signup-reroute">
          <h4>Don't have an account?</h4>
          <Link className="route-link" to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;