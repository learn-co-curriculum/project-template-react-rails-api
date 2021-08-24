import React, {useState, useEffect} from 'react'

function ChildView({user}){
    const [myChores, setMyChores] = useState([])

    useEffect(() => {
        fetch(`/child_chores/${user.id}`)
        .then(response => response.json())
        .then(data => setMyChores(data))
    }, [])

    function handleFinished(event){
        event.preventDefault()
        fetch(`child_chores/${event.target.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                is_completed : true
            })
        })
        .then(response => response.json())
        .then(data => {
            const updatedMyChores = myChores.map((childChore) => {
                if (childChore.id === data.id) {
                  return { ...childChore, is_completed: data.is_completed };
                } else {
                  return childChore;
                }})
                setMyChores(updatedMyChores)
            })
    }
    
    return (
        <div>
            <h2>{user.first_name}</h2>
            <h3>Money Earned: ${user.total_earnings}</h3>
            <h4>Chores</h4>
            {myChores && myChores.map(child_chore => {
                return(
                    <>
                    <h5>{child_chore.chore.chore_name}</h5>
                    <h6>{child_chore.chore.description}</h6>
                    <h6>{child_chore.time_to_complete} minutes</h6>
                    <h4>${child_chore.reward}</h4>
                    {child_chore.is_completed 
                    ? 
                    <p>Completed</p> 
                    : 
                    <>
                    <h2>NOT DONE!</h2> 
                    <button id={child_chore.id} onClick={handleFinished}>Chore Finished</button>
                    </>}
                    </>
                )
            })}
        </div>
    )
}

export default ChildView
