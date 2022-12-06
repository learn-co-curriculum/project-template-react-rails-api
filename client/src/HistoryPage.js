import NavBar from "./NavBar/NavBar";
import React from "react";
import { useEffect, useState } from "react";
import HistoryCard from "./HistoryCard";

function HistoryPage(){
    const [data, setData] = useState("")

    useEffect(() => {
        fetch("/me")
        .then(resp => resp.json())
        .then((data) => setData(data))
    },
    [])

    console.log(data)
    return (
        <>
            <NavBar />
        </>
    )
}

export default HistoryPage;