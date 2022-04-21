import { useEffect, useState } from "react";

function ItemCard({item, setReset, myReset, characterName}){
    const [character, setCharacter] = useState(null)

    useEffect(()=>{
        fetch(`/character/?name=${characterName}`)
        .then(r=>r.json())
        .then(r=>setCharacter(r))
    },[])

    function equip(){
        fetch(`/character/equip/${item.itemType}/?name=${characterName}&${item.itemType}=${item.atk}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            }})
            .then(r=>r.json())
            .then((r)=>{if(r.errors===undefined){alert("item equipped")}})
    }

    function deleteItem(){
        const formData = {
            id: item.id
        }
        fetch(`/item`,{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          })
          .then(setReset(!myReset))
    }
    return(
        <div className="itemCard">
            <h3>{item.itemType}</h3>
            <ul>
                <p>Attack: {item.atk}</p>
                <p>Strength: {item.str}</p>
                <p>Agility: {item.ag}</p>
                <p>Inteligence: {item.intel}</p>
                <p>Exp Gain: {item.exp_gain}</p>
            </ul>
            <button onClick={deleteItem}>X</button>
            <button onClick={equip}>Equip</button>
        </div>
    )
}

export default ItemCard;