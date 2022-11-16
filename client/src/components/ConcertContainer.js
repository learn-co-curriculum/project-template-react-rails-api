import React, { useEffect, useState } from 'react'
import ConcertCard from './ConcertCard'

const ConcertContainer = ( {concerts, setConcerts, displayedVenues, setVenues} ) => {

  const displayedConcerts = concerts.map((concert) => {
    return (
      <ConcertCard
        key={concert.id}
        id={concert.id}
        date={concert.date}
        band={concert.band.name}
        image={concert.band.image_url}
        venue_name={concert.venue.name}
        venue_city={concert.venue.city}
        tickets_remaining={concert.tickets_remaining}
        ticket_link={concert.link}
        comment={concert.comment}
      />
    )
  })

  return (
    <div>
      {displayedConcerts}
    </div>
  )
}

export default ConcertContainer
