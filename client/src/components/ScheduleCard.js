import React from "react";

function ScheduleCard({ artist }) {
  console.log(artist);
  return (
    <div className="stage-info">
      <h4 className="stage-artist">{artist.name}</h4>
      <p> {artist.performance_time} PM </p>
    </div>
  );
}

export default ScheduleCard;
