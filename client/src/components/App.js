import "../App.css";
import { useState, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Home from "./Home";
import Bands from "./Bands";
import Profile from "./Profile";
import Concerts from "./Concerts";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { AppShell, Navbar, Header } from '@mantine/core';




function App() {
  const [bands, setBands] = useState([]);
  const [venues, setVenues] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [search, setSearch] = useState("");

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
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 200 }} height={500} p="xs">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/concerts">Concerts</NavLink>
          <NavLink to="/bands">Bands</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/login">LogIn</NavLink>
          <NavLink to="/signup">SignUp</NavLink>
        </Navbar>}
      header={<Header height={60} p="xl">Concert Tracker</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
    <div className="App">
      {/* <NavBar /> */}
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
    </div>
    </AppShell>
  );
}

export default App;
