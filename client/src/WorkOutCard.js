import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function WorkOutCard({ name, difficulty, equipment, muscle, getWorkOuts, currentWorkOut, }) {
 //SENDS SELECTED WORKOUT TO USER LIST
 
 
 function addWorkOutToList(currentWorkOut) {
    console.log(currentWorkOut)
    getWorkOuts(currentWorkOut)
  }

  return (
    <div className="">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <div className="workout-name">
                <h2>{name}</h2>
              </div>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <div className="equipment">
                <h3>Needed: {equipment}</h3>
              </div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className="calories">
                <h3>Level: {difficulty}</h3>
              </div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className="muscle-group">
                <h3>{muscle}</h3>
              </div>
            </Typography>
            <button className="border-2 border-red-400 bg-red-400 rounded-md text-sm" onClick={() => {
                addWorkOutToList(currentWorkOut)
                }}>Add Workout to Plan</button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default WorkOutCard;