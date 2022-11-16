import React from "react";
import { useState } from "react";

const AddBand = ({ onAddBand }) => {
  const [name, setName] = useState("");
  const [image_url, setImage_Url] = useState("");
  const [genre, setGenre] = useState("");
  const [secondary_genre, setSecondary_Genre] = useState("");
  const [hometown, setHometown] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newBand = {
      name: name,
      image_url: image_url,
      genre: genre,
      secondary_genre: secondary_genre,
      hometown: hometown,
    };

    console.log(errors);

    fetch("/bands", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBand),
    }).then((res) => {
      if (res.ok) {
        res.json().then(onAddBand);
        setName("");
        setImage_Url("");
        setGenre("");
        setSecondary_Genre("");
        setHometown("");
      } else {
        res.json().then((data) => {
          console.log(data.errors);
          setErrors(Object.entries(data.errors).map((e) => ` ${e[1]}`));
        });
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Image</label>
        <input
          value={image_url}
          type="text"
          placeholder="Image..."
          onChange={(e) => setImage_Url(e.target.value)}
        ></input>
        <label>Genre</label>
        <input
          value={genre}
          type="text"
          placeholder="Main Genre..."
          onChange={(e) => setGenre(e.target.value)}
        ></input>
        <label>Secondary Genre</label>
        <input
          value={secondary_genre}
          type="text"
          placeholder="Secondary Genre..."
          onChange={(e) => setSecondary_Genre(e.target.value)}
        ></input>
        <label>Hometown</label>
        <input
          value={hometown}
          type="text"
          placeholder="Hometown..."
          onChange={(e) => setHometown(e.target.value)}
        ></input>
        <button type="submit">Add Band</button>
      </form>
      {errors
        ? errors.map((e) => (
            <h2 key={e} style={{ color: "red" }}>
              {e.toUpperCase()}
            </h2>
          ))
        : null}
    </>
  );
};

export default AddBand;
