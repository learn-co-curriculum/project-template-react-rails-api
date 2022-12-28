 import { useState, useEffect} from "react"
 import CommentItem from "./CommentItem"

function Comment ({id}){
    const [ commentsAry, setComments ] = useState ( [] )
    const [ input, setInput ] = useState ( {content: "", user_id: 4, post_id: 31} )


    useEffect( () =>{
    fetch (`/postcomments/${id}`)
    .then ( r => r.json() )
    .then ( setComments )
    },[])

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

    const renderComments = commentsAry.map( comment => {
        return <CommentItem comment = {comment} setComments= {setComments} setInput = {setInput}/>
    })


    return(
        <div id= "comment-con">
           <h3> Comments:</h3>
           {renderComments}
           <form id = "comment-form" onSubmit={{ handleSubmit }}>
                <input type ='text' placeholder = "enter your comment" onChange={ e => setInput({...commentsAry, content: e.target.value})}/>
                <button className = "lg-btn"type="submit"> + </button>

           </form>
        </div>
    )
}

export default Comment
