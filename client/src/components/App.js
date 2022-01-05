import React, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import LocationList from "../pages/LocationList";
import NewBathroom from "../pages/NewBathroom";
import ReviewForm from "../pages/ReviewForm"


function App() {
  const [user, setUser] = useState(null);
  const [bathrooms, setBathrooms]= useState([]);

  const [reviews, setReviews]= useState([]);

  useEffect(() => {
    // auto-login
    fetch("api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  function handleAddBathrooms(newBathrooms) {
    setBathrooms((bathrooms) => [...bathrooms, newBathrooms]);
  }

  function handleAddReviews(newReviews) {
    setReviews((reviews) => [...reviews, newReviews]);
  }

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/locations" element = {<LocationList />}>
          </Route>
          <Route path="/new" element = {<NewBathroom onAddBathrooms={handleAddBathrooms} user={user}/>}>
          </Route>


          <Route path="/reviews" element = {<ReviewForm onAddReviews={handleAddReviews}/>}>

          </Route>
        </Routes>
      </main>

     
    </>
  );
}

export default App;