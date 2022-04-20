import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

function MapTile({type}){

const history = useHistory();
const fightChange = () =>{ 
    let path = `/fight`; 
    history.push(path);
}
const shopChange = () =>{ 
    let path = `/shop`; 
    history.push(path);
}
const randomChange = () =>{ 
    let path = `/random`; 
    history.push(path);
}

    
const [display, setDisplay] = useState(null)
useEffect(()=>{
    if(type===1){
        setDisplay(<h1 className = "tile" onClick={fightChange}>☠</h1>)
    }
    else if (type===2){
        setDisplay(<h1 className = "tile" onClick={randomChange}>?</h1>)
    }
    else{
        setDisplay(<h1 className = "tile" onClick={shopChange}>$</h1>)
    }
    },[type])
    


    return(
        <div>{display}</div>
    )
}

export default MapTile;