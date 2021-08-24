import React from 'react'

import { useEffect, useState } from 'react' 
import Comment from './Comment'

const CommentsList = ({user}) => {
    const [commentResults, setCommentResults] = useState([])

    
    useEffect(() => {
        fetch('/comments')
        .then(resp => resp.json())
        .then(data => setCommentResults(data))
    }, [])
    
    return (
        <>
            <h1>Comments</h1>
        {commentResults.map(comment => {
            return (
                <>
                <Comment 
                    id={comment.id}
                    comment={comment.comment}/>
                </>
            )
        })}
        </>
    )
}

export default CommentsList
