import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return(
    <div>
        <NavLink to="GameTwo">
            <button>Speed Typer</button>
        </NavLink>

        <NavLink to="Flappybird">
            <button>Flappybird</button>
        </NavLink>

        <NavLink to="GameThree">
            <button>Reacteroids</button>
        </NavLink>
    </div>
    // this is just for a commit
    )

}

export default Home