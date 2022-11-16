import React from 'react'

function Stubs ({id, date, band, venue_name, venue_city}) {
  console.log(band)

  return (
    <div className='card'>
      <h3>{band.name}</h3>
      <h3>{date}</h3>
      <h3>{venue_name}, {venue_city}</h3>
    </div>
  )
}

export default Stubs
