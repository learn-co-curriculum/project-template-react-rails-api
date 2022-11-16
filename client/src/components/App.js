import "../App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Home from "./Home";
import Bands from "./Bands";
import Profile from "./Profile";
import Concerts from "./Concerts";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function App() {
  const [bands, setBands] = useState([]);
  const [venues, setVenues] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  console.log(bands);
  console.log(concerts);
  // user state to be added

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

  function onAddBand(newBand) {
    setBands([...bands, newBand]);
  }

  const params = useParams();
  const { id } = params;
  useEffect(() => {
    fetch(`/users/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setLoading(false);
        });
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

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
        <Route path="/concerts">
          <Concerts
            concerts={concerts}
            setConcerts={setConcerts}
            venues={displayedVenues}
            setVenues={setVenues}
          />
        </Route>
        <Route path="/bands">
          <Bands
            filteredBands={displayedBands}
            featuredBands={bands}
            onAddBand={onAddBand}
          />
        </Route>
        {/* <Route path="/profile">
          <Profile
          // user state to be added
          />
        </Route> */}
        <Route path="/login">
          <LogIn
          // user state to be added
          />
        </Route>
        <Route path="/signup">
          <SignUp
          // user state to be added
          />
        </Route>
      </Switch>
      {user.name}
      if(loading) return <h1>Loading</h1>
      if(errors) return <h1>{errors}</h1>
    </div>
  );
}

export default App;
