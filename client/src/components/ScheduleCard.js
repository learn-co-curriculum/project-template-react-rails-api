import React from 'react'

function ScheduleCard({artist}) {
    console.log(artist)
  return (
    <div> 
        <h4>{artist.name}</h4>
        <p> {artist.performance_time} PM </p>
         </div>
  )
}

export default ScheduleCard