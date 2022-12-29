import Comment from "./Comment";
import {useState} from "react";

function Post({postObj, userData}){
    // console.log(allUserData)

    console.log(postObj)
    const [showComment, setShowComment] = useState (false)
    const flipPost = () => {
        setShowComment(!showComment)
    }
// console.log(postObj.user_data.username)
    return(
    <div className ="flip-post-card" >
        { showComment ?
            (<div className="post-container-back">
                {/* <h1>COMMENTS</h1> */}
                    <div className="post-comments">
                    <Comment postId ={postObj.id} userData = {userData}/>
                    </div>
                    <p className="post-direction" onClick = {flipPost}> ---back to the post---</p>
            </div>)
            :
            (<div className="post-container-front" >
                <div className="post-card">
                    {/* <h1> Post page </h1> */}
                    <div className="post-header">
                        <img className="post-image" src={postObj.image_url} onClick = {flipPost}/>
                    </div>
                    <span className="post-tag">{postObj.tag}</span>
                    <div className="post-text">
                        <p className="post-description">{postObj.description}</p>
                        {/* <Comment /> */}
                    </div>
                    <div className="post-user-info">
                        <img className="user-profile-pic" src={postObj.user_data.avatar} alt="user"/>
                        <p className="post-username">{postObj.user_data.username}</p>
                    </div>
            </div>
            </div> )
        }
    </div>
    )
}

export default Post
