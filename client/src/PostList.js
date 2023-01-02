import React from 'react';
import Post from "./Post"
import PostForm from "./PostForm"

function PostList({postsData, setPostsData, userData}){

    const renderPosts = postsData.map(postObj => {
        return (
                <Post key={postObj.id} postObj={postObj} userData={userData}/>
        )
    })


    return(
        <div>
            <PostForm setPostsData={setPostsData} postsData={postsData} userData= { userData }/>
            <div className= "post-list">
               {renderPosts}
            </div>
        </div>
        )
}

export default PostList
