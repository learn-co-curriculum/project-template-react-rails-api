import React from "react"
import { BrowserRouter as Redirect } from "react-router-dom";
import NoodleCard from "./NoodleCard"

function NoodlePage ({noodles, setNoodles, login, setLogin, search, setSearch, setReviews, reviews, handleNewReview}) {

    if (!login) {
        return <Redirect to = "/login"/>
    }
console.log(noodles)
    const filterNoodles = () => {
    return noodles.filter((noodle)=>
    noodle.name.toLowerCase().includes(search.toLowerCase()))
    }
    const displayNoodles = filterNoodles().map((noodle, index) => {
        return (
        <NoodleCard 
        noodle={noodle}
        key={index}
        reviews={reviews.filter(review => noodle.id===review.noodle_id)}
        handleNewReview={handleNewReview}
        />
        )
    })

    return (
        <ul>
            {displayNoodles}
        </ul>
    )
}

export default NoodlePage;