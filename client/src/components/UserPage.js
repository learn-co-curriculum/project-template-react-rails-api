import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
function UserPage(){
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    
    const params = useParams()
    const {id} = params
    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
       
    },[])

    if(loading) return <div className="loading"><div></div><div></div><div></div><div></div></div>
    if(errors) return <h1 className="content">{errors}</h1>
    return (
        <div id="user-page" className="content">
            <h1>{user.name}</h1>
            <h3>Tickets</h3>
            {/* <ul>
                {user.tickets.map(ticket => (
                <li>
                    <h2>{ticket.production.title}</h2>
                    <p>Price: {ticket.price}</p>
                </li>
                ))}
            </ul> */}
        </div>
    )
}

export default UserPage