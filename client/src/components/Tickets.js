import React from "react";
import { useState } from "react";

function Tickets() {
  const [ticketPriceGA, setTicketPriceGA] = useState("$0.00");
  const [ticketPriceVIP, setTicketPriceVIP] = useState("$0.00");

  let handleChangeGA = (e) => {
    setTicketPriceGA(`$${e.target.value * 250}.00`);
  };

  let handleChangeVIP = (e) => {
    setTicketPriceVIP(`$${e.target.value * 500}.00`);
  };

  return (
    <div id="container">
      <div id="title-container">
        <div id="titles">Tickets</div>
      </div>

      <div id="card">
        <div id="type-container">
          <button id="type">GA</button>
        </div>
        <h1 class="ticket-title">General Admission</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque?
        </p>
        <input
          type="number"
          id="quantity"
          name="quantity"
          placeholder="How Many?"
          onChange={handleChangeGA}
          min="0"
        ></input>
        <p>{ticketPriceGA}</p>
        <button id="cart-button">Add to Cart</button>
      </div>

      <div id="card">
        <div id="type-container">
          <button id="type">VIP</button>
        </div>
        <h1 class="ticket-title">VIP</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque?
        </p>
        <input
          type="number"
          id="quantity"
          name="quantity"
          placeholder="How Many?"
          onChange={handleChangeVIP}
          min="0"
        ></input>
        <p>Total: {ticketPriceVIP}</p>
        <button id="cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default Tickets;
