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
          <img src={fest1} alt="festival" id="home-photos1"></img>
        </div>

        <div className="dcl-desc">
          <p className="home-talk">
            Dissatisfied by modern music festivals? The festival trio BKN decided to take matters into their own hands. After doing
            “extensive” research, traveling across the world to the hottest and
            trendiest festivals, your festive hosts have compiled a
            once-in-a-lifetime musical experience. Right here, in Denver, Colorado!
          </p>
        </div>
      </div>
      <div className="dcl-container">
        <h1>Friday, March 25, 2023</h1>
        <h1>-</h1>
        <h1>Denver-Washington Park</h1>
      </div>
      <div className="dcl-container">
        <div className="dcl-desc">
          <p className="home-talk">
            DCL has, and always will put the music fan first. Our lineup is always hot on the pulse of todays music charts.
            With free water stations all over the park, to todays fines food trucks sprinkled throughout our festival, our passion is crating the best festival experience on earth!
          </p>
        </div>
        <div id="fest-2-container">
          <img src={fest2} alt="festival-2" id="home-photos2"></img>
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
          <img src={fest3} alt="festival-3" id="home-photos3"></img>
        </div>
        <div className="dcl-desc">
          <p className="home-talk">
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
