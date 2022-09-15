import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Tickets({ loggedIn }) {
  const [tier, setTier] = useState(true);
  const [ticketPriceGA, setTicketPriceGA] = useState("$0.00");
  const [ticketPriceVIP, setTicketPriceVIP] = useState("$0.00");

  let handleChangeGA = (e) => {
    setTicketPriceGA(`$${e.target.value * 250}.00`);
  };

  let handleChangeVIP = (e) => {
    setTicketPriceVIP(`$${e.target.value * 500}.00`);
  };

  let toggleTier = () => {
    setTier(!tier);
  };

  function handleTickets() {
    let ticketType = document.getElementById("tix-type").textContent
    let Tix = document.getElementById("quantity").value
    console.log(loggedIn)
    loggedIn ?
      (alert(`Congrats, we will see you at Denver City Limits! You have purchased ${Tix} ${ticketType} tickets!`))
      :
      (alert("you are not logged in"))
  }

  return (
    <div id="ticket-box">
      <div className="title-container">
        <div id="titles">Tickets</div>
      </div>

      {tier ? (
        <div id="card">
          <div id="type-container"></div>
          <h1 class="ticket-title" id="tix-type">General Admission</h1>
          <h1 class="ticket-price">$250.00</h1>
          <div id="type-container"></div>
          <button id="type" onClick={toggleTier}>
            Change Tier
          </button>
          <p className="description">The 1-Day GA Ticket allows you admittance to Wash Park for Saturday, March 25th,2023 </p>
          <p className="description">
            Live music on 4 stages in Denver's Wash Park.
            Food choices from over 20 local chefs and restaurants including vegan, vegetarian and gluten-free options
            Bars, official band merch, festival merch, free water stations and specialty items from art vendors throughout the park
          </p>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="How Many?"
            onChange={handleChangeGA}
            min="0"
          ></input>
          <p className="total">Total: {ticketPriceGA}</p>
          <button id="cart-button" onClick={handleTickets}>Buy Tickets!</button>
        </div>
      ) : (
        <div id="card">
          <div id="type-container"></div>
          <h1 class="ticket-title" id="tix-type">VIP</h1>
          <h1 class="ticket-price">$500.00</h1>
          <div id="type-container"></div>
          <button id="type" onClick={toggleTier}>
            Change Tier
          </button>
          <p className="description">
            The 1-Day VIP Ticket allows you admittance to Wash Park for Saturday, March 25th,2023
            Unlimited access to all our VIP lounges — VIP West Front Range near the Bronco Stage and VIP North Platte River near the Avalanche Stage. -VIP East Coors Field with sight lines to both Rockies and Nuggets stages</p>
          <p className='description'>Access to four viewing decks with exceptional sight lines of the two main stages
            Access to a dedicated entrance lane at all three Festival gates
            Complimentary all-day beer, wine and cocktails in both VIP Front Range and North Platte locations
            Complimentary all-day dining with Festival favorites like eggs benedict and street tacos.
            Jumbo screen with live streaming of the Festival.
            Preferred pricing for locker rentals with mobile charging units
            Access to all areas available to General Admission
          </p>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="How Many?"
            onChange={handleChangeVIP}
            min="0"
          ></input>
          <p className="total">Total: {ticketPriceVIP}</p>
          <button id="cart-button" onClick={handleTickets}>Buy Tickets!</button>
        </div>
      )}
    </div>
  );
}

export default Tickets;
