import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignupForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [fav_genre, setFav_Genre] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState(null);

  const history = useHistory();

//handles input from user and posts to backend
  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      password,
      fav_genre,
      bio,
    };
    const res = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const userData = await res.json();
    if (res.ok) {
      console.log(userData);
      onLogin(userData);
      history.push("/books");
    } else {
      setErrors(userData.message);
    }
  }

  //form for users to fill out to create an account
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Favorite Genre"
          value={fav_genre}
          name="fav_genre"
          onChange={(e) => setFav_Genre(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Biography"
          value={bio}
          name="bio"
          onChange={(e) => setBio(e.target.value)}
        ></input>
        <input type="submit" value="Submit"></input>
        {errors ? errors.map((error) => <div>{error}</div>) : null}
      </form>
    </div>
  );
}

export default SignupForm;
