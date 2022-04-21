import { useEffect, useState } from "react";

function Random(){ 
    const [myEvent, setEvent] = useState(null)


    //Random number generator
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Loads random event
    useEffect(()=>{
        let myInt = getRandomInt(0,3)
        fetch(`/random/?id=${myInt}`)
        .then(r=>r.json())
        .then(r=>setEvent(r))
    },[])
    return(
        <div className="randomPage">
            <h1>Random</h1>
        </div>
    )
}

export default Random;