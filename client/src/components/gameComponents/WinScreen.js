import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ItemCard from "../ItemCard";

function WinScreen({gold, setGold, setCount, rowCount, character}){
    const [newItem, setNewItem] = useState(null)
    const [display, setDisplay] = useState(undefined)
    const history = useHistory();

    //Random number generator
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Reroutes back to the map on win, adds a new row
    function continueGame() {
        setCount(rowCount+1)
        let path = `/map`; 
        history.push(path);
    }

    //Creates random item
    function makeItem(){
        let myType
        let myNum = getRandomInt(0,2)
        if(myNum === 1){
            myType = "armor"
        }
        else if(myNum === 2){
            myType = "weapon"
        }
        else{
            myType = "trinket"
        }
        const formData = {
            character_id: character.id,
            itemType: myType,
            str: getRandomInt(0,29),
            ag: getRandomInt(0,29),
            intel: getRandomInt(0,29),
            exp_gain: getRandomInt(0,29),
            atk: getRandomInt(0,29)
        }
        fetch("/item", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(r=>setNewItem(r))
    }

    //Gets rewards for winning battle
    useEffect(()=>{
        makeItem()
        setGold(gold + (getRandomInt(20, 50)))
    },[])

    //Displays new item upon win
    useEffect(()=>{
        if(newItem === null){
            console.log(newItem)
        }
        else
        {
            setDisplay(
            <ItemCard characterName={character.name} item={newItem}/>
        )
    }
    },[newItem])

return(
    <div className="winPage">
        <h1 className="winHeader">Battle Won!</h1>
        <h2>Rewards:</h2>
        <h2>Gold: {gold}</h2>
        {display}
        <br></br>
        
        <button onClick={continueGame}>Continue</button>
    </div>

    )
}
export default WinScreen;