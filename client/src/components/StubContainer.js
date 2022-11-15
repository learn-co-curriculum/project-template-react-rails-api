import React from 'react'
import Stubs from './Stubs'

const StubContainer = ({user}) => {
  const stubs = user.concerts
  function isStub(date){
    return Date.parse(date) < Date.now()
  }
  const stubsList = stubs.filter(isStub)

  const myStubsList = stubsList.map((concert) => {
    return (
      <Stubs
      key={concert.id}
      id={concert.id}
      date={concert.date}
      band={concert.band.name}
      image={concert.band.image}
      venue_name={concert.venue.name}
      venue_city={concert.venue.city}
      comment={concert.comment}
      />
    )
  })

  return (
    <div>{myStubsList}</div>
  )
}

export default StubContainer

