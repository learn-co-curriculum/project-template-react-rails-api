import React from "react";
import { useHistory } from 'react-router-dom';

const history = useHistory();

function Homepage() {
  return (
    <div>
     <Button classname="homepagebutton" onClick={()=> history.push("/Character")}>Characters</Button>
      <br></br>
      <Button classname="homepagebutton" onClick={()=> history.push("/Minions")}>Minions</Button>
      <br></br>
      <Button classname="homepagebutton" onClick={()=> history.push("/Equipment")}>Equipment</Button>
      <br></br>
      <Button classname="homepagebutton" onClick={()=> history.push("/Outfits")}>Outfits</Button>
      <br></br>
      <Button classname="homepagebutton" onClick={()=> history.push("/Spells")}>Outfits</Button>
      <br></br>
      <Button classname="homepagebutton" onClick={()=> history.push("/SpAbilities")}>Special Abilities</Button>
      <br></br>
      <Button classname="homepagebutton" onClick={()=> history.push("/NewCharacterForm")}>Create Your Own Character!</Button>
    </div>
  );
}

export default Homepage;
