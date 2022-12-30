import { useState } from "react"

function CommentItem( {comment, setComments, userData}){
    const [ renderEdit, setEdit] = useState( false)
    const [ updateContent, setUpdateComment ] = useState ("")

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
        fetch(`/comments/${comment.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify( {content: updateContent})
        })
        .then ( res => res.json())
        .then ( newContent => updateComment(newContent))

        setEdit(!renderEdit)
    }

    const deleteComment = id => {

        setComments(current => current.filter( comment => comment.id !== id ))
    }

    const handleDelete = () => {
        fetch(`/comments/${comment.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then( () => { deleteComment(comment.id)} )

    }

    return (
        <div className="comment-list">
            <div className= "btn-div">
                { 
                comment.user.id == userData.id? (
                    <div> 
                        <button className = "sm-btn" onClick= {handleDelete} > X </button>
                        <button className = "sm-btn" onClick = { () => setEdit(!renderEdit) }> edit</button>
                    </div>
                ) : null            
                }
            </div>
            <br/>
            <div className="user-div">
                <img className = "user-avatar" src = {comment.user.avatar} alt = "user-avatar"/>
                <p className = "user-name">{comment.user.username}</p>
                {
                    renderEdit ?
                <form onSubmit = {handleUpdate}>
                    <textarea onChange={ e => { setUpdateComment(e.target.value) }}>{comment.content}</textarea>
                    <button className = "md-btn" type = "submit" >confirm</button>
                </form>
                    :
                    <h5 className = "user-content">{comment.content}</h5>
                }
            </div>
        </div>
        )

}
export default CommentItem;
