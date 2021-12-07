import React from "react";
import MinionCard from "./MinionCard";

function Minions({ minions }) {
  const renderMinions = minion.map((minion) => (
    <MinionCard key={minion.id} minion={minion} />
  ));

  return <div class="Card">{renderMinions}</div>;
}

export default Minions;
