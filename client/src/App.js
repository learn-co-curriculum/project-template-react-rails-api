import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from "./Home";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import PostList from "./PostList"
import Comment from "./Comment";

function App() {
  const [ postsData, setPostsData ] = useState([])
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(postsArray => setPostsData(postsArray))
  },[])


  useEffect(() => {
      fetch("/authorized_user")
      .then((res) => {
        if (res.ok) {
          res.json()
          .then((user) => {
            updateUser(user);
          });
        }
      })
    },[])

  const updateUser = (user) => setCurrentUser(user)

  return (
    <>
      <NavBar updateUser = {updateUser}/>
      <Routes>
        <Route path= "/" element= {<Home updateUser = {updateUser}/>}> </Route>
        <Route path= "/welcome" element= {<Welcome />}> </Route>

        <Route path= "/posts" element= {<PostList setPostsData= {setPostsData} postsData={postsData}/>}> </Route>
        <Route path = "/comments" element= {<Comment/>}></Route>

      </Routes>
    </>
  );
}

export default App;
