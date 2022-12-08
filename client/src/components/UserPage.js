import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function UserPage(){
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const params = useParams()

    useEffect(()=>{
        fetch(`/users/${params.id}`)
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

    const {first_name, last_name, username, image_url} = user

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

    return (
        <div>
            <h1>{first_name} {last_name}</h1>
            <h3>Account</h3>
            <p>{image_url}</p>
            <p>{username}</p>
        </div>
    )
}

export default UserPage