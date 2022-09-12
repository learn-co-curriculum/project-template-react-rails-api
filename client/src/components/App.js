import { Routes, Route } from "react-router-dom";
import NavBar from "./Navbar"
import Login from "./Login"

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path = "/login">
          <Login />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
