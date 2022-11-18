import React, { useState } from "react";

function NewVolunteerForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
      name: name,
      age: age,
      email: email,
      username: username,
      password: password,
    };
    if (password === passwordConfirmation) {
      fetch("/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      })
        .then((r) => r.json())
        .then((newItem) => console.log(newItem));
    } else {
      setUsername("");
      setPassword("");
      setPasswordConfirmation("");
      alert("DARBY Y SEO Y JAFET SEZ: Yo your PASSWORD don't match DAWG");
    }
  }

  return null;
  // <form className="NewItem" onSubmit={handleSubmit}>
  //   <div>
  //     <label>
  //       Name:
  //       <input
  //         type="text"
  //         name="name"
  //         className="form-input"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //     </label>
  //   </div>
  //   <div>
  //     <label>
  //       Age:
  //       <input
  //         type="text"
  //         name="age"
  //         className="form-input"
  //         value={age}
  //         onChange={(e) => setAge(e.target.value)}
  //       />
  //     </label>
  //   </div>
  //   <div>
  //     <label>
  //       Email:
  //       <input
  //         type="text"
  //         name="email"
  //         className="form-input"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //     </label>
  //   </div>
  //   <div>
  //     <label>
  //       Username:
  //       <input
  //         type="text"
  //         name="username"
  //         className="form-input"
  //         value={username}
  //         onChange={(e) => setUsername(e.target.value)}
  //       />
  //     </label>
  //   </div>
  //   <div>
  //     <label>
  //       Password:
  //       <input
  //         type="password"
  //         id="password"
  //         className="form-input"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //     </label>
  //   </div>
  //   <div>
  //     <label>
  //       Confirm Password:
  //       <input
  //         type="password"
  //         id="password_confirmation"
  //         className="form-input"
  //         value={passwordConfirmation}
  //         onChange={(e) => setPasswordConfirmation(e.target.value)}
  //       />
  //     </label>
  //   </div>

  //   <button type="submit">Sign Up Now!</button>
  // </form>
}

export default NewVolunteerForm;
