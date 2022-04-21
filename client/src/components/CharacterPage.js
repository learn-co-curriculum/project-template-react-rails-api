import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ItemCard from "./ItemCard";

function CharacterPage({characterName}){
    const [items, setItems] = useState([])
    const [display, setDisplay] = useState(null)
    const [myReset, setReset] = useState(false)
    const [character, setCharacter] = useState(null)
    const history = useHistory();
    
    const backButtonClick = () =>{  
        let path = `/characters`; 
        history.push(path);
    }



    useEffect(()=>{
        fetch(`/items/?name=${characterName}`)
        .then(r=>r.json())
        .then(r=>setItems(r))
    },[characterName, myReset])

    useEffect(()=>{
        setDisplay(
            items.map((item)=>{
                return <ItemCard characterName={characterName} setReset = {setReset} myReset={myReset} key = {item.id} item = {item} />
            })
        )
    },[myReset, items])


    return(
        <div className="charPage">
            <button onClick ={backButtonClick} >Back</button>
            <div className="characterCard">
            <h1>{characterName}</h1>
            {display}</div>
        </div>
    )
}

export default CharacterPage;