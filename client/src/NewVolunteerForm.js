import React, { useState } from "react";

function NewVolunteerForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
      name: name,
      age: age,
      email: email,
    };
    fetch("volunteers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((newItem) => console.log(newItem));
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Age:
        <input
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit">Sign Up Now!</button>
    </form>
  );
}

export default NewVolunteerForm;
