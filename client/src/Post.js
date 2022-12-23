import Comment from "./Comment"
function Post({postObj}){
    return(
        <div className="post-container">
           {/* <h1> Post page </h1> */}
            <p className="post-description">{postObj.description}</p>
            <img className="post-image" src={postObj.image_url}/>
           {/* <Comment /> */}
        </div>
    )
}

export default Post