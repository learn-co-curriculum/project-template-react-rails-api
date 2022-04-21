import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function CharacterList({userID, setPickedChar, setCharacter}){
    const [list, setList] = useState([])
    const [myReset, setReset] = useState(false)
    const history = useHistory();


    function routeChange(e){  
        setPickedChar(e.target.value)
        fetch(`/character/?name=${e.target.value}`)
        .then(r=>r.json())
        .then(r=>setCharacter(r))
        let path = `/characterPage`; 
        history.push(path);
    }

    function deleteChar(e){
        const formData = {
            id: e.target.value
        }
        
        fetch(`/character`,{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          })
          .then(setReset(!myReset))
    }

    useEffect(()=>{
        if(userID !== null)
        {
            fetch(`/characters/?user_id=${userID}`)
            .then((r)=>r.json())
            .then((r)=>setList(r))
        }
    },[userID, myReset])

    return(
        <div className="loginPage">
            {list.map((character)=>{
                return <div key = {character.id} className="characterCard">
                    <h1>{character.name}</h1>
                    <button onClick={e=>deleteChar(e)} value = {character.id}>X</button>
                    <button onClick={e=>routeChange(e)} value = {character.name}>Items</button>
                </div>
            })}
        </div>
    )
}

export default CharacterList;