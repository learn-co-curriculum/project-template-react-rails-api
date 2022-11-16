import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [favoriteBand, setFavoriteBand] = useState("");
  const [genre_1, setGenre_1] = useState("");
  const [genre_2, setGenre_2] = useState("");
  const [genre_3, setGenre_3] = useState("");

  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      favorite_band: favoriteBand,
      location: location,
      genre_1: genre_1,
      genre_2: genre_2,
      genre_3: genre_3,
    };

    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          history.push(`/`);
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          value={username}
          type="text"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <label>Email</label>
        <input
          value={email}
          type="text"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <label>Password</label>
        <input
          value={password}
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <label>First Name</label>
        <input
          value={firstName}
          type="text"
          placeholder="First Name..."
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label>Last Name</label>
        <input
          value={lastName}
          type="text"
          placeholder="Last Name..."
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <label>Location</label>
        <input
          value={location}
          type="text"
          placeholder="City..."
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <label>Favorite Band</label>
        <input
          value={favoriteBand}
          type="text"
          placeholder="Favorite Band..."
          onChange={(e) => setFavoriteBand(e.target.value)}
        ></input>
        <label>Genre Intrest 1</label>
        <input
          value={genre_1}
          type="text"
          placeholder="Genre..."
          onChange={(e) => setGenre_1(e.target.value)}
        ></input>
        <br></br>
        <label>Genre Intrest 2</label>
        <input
          value={genre_2}
          type="text"
          placeholder="Genre..."
          onChange={(e) => setGenre_2(e.target.value)}
        ></input>
        <label>Genre Intrest 3</label>
        <input
          value={genre_3}
          type="text"
          placeholder="Genre..."
          onChange={(e) => setGenre_3(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Create Account</button>
      </form>
      {errors ? errors.map((e) => <div>{e[1]}</div>) : null}
    </>
  );
};

export default SignUp;
