
function CommentItem( {comment, setComments, setInput}){

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
            body:JSON.stringify( setInput)
        })
        .then( updateComment )
    }

    const deleteComment = id => {
        
        setComments(current => current.filter( comment => comment.id !== id ))
    }

    const handleDelete = () => {
        fetch(`/comments/${comment.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then( res => { deleteComment(comment.id)} )

    }

    return (
        <div className="comment-list">
            <div className= "btn-div">
                <button className = "sm-btn" onClick= {handleDelete} > X </button>
                <button className = "sm-btn" onClick = {handleUpdate}> edit</button>
            </div>
            <br/>
            <div className="user-div">
                <img className = "user-avatar" src = {comment.user.avatar} alt = "user-avatar"/>
                <p className = "user-name">{comment.user.username}</p>
                <h5 className = "user-content">{comment.content}</h5>
            </div>
        </div>
        )

}
export default CommentItem;