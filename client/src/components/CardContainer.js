import { useState, useEffect } from "react";
import Search from "./Search";
import DishesList from "./DishesList"

function CardContainer({dishes, setDishes}) {
    const [ reviews, setReviews ] = useState([])
    
    function handleNewReview (newReview) {
        setReviews([...reviews, newReview])
    }

      return (
        <div className="card-container">
            <Search search={search}
            setSearch={setSearch}
            />
            <DishesList
            dishes={dishes}
            setDishes={setDishes}
            reviews={reviews}
            setReviews={setReviews}
            search={search}
            handleNewReview={handleNewReview}
            />
        </div>
      );
}

export default CardContainer;