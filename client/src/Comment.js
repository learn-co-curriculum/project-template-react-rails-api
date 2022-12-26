 import { useState, useEffect } from "react"
function Comment (){
    const [ commentsAry, setComments ] = useState ( [] )
    const [ input, setInput ] = useState ( {content: ""} )

    useEffect( () =>{
    // fetch (`/postcomments/${id}`)
    fetch (`/postcomments/12`)
    .then ( r => r.json() )
    .then ( setComments )
    },[])

    // const addComment = comment => setComments ( current => [...current, comment] )

    const handleSubmit = e => {
        e.preventDefault();
        fetch('/comments',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify( input)
        })
        .then(res => res.json())
        .then( comment => { setComments([ comment, ...commentsAry])} )
    }
    const updateComment = (updatedComment) => {
        setComments(current => {
            return current.map(comment => {
             if (comment.id === updatedComment.id){
               return updatedComment
             } else {
               return comment
             }
            })
          })
    }
    const handleUpdate = e => {
        e.preventDefault()
        fetch(`/comments/56`, {
        // fetch(`/comments/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify( setInput)
        })
        .then( updateComment )
    }

    const deleteComment = id => {
        setComments(current => current.filter( comment => comment.id !== id ))
    }

    const handleDelete = () => {
        fetch(`/comments/57`, {
        // fetch(`/comments/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then( res => { deleteComment(57)} )
        // .then( res => { deleteComment(id)} )

    }

    const renderComments = commentsAry.map( comment=>{
        return (
            <div>
                <img src = {comment.user.avatar} alt = "user-avatar"/>
                <p>{comment.user.username}</p>
                <h5>{comment.content}</h5>
                <button onClick= {handleDelete} > X </button>
                <button onClick = {handleUpdate}> edit</button>
            </div>
            )
        })


    return(
        <div>
           <h1> Comment page</h1>
           <form onSubmit={{ handleSubmit }}>
                <label> ADD YOUR COMMENT</label>
                <input type='text'  onChange={ e => setInput({...commentsAry, content: e.target.value})}/>
                <input type="submit" />
           </form>
           {renderComments}
        </div>
    )
}

export default Comment
