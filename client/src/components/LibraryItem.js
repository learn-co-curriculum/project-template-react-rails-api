import * as React from 'react';
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



function LibraryItem({id, name, picture_url, num_players, summary, genre, est_time, borrow, available}) {
    function deleteCard(){
        console.log(id)
        const config = {method: "DELETE"}
        fetch(`/boardgames/${id}`, config)
        .then((r) => r.json())
        .then((data) => console.log(data))
        window.location.reload()
      }

    return (
        <Card sx={{ maxWidth: 750 }}>
          <CardMedia
            component="img"
            height="140"
            image={picture_url}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}...<br></br>
              Genre: {genre}<br></br>
              Number of Players: {num_players}<br></br>
              Estimated Time to Play: {est_time}<br></br>
              Borrowable: {borrow ? "Yes": "No"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More Info</Button>
            <Button size="small">Edit</Button>
            <IconButton aria-label="delete">
            <DeleteIcon onClick={() => deleteCard()}/>
          </IconButton>
          </CardActions>
        </Card>
      );
    }







export default LibraryItem;