import React, { useState, useEffect } from "react";
import AssignAvatar from "./AssignAvatar";
import { Button, Input, FormField, Label} from "../styles";

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
          console.log(data)
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
              avatar: avatar
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
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
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
        <AssignAvatar setAvatar={setAvatar} avatars ={avatars} />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
    </form>
  );
}
export default Signup