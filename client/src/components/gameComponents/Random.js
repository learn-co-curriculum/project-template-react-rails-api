import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Random({gold, setGold, charHealth, setCharHealth, myEvent, setEvent}){ 
    const [display, setDisplay] = useState(null)
    const [acted, setActed] = useState(0)
    const history = useHistory();

    //Random number generator
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Loads random event
    useEffect(()=>{
        let myInt = getRandomInt(1,3)
        fetch(`/random/?id=${myInt}`)
        .then(r=>r.json())
        .then(r=>setEvent(r))
    },[])

    function handleClick(){
        let path = '/map'
        history.push(path)
    }

    useEffect(()=>{
        console.log(myEvent)
        if(myEvent!==null){
        setDisplay(
            <div>
                <div className="barHolder">
                    <h2 className="randBar">gold: {gold}</h2>
                    <h2 className="randBar">Health: {charHealth}/100</h2>
                </div>
                <img className="eventImage" src={myEvent.imageurl} />\
                <h2 className="eventText">{myEvent.situation}</h2>
                <div className="buttonHolder">
                    <button className="randButton" onClick={handleClick}>{myEvent.prompt_1}</button>
                    <button className="randButton" onClick={handleClick}>{myEvent.prompt_2}</button>
                </div>
            </div>
        )}
    },[myEvent])
    return(
        <div className="randomPage">
            <h1>Random Event</h1>
            {display}
        </div>
    )
}

export default Random;