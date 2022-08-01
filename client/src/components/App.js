import Header from "./everyone/Header";
import InformationContainer from "./InformationContainer";
import "../App.css";
import { useState, useEffect } from "react";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [user, setUser] = useState({});
  console.log(user);

  useEffect(() => {
    fetch("http://localhost:3000/me", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setUser(data);
        }
      });
  }, []);

  return (
    <div className="App">
      <Header
        setLoginModalOpen={setLoginModalOpen}
        user={user}
        setUser={setUser}
      />
      <InformationContainer
        loginModalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        setUser={setUser}
        user={user}
      />
    </div>
  );
}

export default App;
