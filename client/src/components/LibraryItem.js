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
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';




function LibraryItem({id, name, picture_url, num_players, summary, genre, est_time, borrow, available, bg, setLibraryForm, user}) {
 


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };  
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [modalData, setModalData] = useState([])
  function handleOpen() {
    setOpen(!open)
  }
  useEffect(() => {
    fetch(`/boardgames/${id}`)
      .then((r) => r.json())
      // .then((data)=>console.log(data))
      .then((data) => setModalData(data));
  }, []);
  function deleteCard(){
        console.log(id)
        const config = {method: "DELETE"}
        fetch(`/boardgames/${id}`, config)
        .then((r) => r.json())
        .then((data) => console.log(data))
        window.location.reload()
      }
  
    return (
        <Card sx={{ maxWidth: 1500 }}>
          <CardActionArea onClick={handleOpen}>
          <Modal
          
          // sx={{ maxWidth: 1000, 
          //   // overflow: 'scroll' 
          // }}
            open={open}
            fullScreen
            // onClose={handleClose}
            onClose={handleOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
           <Box sx={style} >
           <CardMedia
            component="img"
            height="250"
            image={picture_url}
            alt={name}
          />
           {/* <IconButton aria-label="close" onClick={handleOpen}>
            <CloseIcon />
          </IconButton> */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalData.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 15 }}>
            {modalData.description}
          </Typography>
            </Box>
        </Modal>
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
            <Button size="small" label="edit" component={Link} to='/editBG' 
            onClick= {() => {
            if (bg.id === id) {
                setLibraryForm({
                    id: id,
                    name: name,
                    picture_url: picture_url,
                    num_players: num_players,
                    summary: summary,
                    genre: genre,
                    est_time: est_time,
                    // user_id: user.id,
                    borrow: borrow,
                    
            })}}
            }
            >Edit</Button>
            <IconButton aria-label="delete" onClick={() => deleteCard()}>
            <DeleteIcon />
          </IconButton>
          </CardActions>
        </Card>
      );
    }







export default LibraryItem;