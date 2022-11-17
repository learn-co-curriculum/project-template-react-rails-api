import React from "react";
import { useState } from "react";



const AddBand = ({ onAddBand }) => {
  const [name, setName] = useState("");
  const [image_url, setImage_Url] = useState("");
  const [genre, setGenre] = useState("");
  const [secondary_genre, setSecondary_Genre] = useState("");
  const [hometown, setHometown] = useState("");
  const [errors, setErrors] = useState([]);
  const [opened, setOpened] = useState(false);


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
    <   >
      <form onSubmit={handleSubmit} className="add-band-form">
        <label></label>
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="add-band-form-input"
        ></input>
        <br></br>
        <br></br>
        <label></label>
        <input
          value={image_url}
          type="text"
          placeholder="Add image url"
          onChange={(e) => setImage_Url(e.target.value)}
          className="add-band-form-input"
        ></input>
         <br></br>
         <br></br>
        <label></label>
        <input
          value={genre}
          type="text"
          placeholder="Main Genre"
          onChange={(e) => setGenre(e.target.value)}
          className="add-band-form-input"
        ></input>
         <br></br>
         <br></br>
        <label></label>
        <input
          value={secondary_genre}
          type="text"
          placeholder="Secondary Genre"
          onChange={(e) => setSecondary_Genre(e.target.value)}
          className="add-band-form-input"
        ></input>
         <br></br>
         <br></br>
        <label></label>
        <input
          value={hometown}
          type="text"
          placeholder="Hometown"
          onChange={(e) => setHometown(e.target.value)}
          className="add-band-form-input"
        ></input>
         <br></br>
         <br></br>
        <button type="submit" className="add-band-form-button">Add Band</button>
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
