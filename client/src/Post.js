import Comment from "./Comment";
import {useState} from "react";

function Post({postObj}){
    const [showComment, setShowComment] = useState (false)

    const flipPost = () => {
        setShowComment(!showComment)
    }
console.log(postObj)
    return(
    <div className ="flip-post-card" >
        { showComment ?         
            (<div className="post-container-back">
                {/* <h1>COMMENTS</h1> */}
                    <div className="post-comments">
                    <Comment id ={postObj.id} />
                    </div>
                    <p onClick = {flipPost}>go back</p>
            </div>)  
            :
            (<div className="post-container-front" >
                <div className="post-card">
                    {/* <h1> Post page </h1> */}
                    <div className="post-header">
                        <img className="post-image" src={postObj.image_url} onClick = {flipPost}/>
                    </div>
                    <span className="post-tag">Adventure</span>
                    <div className="post-text">
                        <p className="post-description">{postObj.description}</p>
                        {/* <Comment /> */}
                    </div>
                    <div className="post-user-info">
                        <img className="user-profile-pic" src="http://www.gravatar.com/avatar/ce3bb023d8a98e752c4c2fedaf647964?s=500&d=robohash&r=g" alt="user"/>
                        <p className="post-username">richard123</p>
                    </div>
                    
            </div>
            </div> )
        }
    </div>
    )
}

export default Post