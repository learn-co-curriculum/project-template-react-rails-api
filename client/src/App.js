import "./App.css";
// import LoginForm from "./LoginForm";
import Header from "./Header";
import MainWindow from "./MainWindow";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <LoginForm /> */}
          <Header user={user} />
        </header>
        <div className="main-window">
          <MainWindow user={user} />
        </div>
      </div>
    </>
  );
}

export default App;
