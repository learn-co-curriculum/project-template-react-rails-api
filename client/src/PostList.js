import Post from "./Post"
import PostForm from "./PostForm"

function PostList({postsData, setPostsData}){
    // console.log(setPostsData)
    const renderPosts = postsData.map(postObj => {
        return (
            <Post key={postObj.id} postObj={postObj}/>
        )
    })
    

    return(
        <div>
           <PostForm setPostsData={setPostsData} postsData={postsData}/>
           {renderPosts}
        </div>
    )
}

export default PostList