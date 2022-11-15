import { useEffect, useState } from 'react'

function LoginPage({ setUser }) {
  // const [errorMessage, setErrorMessage] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const ourErrorMessage = (username) =>
  //   username === errorMessage.username && (
  //     <div className="error-message">{errorMessage.message}</div>
  //   );

  // const handleLoginSubmit = (event) => {
  //    event.preventDefault();
  //    let { uname, pass } = document.forms[0]
  //   //  const userData = database.find((user) => user.username === uname.value);

  //    // Compare user info
  //   //  if (userData) {
  //   //    if (userData.password !== pass.value) {
  //   //      // Invalid password
  //   //      setErrorMessage({ name: "pass", message: errors.pass });
  //   //    } else {
  //   //      setIsSubmitted(true);
  //   //    }
  //   //  } else {
  //   //    // Username not found
  //   //    setErrorMessage({ name: "user", message: errors.user });
  //   //  }
  //  };

  // const checkForm = (
  //     <div className="form">
  //     <form onSubmit={handleLoginSubmit}>
  //       <div className="input-container">
  //         <label>Username </label>
  //         <input type="text" name="user" required />
  //         {ourErrorMessage("user")}
  //       </div>
  //       <div className="input-container">
  //         <label>Password </label>
  //         <input type="password" name="pass" required />
  //         {ourErrorMessage("pass")}
  //       </div>
  //       <div className="button-container">
  //         <input type="submit" />
  //       </div>
  //     </form>
  //   </div>
  // );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

 

  function handleLogin(event) {
    event.preventDefault();
    const user = {
      username, 
      password
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(setUser)
        } else {
          res.json().then( event => console.log(event.errror))
        }
      })
  }

  function handleRegister(event) {
    event.preventDefault();
    const user = {
      username, 
      password
    }
    fetch("/register", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(setUser)
        } else {
          res.json().then( event => console.log(event.errror))
        }
      })
  }

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <label htmlFor="password_confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      /> */}
      <button type="submit" onClick={handleLogin}>Login</button>
      <button type="submit" onClick={handleRegister}>Register</button>
    </form>
  );
}

export default LoginPage;