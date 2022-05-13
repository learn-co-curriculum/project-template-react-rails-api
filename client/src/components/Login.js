import React, { useState } from "react";
import Auth from "./Auth";
function Login({ user, setUser, setCurrentUser}) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [isShow, setShow] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e){
    e.preventDefault(e);
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        if(data.errors){
            console.log(data.errors)
        } else{
            setCurrentUser(data);
        }
    })
  }


  function toggleShow() {
    setShow(!isShow);
  }

  return (
    <>
      {isShow ? (
        <Auth isShow={isShow} setShow={setShow} setCurrentUser={setCurrentUser} />
      ) : (
        <div className="template">
          <form onSubmit={e => handleSubmit(e)}>
            <label>
              Username
              <input
                type="text"
                onChange={e => setUser({...user, username: e.target.value})}
                value={user.username}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                onChange={e => setUser({...user, password: e.target.value})}
                value={user.password}
              />
            </label>

            <input className="button" type="submit" value="Login" />
            <button className="button" onClick={toggleShow}>
              Don't have an account?
            </button>
          </form>
        </div>
      )}
      {errors ? <div>{errors}</div> : null}
    </>
  );
}

export default Login;

// collect user input
// post to login
// handle login in backend *****
// if login is successful, redirect to profile page
