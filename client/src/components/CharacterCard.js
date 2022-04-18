import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
function CharacterCard({character}){
    const [items, setItems] = useState([])
    const [display, setDisplay] = useState(null)
    useEffect(()=>{
        fetch(`/items/?character_id=${character.id}`)
        .then(r=>r.json())
        .then(r=>setItems(r))
    },[])
    useEffect(()=>{
        setDisplay(items.map((item)=>{
            return <ItemCard item = {item}/>
        }))
    },[items])
    return(
        <div className="characterCard">
            <p>{character.name}</p>
            {display}
        </div>
    )
}

export default CharacterCard;