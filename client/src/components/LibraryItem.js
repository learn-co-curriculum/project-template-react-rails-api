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
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";




function LibraryItem({id, name, picture_url, num_players, summary, genre, est_time, borrow, available, bg, setLibraryForm}) {
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
          <CardActionArea>
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
          </CardActionArea>
          <CardActions>
            <Button size="small">More Info</Button>
            <Button size="small" label="edit" component={Link} to='/editBG' onClick= {() => {
            if (bg.id === id) {
                setLibraryForm({
                    id: id,
                    name: name,
                    picture_url: picture_url,
                    num_players: num_players,
                    summary: summary,
                    genre: genre,
                    est_time: est_time,
                    user_id: 1,
                    borrow: borrow,
            })}}
            }>Edit</Button>
            <IconButton aria-label="delete" onClick={() => deleteCard()}>
            <DeleteIcon />
          </IconButton>
          </CardActions>
        </Card>
      );
    }







export default LibraryItem;