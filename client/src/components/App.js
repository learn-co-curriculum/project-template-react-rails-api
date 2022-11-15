import "../App.css";
import { useState, useEffect } from "react";

function App() {
  const [bands, setBands] = useState([]);
  const [venues, setVenues] = useState([]);
  const [concerts, setConcerts] = useState([]);

  console.log(bands);
  console.log(venues)
  console.log(concerts)
  x


  useEffect(() => {
    fetch("/bands")
      .then((res) => res.json())
      .then((data) => setBands(data));
  }, []);

  useEffect(() => {
    fetch("/venues")
      .then((res) => res.json())
      .then((data) => setVenues(data));
  }, []);

  useEffect(() => {
    fetch("/concerts")
      .then((res) => res.json())
      .then((data) => setConcerts(data));
  }, []);

  return <div className="App"></div>;
}

export default App;
