import { useEffect, useState, useHistory } from "react";
import "../App.css";
import Header from "./Header";
import CardContainer from "./CardContainer"
import LoginPage from "./LoginPage"
import HomePage from "./HomePage"

function App() {
    const [login, setLogin] = useState(null)
    const history = useHistory()

    console.log(login)
    if(!login)history.push("/signup")

      return (
          <div className="App">
              <Header />
              <LoginPage 
              setLogin={setLogin}
              />
              <HomePage
              login={login}
              setLogin={setLogin}
              />
          </div>
      )
}

export default App;