import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({userID}){
    const [list, setList] = useState([])
    const [display, setDisplay] = useState([])

    useEffect(()=>{
        if(userID !== null)
        {
            fetch(`/character/?user_id=${userID}`)
            .then((r)=>r.json())
            .then((r)=>setList(r))
        }
    },[userID])

    useEffect(()=>{
        if(list[0] !== null){
            let myDisplay = list.map((character)=>{
                return <CharacterCard character={character} key = {character.id}/>
            })
        setDisplay(myDisplay)}
    },[list])

    return(
        <div>
            {display}
        </div>
    )
}

export default CharacterList;