import React, {useState} from 'react'


function ChoreForm({user, setChores, chores, setChoreErrors}){
    const [choreData, setChoreData] = useState({
        chore_name:"",
        description:"",
        min_age: 6,
        household_id: user.household_id
    })

    function handleChoreCreate (event){
        setChoreData({...choreData, 
            [event.target.name] : event.target.value
        })
    }

    function handleChoreSubmit(event){
        event.preventDefault()
        fetch(`/chores`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(choreData)
        })
        .then(response => {
            if (response.ok) {
                response.json().then((chore) => setChores(...chores, chore));
            } else {
                response.json().then((err) => setChoreErrors(err.errors));
            }
        })
    }
    
    return (
        <div>
            <form onSubmit={handleChoreSubmit}>
                <input name="chore_name" value={choreData.chore_name} placeholder='chore' onChange={handleChoreCreate}></input>
                <input name="description" value={choreData.description} placeholder='description' onChange={handleChoreCreate}></input>
                <select name="min_age" onChange={handleChoreCreate}>
                    <option defaultValue>Select Age</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                </select>
                <button>Create New Chore</button>
            </form>
        </div>
    )
}

export default ChoreForm
