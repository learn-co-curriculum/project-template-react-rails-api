import { useEffect, useState } from "react";

function Fight({charHealth, setCharHealth, level}){
    const [acted, setActed] = useState(false)
    const [enemy, setEnemy] = useState([])
    const [display, setDisplay] = useState(null)
    const [enHealth, setEnHealth] = useState(100)


    //deals damage to enemy based on character attack
    function dealDamage(){
        setEnHealth(enHealth-10+enemy.defense)
        if(enHealth-10+enemy.defense <= 0){
            console.log("You Win")
        }
        setTimeout(()=>{takeDamage()}, 2000)
    }
    //Deals damage to character based on enemy attack
    function takeDamage(){
        setCharHealth(charHealth-enemy.attack)
        if(charHealth-enemy.attack <= 0){
            console.log("You Lose")
        }
    }
    //gets the data for the enemy when the fight starts
    useEffect(()=>{
        fetch(`/enemy/?level=${level}`)
        .then(r=>r.json())
        .then((r)=>setEnemy(r[0]))
        console.log(enemy)
    },[])
    //updates the display when the health values are updated
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