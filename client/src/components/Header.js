import React from 'react'
import StirCard from "./StirCard"
import NoodleCard from "./NoodleCard"
import DimCard from "./DimCard"
import HomePage from "./HomePage"
import { 
BrowserRouter as Router, 
Route,
Link,
Switch 
} from "react-router-dom";

function Header ({dishes, setDishes}) {
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
                        <NoodleCard 
                        />
                    </Route>
                    <Route exact path="/stircard">
                        <StirCard 
                        />
                    </Route>
                    <Route exact path="/dimcard">
                        <DimCard
                        />
                    </Route>
                </Switch>
                </div>
            </Router>
                
        
    )
}

export default Header;