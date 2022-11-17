import "../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Switch, Route, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Home from "./Home";
import Bands from "./Bands";
import Profile from "./Profile";
import Concerts from "./Concerts";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { AppShell, Navbar, Header } from "@mantine/core";

function App() {
  const [bands, setBands] = useState([]);
  const [venues, setVenues] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const [showUserConcerts, setShowUserConcerts] = useState(false);

  const history = useHistory();
  console.log("hello", user);

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

  useEffect(() => {
    fetch(`/me`).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setShowUserConcerts(true);
        });
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  function onAddBand(newBand) {
    setBands([...bands, newBand]);
  }

  function handleNewStub(addedStub) {
    console.log(addedStub);
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

  function handleLogin(addUser) {
    setUser(addUser);
    setShowUserConcerts(true);
  }

  function logOut() {
    fetch("/logout", {
      method: "DELETE",
    });
    history.push(`/`);
    setShowUserConcerts(false);
    setUser("");
  }
  console.log(user);

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 150 }} height={1000} p="xs">
          <NavLink exact to="/" className="underline-style">
            Home
          </NavLink>
          <br></br>
          <NavLink to="/concerts" className="underline-style">
            Concerts
          </NavLink>
          <br></br>
          <NavLink to="/bands" className="underline-style">
            Bands
          </NavLink>
          <br></br>
          {user ? (
            <NavLink to="/profile" className="underline-style">
              Profile
            </NavLink>
          ) : null}
          <br></br>
          {user ? null : (
            <NavLink className="underline-style" to="/login">
              LogIn
            </NavLink>
          )}
          <br></br>
          {user ? null : (
            <NavLink className="underline-style" to="/signup">
              SignUp
            </NavLink>
          )}
        </Navbar>
      }
      header={
        <Header
          height={0}
          p="xs"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          {/* CONCERT TRACKER */}
        </Header>
      }
    >
      <div className="App">
        <div className="logout">
          {user ? user.first_name : null}{" "}
          {user ? <button onClick={logOut}>Log Out</button> : null}
        </div>
        {/* <NavBar /> */}
        {/* <SearchBar search={search} setSearch={setSearch} /> */}
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
              user={user}
              bands={bands}
              handleNewStub={handleNewStub}
              displayedBands={displayedBands}
              displayedVenues={displayedVenues}
              search={search}
              setSearch={setSearch}
              showUserConcerts={showUserConcerts}
              setShowUserConcerts={setShowUserConcerts}
            />
          </Route>
          <Route path="/bands">
            <Bands
              filteredBands={displayedBands}
              featuredBands={bands}
              onAddBand={onAddBand}
              displayedBands={displayedBands}
              displayedVenues={displayedVenues}
              search={search}
              setSearch={setSearch}
            />
          </Route>
          <Route path="/profile">
            <Profile user={user} setUser={setUser} />
          </Route>
          <Route path="/login">
            <LogIn
              handleLogin={handleLogin}
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
