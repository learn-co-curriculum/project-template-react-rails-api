import React from 'react'
import ConcertContainer from './ConcertContainer'

const Concerts = ({concerts, setConcerts, venues, setVenues}) => {
  return (
    <ConcertContainer concerts={concerts} setConcerts={setConcerts} venues={venues} setVenues={setVenues} />
  )
}

export default Concerts
