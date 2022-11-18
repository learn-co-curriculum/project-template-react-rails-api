import React from "react";
import ConcertCard from "./ConcertCard";

const BandPage = ({band, image, concerts, genre1, genre2, hometown}) => {

    // const bandConcerts = concerts.map((concert) => {
    //      <ConcertCard
    //         venue={concert.venue_name}
    //         city={concert.venue_city}
    //         date={concert.date}
    //      />
    // })

    return (
        <div>
            Hey
        </div>
        // <div>
        //     <h1>{band}</h1>
        //     <h1>Hello!</h1>
        //     <img src={image} alt={band}/>
        //     <h3>{genre1}, {genre2}</h3>
        //     <h3>{hometown}</h3>
        //     <h2>Upcoming Concerts</h2>
        //     <div>
        //         {bandConcerts}
        //     </div>
        // </div>
    )
}

export default BandPage;