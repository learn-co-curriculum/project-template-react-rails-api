import { useState } from "react";

function Auth({ setShow, isShow, setCurrentUser }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    // address: "",
    // image: "",
    // name: "",
    // age: "",
    // early: false,
    // nightOwl: false,
    // emergency: false,
    // admin: false,

  });

  const [errors, setErrors] = useState([]);

  function toggleShow() {
    setShow(!isShow);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
        } else {
          setCurrentUser(data);
        }
      });
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="template">
        <h3>Create an account</h3>
        <label>
          Create Username
          <input
            type="text"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            value={user.username}

          />
        </label>
        <label>
          Add email
          <input
            type="text"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />
        </label>
        <label>
          Create Password
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
          />
        </label>
        <input className="button" type="submit" value="Sign Up" />

        <button className="button" onClick={toggleShow}>
          back
        </button>
      </form>
      {errors
        ? errors.map((e) => (
            <div key={errors.length++}>{e[0] + ": " + e[1]}</div>
          ))
        : null}
    </>
  );
}

export default Auth;
