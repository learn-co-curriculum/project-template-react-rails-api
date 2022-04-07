import {useState} from 'react'
function CharacterCreator({userID}) {

    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(e.target.value !== ""){
        const formData = {
            name: name,
            user_id: userID,
            str: 0,
            ag: 0,
            intel: 0,
            exp: 0,
            exp_gain: 0
        }
        fetch("/characters", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),})
        }
        else{
            alert("Name Required")
        }
    }

    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input placeholder="Character Name" value = {name} onChange = {(e)=>{setName(e.target.value)}}/>
                <button>Create</button>
            </form>
        </div>
    )
}

export default CharacterCreator;