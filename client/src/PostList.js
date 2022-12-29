import Post from "./Post"
import PostForm from "./PostForm"

// function PostList({postsData, setPostsData, userData, allUserData}){
function PostList({postsData, setPostsData, userData}){

    // console.log(postsData)
    // const allUsers = []

    // const renderAllUsers = allUserData.map(allUsersObj => {
    //     allUsers.push(allUsersObj)
    // })
    // console.log(allUsers)

    const renderPosts = postsData.map(postObj => {
        return (
                <Post key={postObj.id} postObj={postObj} userData={userData}/>
        )
    })

    // const renderAllUsers = allUserData.map(allUsersObj => {
        // return(
        //     <Post key={allUsersObj.id} allUsersObj={allUsersObj}/>
        // )

    // })

    return(
        <div>
            <PostForm setPostsData={setPostsData} postsData={postsData} userData= { userData }/>
            <div className= "post-list">
               {renderPosts}
                {/* {renderAllUsers} */}
            </div>
        </div>
        )
}

export default PostList
