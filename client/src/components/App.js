import { useEffect, useState, useHistory } from "react";
import "../App.css";
import Header from "./Header";
import CardContainer from "./CardContainer"
import LoginPage from "./LoginPage"
import HomePage from "./HomePage"

function App() {
    const [login, setLogin] = useState(null);
    const [dishes, setDishes] = useState([])
    // const history = useHistory();
    // console.log(login)
    // if(!login)history.push("/signup")
    useEffect(() => {
        fetch("http://localhost:3000/dishes")
          .then((resp) => resp.json())
          .then((data) => setDishes(data));
      }, []);

      return (
          <div className="App">
              <Header />
              <CardContainer 
              dishes={dishes}
              setDishes={setDishes}
              />
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