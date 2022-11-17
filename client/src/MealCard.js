import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function MealCard({ name, image, calories }) {
  return (
      <div className="cards">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="150" image={image} alt="food" />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                <div className="food-name">
                  <h2>{name}</h2>
                </div>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className="calories">
                  <h3>{calories} calories</h3>
                </div>
              </Typography>
              <button>Add Meal to Plan</button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
  );
}

export default MealCard;
