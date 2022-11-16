import React from 'react'

const Stubs = ({key, id, date, band, image, venue_name, venue_city, comment}) => {
  return (
    <div>
      <img src={image} alt={band}></img>
      <h3>{band}</h3>
      <h3>{date}</h3>
      <h4>{venue_name}</h4>
      <h4>{venue_city}</h4>
      <h5>{comment}</h5>
    </div>
  )
}

export default Stubs
