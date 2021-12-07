import React, { useState } from "react";


function NewCharacterForm({ setNewCharacter }) {
  const initialvalue = {
    name: "",
    age: "",
    bio: "",
    imgUrl: "",
    user_id: "",
  };
  const [NewCharacter, setNewCharacterForm] = useState(initialvalue);
  function handleChange(e) {
    setNewCharacterForm((currentNewCharacterForm) => {
      return {
        ...currentNewCharacterForm,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/Characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewCharacterForm),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setVintage((currentNewCharacter) => [...currentNewCharacter, data]);
        setNewVintage(initialvalue);
      });
  }

  function submitDropdown(e) {
    e.preventDefault();
  }
  return (
    <main className="NewCharacterForm">
      <h2>New Character</h2>
      <form className="apple" onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          name="name"
          placeholder="NewCharacter Name"
          value={NewCharacter.name}
          onChange={handleChange}
        />
        <input
          className="age"
          type="text"
          name="age"
          placeholder="Age"
          value={NewCharacter.price}
          onChange={handleChange}
        />

        <input
          className="bio"
          type="text"
          name="bio"
          placeholder="Bio"
          value={NewCharacter.bio}
          onChange={handleChange}
        />
        <input
          className="imgUrl"
          type="text"
          name="imgUrl"
          placeholder="Hero Image"
          value={NewCharacter.imgUrl}
          onChange={handleChange}
        />
        <input
          className="user_id"
          type="text"
          name="user_id"
          placeholder="Username"
          value={NewCharacter.user_id}
          onChange={handleChange}
        />
        <div class="Equipmentdropdown">
          <button onclick="myFunction()" class="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" class="dropdown-content">
            <a href="/Equipment/id:1">EquipmentSet1</a>
            <a href="/Equipment/id:2">EquipmentSet2</a>
            <a href="/Equipment/id:3">EquipmentSet3</a>
          </div>
        </div>
        <div class="Outfitdropdown">
          <button onclick="myFunction()" class="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" class="dropdown-content">
            <a href="/Outfit/id:1">Outfit1</a>
            <a href="/Outfit/id:2">Outfit2</a>
            <a href="/Outfit/id:3">Outfit3</a>
          </div>
        </div>
        <br></br>
        <br></br>
        <button className="submit" type="submit">
          Create New Character
        </button>
      </form>
    </main>
  );
}
export default NewCharacterForm;
