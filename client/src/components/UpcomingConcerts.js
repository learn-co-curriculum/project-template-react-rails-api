import React from 'react'
import ConcertCard from './ConcertCard'

const UpcomingConcerts = ({user}) => {
  const myConcerts = user.concerts
  function isUpcoming(date){
    return date >= Date.today
  }
  const myUpcomingConcerts = myConcerts.filter(isUpcoming)
  
  const myUpcomingConcertList = myUpcomingConcerts.map((concert) => {
    return (
      <ConcertCard
      key={concert.id}
      id={concert.id}
      date={concert.date}
      band={concert.band.name}
      image={concert.band.image}
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
      <h1>My upcoming concerts</h1>
      <ul>{myUpcomingConcertList}</ul>
    </div>
  )
}

export default UpcomingConcerts
