import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@mui/material';
import Box from '@mui/material/Box';


function ProviderSignup() {
  const [providerName, setProviderName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        providerName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
  }
  return (
    <div>
      <Box
       component="form"
       sx={{
         '& .MuiTextField-root': { m: 1, width: '25ch' },
       }}
    >
<FormControl>
<TextField
          required
          id="provder-name"
          label="Provider Name"
          value={providerName}
          onChange={(e) => setProviderName(e.target.value)}
        />
<TextField
          required
          id="provider-email"
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
<TextField
          required
          id="provider-password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
<TextField
          required
          id="provider-confirm"
          label="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
</FormControl>
</Box>
    </div>
  )
}

export default ProviderSignup;