import { useEffect, useState } from "react";

function Fight({charHealth, setCharHealth, level}){
    const [enemy, setEnemy] = useState([])
    const [display, setDisplay] = useState(null)
    const [enHealth, setEnHealth] = useState(100)

    useEffect(()=>{
        fetch(`/enemy/?level=${level}`)
        .then(r=>r.json())
        .then((r)=>setEnemy(r[0]))
        console.log(enemy)
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

    useEffect(()=>{
        setDisplay(
            <div>
            <h1>{charHealth}/100</h1>
            <h1>{enemy.name}: {enHealth}/100</h1>
            </div>
        )
    },[enHealth, charHealth, enemy])


    return(
        <div>
            {display}
            <button onClick={dealDamage}>Attack</button>
            <button onClick={takeDamage}>Take</button>
        </div>
    )
}

export default Fight;