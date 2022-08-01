import Header from "./everyone/Header";
import InformationContainer from "./InformationContainer";
import "../App.css";
import { useState, useEffect } from "react";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [user, setUser] = useState({});

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
      <Header setLoginModalOpen={setLoginModalOpen} />
      <InformationContainer
        loginModalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        setUser={setUser}
      />
    </div>
  );
}

export default App;
