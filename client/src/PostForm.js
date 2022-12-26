import React from 'react';
import { useState } from 'react'

function PostForm ({postsData, setPostsData}){
    const [newPostObj, setNewPostObj] = useState (
        {
            description: "",
            image_url: ""
        }
    )

    function handleSubmit(e){
        e.preventDefault();
        fetch('/posts', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( newPostObj )
        })
        .then(res => res.json())
        .then(newPost => {
            setPostsData([...postsData, newPost])
        })

        setNewPostObj({
            description: "",
            image_url: ""
        })
    }
    return (
        <form className = "post-form" onSubmit={handleSubmit}>
            <div>
                <h1>Create A New Post</h1> 
                <input onChange={(e) => setNewPostObj({...newPostObj, description: e.target.value})}
                name="description" type="text" value= {newPostObj.description} placeholder="Description"/>
                <input onChange={(e) => setNewPostObj({...newPostObj, image_url: e.target.value})}
                name="image_url" type="text" value= {newPostObj.image_url} placeholder="Image Link"/>
                
            </div>
            <button className="post-form-button" type="submit">New Post</button>
        </form>
    )
}

export default PostForm