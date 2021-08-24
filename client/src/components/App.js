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
    const [search, setSearch] = useState("")
    const [reviews, setReviews] = useState([])

    function handleNewReviews(newReview) {
        setReviews([...reviews, newReview])
    }
console.log(noodles)
    useEffect(() => {
        fetch("http://localhost:3000/reviews")
          .then((resp) => resp.json())
          .then((data) => setReviews(data));
      }, []);
    
    useEffect(() => {
        fetch("http://localhost:3000/dishes")
          .then((resp) => resp.json())
          .then((data) => {
              for (let dish of data) {
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
                        noodles={noodles}
                        setNoodles={setNoodles}
                        login={login}
                        setLogin={setLogin}
                        setSearch={setSearch}
                        search={search}
                        setReviews={setReviews}
                        reviews={reviews}
                        handleNewReviews={handleNewReviews}
                        />
                    </Route>
                    <Route exact path="/stircard">
                        <StirPage
                        stirFry={stirFry}
                        setStirFry={setStirFry}
                        login={login}
                        setLogin={setLogin}
                        setSearch={setSearch}
                        setReviews={setReviews}
                        search={search}
                        reviews={reviews}
                        handleNewReviews={handleNewReviews}
                        />
                    </Route>
                    <Route exact path="/dimcard">
                        <DimPage
                        dimsum={dimsum}
                        setDimsum={setDimsum}
                        login={login}
                        setLogin={setLogin}
                        setSearch={setSearch}
                        search={search}
                        setReviews={setReviews}
                        reviews={reviews}
                        handleNewReviews={handleNewReviews}
                        />
                    </Route>
                </Switch>
                </div>
            </Router>
          
      )
}

export default App;