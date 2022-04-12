import { useEffect, useState } from "react";

function Fight({charHealth, setCharHealth}){
    const [enemy, setEnemy] = useState(null)
    const [display, setDisplay] = useState(null)
    const [enHealth, setEnHealth] = useState(100)

    useEffect(()=>{
        
    },[])

    function dealDamage(){
        setEnHealth(enHealth-10)
        if(enHealth <= 0){
            console.log("You Win")
        }
    }

    function takeDamage(){
        setCharHealth(charHealth-10)
        if(charHealth <= 0){
            console.log("You Lose")
        }
    }


    return(
        <div>
            <div>
            <h1>{charHealth}/100</h1>
            <h1>Enemy: {enHealth}/100</h1>
            </div>
            <button onClick={dealDamage}>Attack</button>
            <button onClick={takeDamage}>Take</button>
        </div>
    )
}

export default Fight;