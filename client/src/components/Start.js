import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

function Start({setCharHealth, userID, character, setCharacter, started, setStarted, setRows}) {
    const [list, setList] = useState([])
    const [myName, setMyName] = useState("")

    function handleOption(e){
        setMyName(e)
        fetch(`/character/?name=${e}`)
        .then(r=>r.json())
        .then(r=>setCharacter(r))
    }    

    const history = useHistory();
    const routeChange = () =>{  
        if(character !== null && character !== undefined && character !== ""){
           
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
            fetch(`/characters/?user_id=${userID}`)
            .then((r)=>r.json())
            .then((r)=>{setList(r)
            handleOption(r[0].name)
            })
    }},[userID])

    return(
        <div>
            <select
                onChange={e=>handleOption(e.target.value)}
                value = {myName}>
                {list.map((myChar)=>{
                    return <option key={myChar.id} value={myChar.name}>{myChar.name}</option>
                })}
            </select>  
            <button onClick={routeChange}>Start</button>
        </div>
    )
    
}

export default Start;