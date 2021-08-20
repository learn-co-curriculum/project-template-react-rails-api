import "./App.css";
import { useEffect, useState } from "react";
import LoginPage from "./Pages/LoginPage";
import UserHomePage from "./Pages/UserHomePage";
import Navbar from "./Components/NavBar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LoginPage onLogin={setUser} />;

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <UserHomePage />
    </div>
  );
}

export default App;
