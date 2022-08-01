import Header from "./everyone/Header";
import InformationContainer from "./InformationContainer";
import "../App.css";
import { useState, useEffect } from "react";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [user, setUser] = useState({});

  const [recCenters, setRecCenters] = useState([]);
  console.log(loginModalOpen, user, recCenters);

  useEffect(() => {
    fetch("http://localhost:3000/me")
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setUser(data);
        }
      });

    fetch(`http://localhost:3000/rec_centers`)
      .then((res) => res.json())
      .then((data) => setRecCenters(data));
  }, []);

  return (
    <div className="App">
      <Header setLoginModalOpen={setLoginModalOpen} />
      <InformationContainer
        recCenters={recCenters}
        loginModalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        setUser={setUser}
      />
    </div>
  );
}

export default App;
