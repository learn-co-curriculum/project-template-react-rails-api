import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Fight({charAttack, charImage, charHealth, setCharHealth, level}){
    const [enemy, setEnemy] = useState([])
    const [display, setDisplay] = useState(null)
    const [enHealth, setEnHealth] = useState(100)
    const [toggleAtk, setAtkAnim] = useState(true)
    const [toggleEnAtk, setEnAtkAnim] = useState(0)

    //State variables for character sprites
    const [display2, setDisplay2] = useState(<img onAnimationEnd={()=>setAtkAnim(0)} className='fighter' src={charImage} />)
    const [display3, setDisplay3] = useState(<img onAnimationEnd={()=>setEnAtkAnim(0)} className='enemy' src={enemy.sprite} />)

    const history = useHistory();

    //deals damage to enemy based on character attack
    function dealDamage(){
        setTimeout(()=>{setEnHealth(enHealth-charAttack+enemy.defense)}, 550)
        setAtkAnim(1)
        if((enHealth-charAttack+enemy.defense )<= 0){
            let path = `/win`; 
            history.push(path);
        }
        else{
           console.log( enHealth-10+enemy.defense)
            setTimeout(()=>{takeDamage()}, 560)
        }
    }
    //Deals damage to character based on enemy attack
    function takeDamage(){
        setEnAtkAnim(1)
        if(charHealth-enemy.attack <= 0 && enHealth >= 0){
            let path = `/lose`; 
            history.push(path);
            console.log("lost")
        }
            setTimeout(()=>{setCharHealth(charHealth-enemy.attack)}, 550)
    }

    //test

    //gets the data for the enemy when the fight starts
    useEffect(()=>{

        if(level <= 3){
            fetch(`/enemy/?level=${level}`)
            .then(r=>r.json())
            .then((r)=>{setEnemy(r[0])
                        console.log(r)})
        }
        else{
            fetch(`/enemy/?level=${3}`)
            .then(r=>r.json())
            .then((r)=>{setEnemy(r[0]) 
                    console.log(r) } )
        }
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
        if(toggleAtk!==true){
        setDisplay2(<img onAnimationEnd={()=>setAtkAnim(0)} className={toggleAtk? 'fighterAtk' : 'fighter'} src={charImage} />) 
        }
    },[toggleAtk])

    //Causes enemy attack animation
    useEffect(()=>{
        if(toggleAtk!==true){
        setDisplay3(<img onAnimationEnd={()=>setEnAtkAnim(0)} className={toggleEnAtk? 'enemyAtk' : 'enemy'} src={enemy.sprite} />) 
        }
    },[toggleEnAtk])

    return(
        <div className="fightPage">
            <div className="ceiling">{display}</div>
            <div className="fighterContainer">
            {display2}
            {display3}
            </div>
            <div className="floor">
            <div className="fightButtons" >
            <button className="fightButton" onClick={dealDamage}>Attack</button>
            </div>
            </div>
        </div>
    )
}

export default Fight;