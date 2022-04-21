import {useState} from 'react'
function CharacterCreator({userID}) {
    const [myClass, setMyClass] = useState("crab")
    const [name, setName] = useState("")

    function handleOption(e){
        console.log(e.target.value)
        setMyClass(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(e.target.value !== ""){
        const formData = {
            name: name,
            user_id: userID,
            atk: 10,
            str: 0,
            ag: 0,
            intel: 0,
            exp: 0,
            exp_gain: 0,
            level: 0,
            charClass: myClass,
            trinket: 0,
            armor: 0,
            weapon: 0
        }
        fetch("/characters", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),}
            )
        }
        else{
            alert("Name Required")
        }
    }

    return(
        <div className='loginPage'>
            <form className="loginForm" onSubmit={(e)=>handleSubmit(e)}>
            <select
                    className="loginput" 
                    onChange={handleOption}
                    value = {myClass}>
                    <option value= "crab">Crab(Strength)</option>
                    <option value = "cat">Cat(Agility)</option>
                    <option value = "owl">Owl(Inteligence)</option>
                </select>  
                <input placeholder="Character Name" value = {name} onChange = {(e)=>{setName(e.target.value)}}/>
                <button>Create</button>
            </form>
        </div>
    )
}

export default CharacterCreator;