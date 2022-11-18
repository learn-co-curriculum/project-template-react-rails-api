import { useState } from 'react'

function LoginPage( { onLogin, onRegisterClick } ) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function registerClick() {
    onRegisterClick(true)
  }

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
          res.json().then(onLogin)
        } else {
          res.json().then(event => alert(event.error))
        }
      })
  }

  return (
    <div className="justify-center items-center p-10">
    <form className="flex flex-col items-center max-h-max bg-black">
    <h1 className="text-gray-100 text-3xl font-mono subpixel-antialiased">SPOT ME</h1>
    <h2 className="text-gray-100 font-mono subpixel-antialiased">LOGIN</h2>
      <label className="text-gray-100 font-mono subpixel-antialiased" htmlFor="username">Username:</label>
      <input
        className="rounded-md"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="text-gray-100 font-mono subpixel-antialiased" htmlFor="password">Password:</label>
      <input
        className="rounded-md"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="inline-block space-x-3">
      <button className=" font-mono subpixel-antialiased shadow-lg bg-red-500 rounded-md" type="submit" onClick={handleLogin}>Login</button>
      <button className="font-mono subpixel-antialiased shadow-lg bg-red-500 rounded-md" type="button" onClick={registerClick} >Register</button>
      </div>
    </form>
    </div>
  );
}

export default LoginPage;