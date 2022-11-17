import React from "react";
import ConcertContainer from "./ConcertContainer";

const Concerts = ({
  bands,
  user,
  concerts,
  setConcerts,
  venues,
  setVenues,
  handleNewStub
}) => {
  return (
    <ConcertContainer
      user={user}
      bands={bands}
      concerts={concerts}
      setConcerts={setConcerts}
      venues={venues}
      setVenues={setVenues}
      handleNewStub={handleNewStub}
    />
  );
};

export default Concerts;
