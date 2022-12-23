import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from "./Home";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import PostList from "./PostList"
import Comment from "./Comment";

function App() {
  const [ postsData, setPostsData ] = useState([])

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(postsArray => setPostsData(postsArray))
  },[])

  // console.log(postsData)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path= "/" element= {<Home />}> </Route>
        <Route path= "/welcome" element= {<Welcome />}> </Route>

        <Route path= "/posts" element= {<PostList setPostsData= {setPostsData} postsData={postsData}/>}> </Route>
        <Route path = "/comments" element= {<Comment/>}></Route>

      </Routes>
    </>
  );
}

export default App;
