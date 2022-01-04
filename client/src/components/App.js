import React, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import LocationList from "../pages/LocationList";
// import NewBathroom from "../pages/NewBathroom";

function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;



  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          {/* <Route path="/new" element={<NewBathroom user={user} />}>
            {/* <NewBathroom user={user} /> */}
          {/* </Route> */} 
          <Route path="/locations" element = {<LocationList />}>
            {/* <LocationList /> */}
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;