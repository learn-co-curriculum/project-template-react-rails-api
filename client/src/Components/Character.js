import React from "react";

function Characters({ character: [name, age, image, bio] }) {
  return (
    <div class="Card">
      <div>{name}</div>
      <br></br>
      <div>{age}</div>
      <br></br>
      <div>{image}</div>
      <br></br>
      <div>{bio}</div>
    </div>
  );
}

export default Characters;
