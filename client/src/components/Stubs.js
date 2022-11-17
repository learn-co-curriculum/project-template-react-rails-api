import React from 'react'
import { Flex } from '@mantine/core'

function Stubs ({id, date, band, venue_name, venue_city}) {
  console.log(band)

  return (
    <div className='ticket-stubs'>
      <div class="ticket ticket-1">
        <div class="date">
          <span class="day">8pm</span>
          <span class="month-and-time">{date}<span class="small"></span></span>
        </div>
        <div class="artist">
          <span class="name">{band.name}</span>
          <br></br>
          <span className="live small">LIVE</span>
        </div>
        <div class="location">
          <span>{venue_name}</span>
          <br></br>
          <span class="small">{venue_city}</span>
        </div>
        <div class="rip">
        </div>
        <div class="cta">
          <button class="buy" href="#">PARTY ON</button>
        </div>
      </div>

    </div>
  )
}

export default Stubs
