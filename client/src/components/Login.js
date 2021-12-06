import React, {useState} from 'react'
import { Button, Error, Input, FormField, Label } from "../styles";
import {useNavigate} from 'react-router-dom'

function Login({onLogin}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((resp) => {
          setIsLoading(false);
          if (resp.ok) {
            resp.json()
            .then((user) => onLogin(user));
          } else {
              resp.json()
             .then((error) => setErrors(error.errors))
          }
        });
      }

    return (
       <form classname="form" onSubmit={handleSubmit}>
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </FormField>
         <FormField>
            <Button variant="fill" color="primary" type="submit">
             {isLoading ? "Loading..." : "Login"}
            </Button>
         </FormField>
         <FormField>
           Don't have an account?
           <Button onClick={() => {navigate('/signup')}}>Signup</Button>
         </FormField>
       </form>
    )
}

export default Login
