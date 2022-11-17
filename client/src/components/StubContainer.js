import React from "react";
import Stubs from "./Stubs";
import { Flex, Button } from "@mantine/core";

const StubContainer = ({ user }) => {
  const stubs = user.concerts?.map((concert) => {
    return (
      <Stubs
        key={concert.id}
        band={concert.band}
        venue_name={concert.venue.name}
        venue_city={concert.venue.city}
        date={concert.date}
        />)
  })

  return (
    <div>
      <h2 className='underline-style'>Ticket Stubs</h2>
      <Flex classname="flex-parent">{stubs}</Flex>
    </div>
  )

  }



export default StubContainer;
