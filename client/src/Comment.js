 import {useState, useEffect} from "react"
function Comment(){

    const [commentsAry, setComments] = useState([])

    useEffect( () =>{
    fetch ('/comments')
    .then ( r => r.json())
    .then ( setComments)
    },[])

    const renderComments= commentsAry.map( comment=>{
        return (
            <div>
                <img src = {comment.user.avatar} alt = "user-avatar"/>
                <p>{comment.user.username}</p>
                <h5> {comment.content}</h5>
            </div>
            )
        })


    return(
        <div>
           <h1> Comment page</h1>
           {renderComments}
        </div>
    )
}

export default Comment
