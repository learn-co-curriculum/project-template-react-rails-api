import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Fight({charHealth, setCharHealth, level, owl}){
    const [enemy, setEnemy] = useState([])
    const [display, setDisplay] = useState(null)
    const [enHealth, setEnHealth] = useState(100)
    const [toggleAtk, setAtkAnim] = useState(true)
    const [toggleEnAtk, setEnAtkAnim] = useState(0)
    const [display2, setDisplay2] = useState(
    )
    const history = useHistory();


    
    //deals damage to enemy based on character attack
    function dealDamage(){
        setTimeout(()=>{setEnHealth(enHealth-10+enemy.defense)}, 550)
        setAtkAnim(1)
        if(enHealth-10+enemy.defense <= 0){
            let path = `/win`; 
            history.push(path);
            
        }
        setTimeout(()=>{takeDamage()}, 2000)
    }
    //Deals damage to character based on enemy attack
    function takeDamage(){
        setCharHealth(charHealth-enemy.attack)
        if(charHealth-enemy.attack <= 0){
            let path = `/lose`; 
            history.push(path);
        }
    }
    //gets the data for the enemy when the fight starts
    useEffect(()=>{
        fetch(`/enemy/?level=${level}`)
        .then(r=>r.json())
        .then((r)=>setEnemy(r[0]))
    },[])

    //updates the display when the health values are updated
    useEffect(()=>{
        setDisplay(
            <div className="barHolder">
            <h1 className="healthBar">{charHealth}/100</h1>
            <h1 className="healthBar">{enemy.name}: {enHealth}/100</h1>
            </div>
        )
    },[enHealth, charHealth, enemy])

    //Causes attack animation on button click
    useEffect(()=>{
        if(toggleAtk===1){
            setDisplay2(<img onAnimationEnd={()=>setAtkAnim(0)} className='fighterAtk' src={owl} />) 
            console.log(display2)
        }
        else{
                setDisplay2(<img className='fighter' src={owl} />) 
                console.log(display2)

        }
    },[toggleAtk])


    return(
        <div className="fightPage">
            <div className="ceiling">{display}</div>
            <div className="fighterContainer">
            {display2}
            <img className='enemy' src={owl} />
            </div>
            <div className="floor">
            <div className="fightButtons" >
            <button className="fightButton" onClick={dealDamage}>Attack</button>
            <button className="fightButton" onClick={takeDamage}>Take</button>
            </div>
            </div>
        </div>
    )
}

export default Fight;