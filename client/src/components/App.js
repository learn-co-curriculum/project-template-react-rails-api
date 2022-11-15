import "../App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Home from "./Home";
import Bands from "./Bands";
import Profile from "./Profile";

function App() {
  const [bands, setBands] = useState([]);
  const [venues, setVenues] = useState([]);
  const [concerts, setConcerts] = useState([]);

  console.log(bands);
  console.log(venues);
  console.log(concerts);

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

  const [search, setSearch] = useState("");

  const displayedBands = bands.filter(
    (band) =>
      band.name.toLowerCase().includes(search.toLowerCase()) ||
      band.genre.toLowerCase().includes(search.toLowerCase()) ||
      band.secondary_genre.toLowerCase().includes(search.toLowerCase())
  );

  const displayedVenues = venues.filter(
    (venue) =>
      venue.name.toLowerCase().includes(search.toLowerCase()) ||
      venue.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <NavBar />
      <SearchBar search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bands">
          <Bands />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
