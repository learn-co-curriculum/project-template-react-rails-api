import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'

function NewVolunteerForm({ handleAddVolunteer }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "", 
    username: "", 
    password: "",
    password_confirmation: ""
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    // const newVolunteer = {
    //   name: formData.name,
    //   age: formData.age,
    //   email: formData.email, 
    //   password: formData.password,
    //   password_confirmation: formData.password_confirmation
    // }

    const fakeVolunteer = {
      name: "bubba",
      age: "age",
      email: "email", 
      password: "pw",
      password_confirmation: "pw"
    }


    fetch("/volunteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeVolunteer),
    })
      .then((response) => response.json())
      .then(data => {
        handleAddVolunteer(data)
      })
  }

  return (
    <div>
      <strong className="form-title">Sign Up to be a Volunteer!</strong>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid label="Volunteer Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid label="Age"
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <Form.Input
            fluid label="Email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
            <Form.Input
            fluid label="Username"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
            <Form.Input
            fluid label="Password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
            <Form.Input
            fluid label="Password Confirmation"
            placeholder="Password Confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
          
        </Form.Group>
        <Form.Button>Sign Up Now</Form.Button>
      </Form>
    </div>
  )
}

export default NewVolunteerForm;