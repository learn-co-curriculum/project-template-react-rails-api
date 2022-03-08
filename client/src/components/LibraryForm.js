import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";



function LibraryForm({ handleAddBG, libraryForm, setLibraryForm, user }) {
  console.log(user)
  const initialState = {
    name: "",
    picture_url: "",
    num_players: "",
    description: "",
    genre: "",
    est_time: "",
    user_id: user.id,
    borrow: false,
  };
  function handleSetLibraryForm(att, input) {
    setLibraryForm({ ...libraryForm, [att]: input });
  }
  function submitHandler(e) {
    e.preventDefault();
    fetch("/boardgames", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(libraryForm),
    })
      .then((r) => r.json())
      .then((data) => console.log(data))
      .then((newBG) => {
        setLibraryForm(initialState);
        handleAddBG(newBG);
      });
  }

  return (
    <Container component="main" maxWidth="m">
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <div>

          <TextField
          fullWidth
            required
            id="outlined-required"
            label="Game Name"
            onChange={(e) => handleSetLibraryForm("name", e.target.value)}
            value={libraryForm.name}
          />
          <br></br>
          <TextField
          fullWidth
            id="outlined"
            label="Game Picture URL"
            onChange={(e) =>
              handleSetLibraryForm("picture_url", e.target.value)
            }
            value={libraryForm.picture_url}
          />
          <br></br>
          <TextField
            required
            id="outlined-required"
            label="Number of Players"
            onChange={(e) =>
              handleSetLibraryForm("num_players", e.target.value)
            }
            value={libraryForm.num_players}
          />
          <br></br>
          <TextField
          fullWidth
            required
            id="outlined-required"
            label="Genre"
            onChange={(e) =>
              handleSetLibraryForm("genre", e.target.value)
            }
            value={libraryForm.genre}
          />
          <br></br>
          <TextField
          fullWidth
            id="outlined"
            label="Description"
            onChange={(e) =>
              handleSetLibraryForm("description", e.target.value)
            }
            value={libraryForm.description}
          />
          <br></br>
          <FormControl required fullWidth>
            <InputLabel id="borrowable-label">Borrowable?</InputLabel>
            <Select
              labelId="borrowable=label"
              id="borrowable-select"
              value={libraryForm.borrow}
              label="Borrowable?"
              onChange={(e) => handleSetLibraryForm("borrow", e.target.value)}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <br></br>
          <Button type="submit" variant="contained" id="submit">
            Submit New Game
          </Button>

      </div>
    </Box>
    </Container>
  );
}

export default LibraryForm;
