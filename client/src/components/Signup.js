import React, { useState } from "react";
import { Button, Input, FormField, Label} from "../styles";

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatar] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
              username,
              password,
              avatar: avatarUrl
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
        <Label htmlFor="imageUrl">Profile Image</Label>
        <Input
          type="text"
          id="avatar"
          value={avatarUrl}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
    </form>
  );
}
export default Signup