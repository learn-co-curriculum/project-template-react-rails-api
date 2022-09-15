import React, { useState } from "react";

function Signup({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((formData) => {
          setCurrentUser(formData);
          alert(`Hello ${formData.name}`);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  return (
    <div className="form-box">
      <div className="login-box">
        <h1>Signup</h1>
        <div className="form-container">
          <form className="login-signup-form" onSubmit={handleSubmit}>
            <section className="input-form">
              <label>Username:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}>
              </input>
            </section>

            <section className="input-form">
              <label>Email:</label>
              <input type="text" name="email" value={email} onChange={handleChange} />
            </section>
            <section className="input-form">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange} />
            </section>
            <section className="input-form">
              <input id="type" type="submit" value="Sign up!" />
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
