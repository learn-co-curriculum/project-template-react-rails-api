import React from 'react'
import ConcertCard from './ConcertCard'
import { Flex, Button } from '@mantine/core';
import Stubs from './Stubs';


const UpcomingConcerts = ({user}) => {
  // const myConcerts = user.concerts
  // function isUpcoming(date){
  //   return date >= Date.today
  // }
  // const myUpcomingConcerts = myConcerts.filter(isUpcoming)

  const myUpcomingConcertList = user.concerts?.map((concert) => {
    return (
      <Stubs
      key={concert.id}
      id={concert.id}
      date={concert.date}
      band={concert.band?.name}
      image={concert.band?.image}
      venue_name={concert.venue?.name}
      venue_city={concert.venue?.city}
      />
      )
  })

  return (
    <Flex>
      <h1>My concerts</h1>
      <ul>{myUpcomingConcertList}</ul>
    </Flex>
  )
}

export default UpcomingConcerts
