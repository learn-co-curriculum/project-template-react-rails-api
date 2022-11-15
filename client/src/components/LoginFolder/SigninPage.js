import React, { useEffect, useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const SigninPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);

  return (
    <div>
        <h1>SigninPage</h1>
        <Login setUser={setUser} />
        <Signup />
    </div>
  )
}

export default SigninPage