import React from "react";

const Steaks = ({ steaks }) => {
  const renderSteaks = steaks.map((steak) => (
    <p key={steak.id}>{steak.name}</p>
  ));
  return <div>{renderSteaks}</div>;
};

export default Steaks;
