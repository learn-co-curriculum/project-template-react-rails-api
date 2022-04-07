import {useState} from 'react'
import { useHistory } from "react-router-dom";

function Start({setUser}) {
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/moviePage`; 
        history.push(path);
    }

    return(
        <div>
            <button>Start</button>
        </div>
    )
    
}

export default Start;