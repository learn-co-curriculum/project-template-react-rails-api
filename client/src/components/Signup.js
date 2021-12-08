import React, { useState, useEffect } from "react";
import AssignAvatar from "./AssignAvatar";
import styled from "styled-components";
import { Button, Input, FormField, Label, UsernameField, ChoiceDisplay } from "../styles";

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState({});
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [avatars, setAvatars] = useState([])

  useEffect(() => {
    fetch('/avatars')
      .then(resp => resp.json())
      .then(data => {
          setAvatars(data)
      });
    }, []);

  function handleSubmit(e) {
      e.preventDefault();
      setErrors([])
      setIsLoading(true);

      fetch("/signup", {
          method: "POST",
          headers: {
              "Content-Type" : "application/json",
          },
          body: JSON.stringify({
              username: username,
              password: password,
              avatar_id: avatar.id
          }),
      })
      .then(response => {
          setIsLoading(false);
          if(response.ok) {
              response.json()
              .then(user => onLogin(user));
          } else {
              response.json()
              .then(error => setErrors(error.errors))
          }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <UsernameField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </UsernameField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="imageUrl">Choose Your Avatar</Label>
      </FormField>
        <AssignAvatar setAvatar={setAvatar} avatars={avatars} />
      <FormField>
        <ChoiceDisplay>{avatar.name ? avatar.name : "Click an Image"}</ChoiceDisplay>
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
    </form>
  );
}
export default Signup


// const UsernameField = styled.div`
//     display: flex;
//     position: relative;
//     justify-content:center;
//     margin-top: 100px;
//     margin-left: 20px;
//     margin-right: 20px;
//     align-items: center;
// `;