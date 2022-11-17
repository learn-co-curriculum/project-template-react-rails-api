import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const UpdateProfileForm = ({ user, handleUpdate }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [location, setLocation] = useState(user.location);
  const [favoriteBand, setFavoriteBand] = useState(user.favorite_band);
  const [genre_1, setGenre_1] = useState(user.genre_1);
  const [genre_2, setGenre_2] = useState(user.genre_2);
  const [genre_3, setGenre_3] = useState(user.genre_3);

  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: username,
      email: email,
      first_name: firstName,
      last_name: lastName,
      favorite_band: favoriteBand,
      location: location,
      genre_1: genre_1,
      genre_2: genre_2,
      genre_3: genre_3,
    };
    console.log("hi");

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then(() => {
          history.push(`/profile`);
          handleUpdate()
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }

  return (
    <div>
      <div class="container">
        <div class="form-card">
          <div class="form-card-image">
            <h2 class="form-card-heading">
              Get started
              <br></br>
              <small>Create your account</small>
            </h2>
          </div>
          <form class="form-card-form" onSubmit={handleSubmit}>
            <div class="input">
              <label class="input-label"></label>
              <input
                value={username}
                type="text"
                placeholder="Username..."
                onChange={(e) => setUsername(e.target.value)}
                class="input-field"
              ></input>
            </div>
            <div class="input">
              <label class="input-label"></label>
              <input
                value={email}
                type="text"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
                class="input-field"
              ></input>
            </div>
            <div class="input">
              <label class="input-label"></label>
              <input
                value={firstName}
                type="text"
                placeholder="First Name..."
                onChange={(e) => setFirstName(e.target.value)}
                class="input-field"
              ></input>
            </div>
            <div class="input">
              <label class="input-label"></label>
              <input
                value={lastName}
                type="text"
                placeholder="Last Name..."
                onChange={(e) => setLastName(e.target.value)}
                class="input-field"
              ></input>
            </div>
            <div class="input">
              <label class="input-label"></label>
              <select
                value={location}
                type="text"
                placeholder="Your State"
                onChange={(e) => setLocation(e.target.value)}
                class="input-field"
              >
                <option value="AK">AK</option>
                <option value="AL">AL</option>
                <option value="AR">AR</option>
                <option value="AZ">AZ</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DC">DC</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="IA">IA</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="MA">MA</option>
                <option value="MD">MD</option>
                <option value="ME">ME</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MO">MO</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="NE">NE</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NV">NV</option>
                <option value="NY">NY</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VA">VA</option>
                <option value="VT">VT</option>
                <option value="WA">WA</option>
                <option value="WI">WI</option>
                <option value="WV">WV</option>
                <option value="WY">WY</option>
              </select>
            </div>
            <div class="input">
              <label class="input-label"></label>
              <input
                value={favoriteBand}
                type="text"
                placeholder="Favorite Band..."
                onChange={(e) => setFavoriteBand(e.target.value)}
                class="input-field"
              ></input>
            </div>
            <div class="input">
              <label class="input-label"></label>
              <input
                value={genre_1}
                type="text"
                placeholder="Genre..."
                onChange={(e) => setGenre_1(e.target.value)}
                class="input-field"
              ></input>
            </div>
            <div class="input">
              <label class="input-label"></label>
              <input
                value={genre_2}
                type="text"
                placeholder="Genre..."
                onChange={(e) => setGenre_2(e.target.value)}
                class="input-field"
              ></input>
            </div>
            <div class="input">
              <label class="input-label"></label>
              <input
                value={genre_3}
                type="text"
                placeholder="Genre..."
                onChange={(e) => setGenre_3(e.target.value)}
                class="input-field"
              ></input>
            </div>
            {/* <div class="action">
				<button class="action-button">Get started</button>
			</div> */}
          </form>
          <div class="form-card-info">
            <button class="action-button" type="submit">
              Update
            </button>
            {errors ? errors.map((e) => <div>{e[1]}</div>) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateProfileForm;
