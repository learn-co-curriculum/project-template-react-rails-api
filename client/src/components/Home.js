import React from "react";
import { Link } from "react-router-dom";
import fest1 from "../assets/fest-3.jpeg";
import fest2 from "../assets/fest-1.jpeg";
import fest4 from '../assets/fest4.webp'


function Home() {
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div>
      <div id="header-box">
        <div id="dcl-intro">
          <h1 className="home-header">Denver City Limits</h1>
        </div>
        <div id="date-header">
          <h2>The Mile High Music Experience.</h2>
          <h4>March 25, 2023</h4>
        </div>
      </div>

      <div className="home-container">
        <div className="dcl-container">
          <div id="fest1-container">
            <img src={fest1} alt="festival" id="home-photos1" class="reveal"></img>
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
          <h1 id='time-and-location'>Friday, March 25, 2023 : Denver - Washington Park</h1>
        </div>
        <div className="dcl-container">
          <div className="dcl-desc">
            <p className="home-talk">
              DCL has, and always will put the music fan first. Our lineup is always hot on the pulse of todays music charts.
              With free water stations all over the park, to todays fines food trucks sprinkled throughout our festival, our passion is crating the best festival experience on earth!
            </p>
          </div>
          <div id="fest-2-container">
            <img src={fest2} alt="festival-2" id="home-photos2" class="reveal"></img>
          </div>
        </div>
        <div className="dcl-container">
          <div id="testimonials">
            <h1>
              <em>"Best weekend of my life"</em> - Snoop Dogg, DCL 2021
            </h1>
            <h1>
              <em>"Peak of my career was in the Rockies, specifically at Denver City Limits."</em> - Tame Impala, DCL 2020
            </h1>
          </div>
        </div>
        <div className="dcl-container">
          <div id="fest-3-container">
            <img src={fest4} alt="festival-3" id="home-photos3" class="reveal"></img>
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
            <Link id="ticket-home-link" to="/tickets">
              Tickets
            </Link>
          </h1>
        </div>
      </div>


    </div>
  );
}

export default Home;
