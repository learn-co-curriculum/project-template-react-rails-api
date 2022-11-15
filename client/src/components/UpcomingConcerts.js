import React from 'react'
import ConcertCard from './ConcertCard'

const UpcomingConcerts = ({user}) => {
  const myConcerts = user.concerts.map((concert) => {
    return (
      <ConcertCard
      key={concert.id}
      />
      )
  })

  return (
    <div>
      <h1>My upcoming concerts</h1>
      <ul>{myConcerts}</ul>
    </div>
  )
}

export default UpcomingConcerts
