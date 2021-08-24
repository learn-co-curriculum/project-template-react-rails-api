import React from "react"
import { BrowserRouter as Redirect } from "react-router-dom";

function NoodlePage ({login, setLogin}) {

    if (!login) {
        return <Redirect to = "/login"/>
    }

    return (
        <div>

        </div>
    )
}

export default NoodlePage;