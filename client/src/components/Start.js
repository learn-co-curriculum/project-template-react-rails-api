import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

function Start({setCharHealth, userID, character, setCharacter, started, setStarted, setRows}) {
    const [list, setList] = useState([])

    function handleOption(e){
        setCharacter(e.target.value)
        console.log(character)
    }    

    const history = useHistory();
    const routeChange = () =>{ 
        if(character !== null){
            let path = `/map`; 
            history.push(path);
            setStarted(!started)
            setCharHealth(100)
            setRows([])
        }
        else{
            alert("Need to select a character");
        }
    }

    useEffect(()=>{
        if(userID !== null)
        {
            fetch(`/character/?user_id=${userID}`)
            .then((r)=>r.json())
            .then((r)=>setList(r))
        }
    },[userID])

    return(
        <div>
            <select
                onChange={handleOption}
                value = {character}>
                {list.map((myChar)=>{
                    return <option key={myChar.id} value={myChar.name}>{myChar.name}</option>
                })}
            </select>  
            <button onClick={routeChange}>Start</button>
        </div>
    )
    
}

export default Start;