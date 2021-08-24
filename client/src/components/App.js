import { useEffect, useState, useHistory } from "react";
import "../App.css";
import NoodlePage from "./NoodlePage"
import DimPage from "./DimPage"
import StirPage from "./StirPage"
import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import { 
    BrowserRouter as Router, 
    Route,
    Link,
    Switch
    } from "react-router-dom";

function App() {
    const [login, setLogin] = useState(false);
    const [dishes, setDishes] = useState([])
    const [stirFry, setStirFry] = useState([])
    const [dimsum, setDimsum] = useState([])
    const [noodles, setNoodles] = useState([])
    // const history = useHistory();
    // console.log(login)
    // if(!login)history.push("/signup")
    
    useEffect(() => {
        fetch("http://localhost:3000/dishes")
          .then((resp) => resp.json())
          .then((data) => {
              for (let dish of data) {
                  console.log(dish.cuisine)
                if (dish.cuisine == "stir-fry") {
                    setStirFry  ([...stirFry, dish])
                } if (dish.cuisine == "dim-sum") {
                    setDimsum ([...dimsum, dish])
                }  if (dish.noodles == "noodles") {
                    setNoodles ([...noodles, dish])
                }
              }
          });
      }, []);

      return (
            <Router>
                <div className="header">
                    <div className="navbar">
                <h1 className="header-title">Har Gow</h1>
                <nav className="navbar">
                    <Link to="/">Home</Link>|
                    <Link to="/noodlecard"> Noodles </Link>|
                    <Link to ="/stircard">Stir-Fry </Link>|
                    <Link to ="/dimcard">Dim Sum</Link>
                </nav>
                </div>

                <Switch>

                    <Route exact path="/">
                        <HomePage
                        />
                    </Route>
                    <Route exact path="/noodlecard">
                        <NoodlePage
                        login={login}
                        setLogin={setLogin}
                        />
                    </Route>
                    <Route exact path="/stircard">
                        <StirPage
                        login={login}
                        setLogin={setLogin}
                        />
                    </Route>
                    <Route exact path="/dimcard">
                        <DimPage
                        login={login}
                        setLogin={setLogin}
                        />
                    </Route>
                </Switch>
                </div>
            </Router>
          
      )
}

export default App;