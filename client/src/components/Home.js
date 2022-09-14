import React from "react";
import { Link } from "react-router-dom";
import fest1 from "../assets/fest-3.jpeg";
import fest2 from "../assets/fest-1.jpeg";
import fest3 from "../assets/fest-2.jpeg";

function Home() {
  return (
    <div className="home-container">
      <div id="dcl-intro">
        <h1 className="home-header">Denver City Limits</h1>
      </div>
      <div id="date-header">
        <h4>March 25, 2023</h4>
      </div>
      <div className="dcl-container">
        <div id="fest1-container">
          <img src={fest1} alt="festival"></img>
        </div>

        <div id="dcl-desc">
          <p>
            Dissatisfied by modern music festivals, festival junkies Thing1 and
            Thing2 decided to take matters into their own hands. After doing
            “extensive” research, traveling across the world to the hottest and
            trendiest festivals, your festive hosts have compiled a
            once-in-a-lifetime musical experience.
          </p>
        </div>
      </div>
      <div className="dcl-container">
        <h1>Friday, March 25, 2023</h1>
        <h1>-</h1>
        <h1>Denver-Washington Park</h1>
      </div>
      <div className="dcl-container">
        <div id="dcl-desc-2">
          <p>
            DCL puts the music fan first. Our lineup is always source-crowded.
            Bands never turn down this event.
          </p>
        </div>
        <div id="fest-2-container">
          <img src={fest2} alt="festival-2"></img>
        </div>
      </div>
      <div className="dcl-container">
        <h1>
          This is where we can fetch, then iterate over some "featured"
          artists to display their names. Shows that our display can be
          dynamic with the data.
        </h1>
      </div>
      <div className="dcl-container">
        <div id="fest-3-container">
          <img src={fest3} alt="festival-3"></img>
        </div>
        <div id="dcl-desc-3">
          <p>
            DCL provides you with the most diverse group of musical artists.
            From EDM, to rock, to jazz, and even the advant-garde "not music",
            you can be assured your niche musical addiction gets fufilled.
          </p>
        </div>
      </div>
      <div id="tickets-container">
        <h1>
          <Link className="route-link" to="/tickets">
            Tickets
          </Link>
        </h1>
      </div>

    </div>
  );
}

export default Home;
