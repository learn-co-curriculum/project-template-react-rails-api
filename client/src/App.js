import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'


// Imported Pages
import LoginPage from "./Pages/LoginPage";
import UserHomePage from "./Pages/UserHomePage";
import Navbar from "./Components/NavBar";
import EventsPage from "./Pages/EventsPage";

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
    <>
    <Router>
      <Navbar user={user} setUser={setUser} />
      <main>
      <Switch>
      <Route path='/' exact>
        <UserHomePage />
        </Route>
        <Route path='/EventsPage' exact>
          <EventsPage />
        </Route>
      </Switch>
      </main>
    </Router>


    </>
  );
}

export default App;
