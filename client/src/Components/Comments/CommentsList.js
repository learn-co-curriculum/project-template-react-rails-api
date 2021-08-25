import React from 'react'
import Comment from './Comment'

const CommentsList = ({ commentResults }) => {

    
    return (
        <div>
            <h1>Comments</h1>
        {commentResults.map(comment => {
            return (
                
                <Comment 
                    key={comment.id}
                    comment={comment.comment}
                    commentResults={commentResults}
                    />
                
            )
        })}
        </div>
    )
}

export default CommentsList
