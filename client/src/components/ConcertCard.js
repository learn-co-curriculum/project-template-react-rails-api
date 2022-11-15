import React from 'react'

const ConcertCard = ( {key, id, date, band, image, venue_name, venue_city, tickets_remaining, ticket_link, comment} ) => {
  
  return (
    <div>
      <img src={image} alt={band}></img>
      <h3>{band}</h3>
      <h3>{date}</h3>
      <h4>{venue_name}</h4>
      <h4>{venue_city}</h4>
      <h5>{tickets_remaining < 100 ? "Low ticket warning!" : null}</h5>
      <h5>{tickets_remaining = 0 ? "SOLD OUT" : <button><a href={ticket_link} alt="Tickets">Buy tickets</a></button>}</h5>
    </div>
  )
}

export default ConcertCard