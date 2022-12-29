 import { useState, useEffect} from "react"
 import CommentItem from "./CommentItem"

function Comment ({postId, userData}){
    const [ commentsAry, setComments ] = useState ( [] )
    const [ input, setInput ] = useState ( "" )

    useEffect( () =>{
    fetch (`/postcomments/${postId}`)
    .then ( r => r.json() )
    .then ( setComments )
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        const newComment = {
            content: input,
            user_id: userData.id,
            post_id: postId
        }
        fetch('/comments',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( newComment )
        })
        .then(res => res.json())
        .then( newComment => setComments([...commentsAry, newComment]))
    }

    const renderComments = commentsAry.map( comment => {
        return <CommentItem comment = {comment} setComments= {setComments} setInput = {setInput}/>
    })

    // console.log(input)

    return(
        <div id= "comment-con">
           <h3> Comments:</h3>
           {renderComments}
           <form id = "comment-form" onSubmit={{ handleSubmit }}>
                <input type ='text' placeholder = "enter your comment" value = {input} onChange={ e => setInput(e.target.value)}/>
                <button className = "lg-btn"type="submit"> + </button>

           </form>
        </div>
    )
}

export default Comment
