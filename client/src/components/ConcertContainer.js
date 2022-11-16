import React, { useEffect, useState } from 'react'
import ConcertCard from './ConcertCard'
import { Flex, Button } from '@mantine/core';


const ConcertContainer = ( {user, bands, concerts, setConcerts, displayedVenues, setVenues} ) => {
  
  const filteredBands = bands.filter((band) => {
    return user.genre_1 === band.genre || 
    user.genre_2 === band.genre || 
    user.genre_3 === band.genre ||
    user.genre_1 === band.secondary_genre ||
    user.genre_2 === band.secondary_genre ||
    user.genre_3 === band.secondary_genre
  })

  console.log(filteredBands)
  
const displayed = filteredBands.map((band) => {
  return concerts.map((concert) => {
    return (
      <ConcertCard 
        key={concert.id}
        id={concert.id}
        date={concert.date}
        band={band.name}
        image={band.image_url}
        venue_name={concert.venue.name}
        venue_city={concert.venue.city}
        tickets_remaining={concert.tickets_remaining}
        ticket_link={concert.ticket_link}
        comment={concert.comment}
      />
    )
  })
})

// const shows = concerts.map((concert) => {
//   return (
//     <ConcertCard 
//       key={concert.id}
//       id={concert.id}
//       date={concert.date}
//       band={concert.band.name}
//       image={concert.image_url}
//       venue_name={concert.venue.name}
//       venue_city={concert.venue.city}
//       tickets_remaining={concert.tickets_remaining}
//       ticket_link={concert.ticket_link}
//       comment={concert.comment}
//     />
//   )
// })

  return (
    <Flex>
    <div>
      {displayed}
    </div>
    </Flex>
  )
}

export default ConcertContainer
