import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

function Start({setCharAttack, owl, cat, crab, charImage, setImage, setCharHealth, userID, character, setCharacter, started, setStarted, setRows, setCount}) {
    const [list, setList] = useState([])
    const [myName, setMyName] = useState("")

    function handleOption(e){
        setMyName(e)
        fetch(`/character/?name=${e}`)
        .then(r=>r.json())
        .then(r=>setCharacter(r))
    }  
    
    useEffect(()=>{
    if(character!==undefined){
        if(character.charClass==="crab")
        {
            setImage(crab)
        }
        else if(character.charClass==="cat"){
            setImage(cat)
        }
        else{
            setImage(owl)
        }
        setCharAttack(character.atk + character.trinket + character.weapon + character.armor)
        console.log(character.atk)
        console.log(character.trinket)
        console.log(character.weapon)
        console.log(character.armor)

    }
    },[character])


    const history = useHistory();
    const routeChange = () =>{  
        if(character !== null && character !== undefined && character !== ""){
            let path = `/map`; 
            history.push(path);
            setStarted(true)
            setCharHealth(100)
            setCount(1)
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
                if(r[0] !== undefined){
            handleOption(r[0].name)}
            })
    }},[userID])

    return(
        <div className='start'>
            <div className='startForm'>
                <select
                    onChange={e=>handleOption(e.target.value)}
                    value = {myName}>
                    {list.map((myChar)=>{
                        return <option key={myChar.id} value={myChar.name}>{myChar.name}</option>
                    })}
                </select>  
                <img className='dispChar' src={charImage}/>
                <button className='startButton' onClick={routeChange}>Start</button>
            </div>
        </div>
    )
    
}

export default Start;