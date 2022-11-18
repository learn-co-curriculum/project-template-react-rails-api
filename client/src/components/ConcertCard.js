import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

// export default ConcertCard

const ConcertCard = ({
  id,
  date,
  band,
  band_id,
  image,
  venue_name,
  venue_city,
  venue_id,
  tickets_remaining,
  ticket_link,
  user,
  comment,
  handleNewStub,
}) => {
  const history = useHistory();
  function handleAddToMyConcerts() {
    const newConcert = {
      band_id: band_id,
      venue_id: venue_id,
      user_id: user.id,
      date: new Date(date),
    };

    fetch("/concerts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newConcert),
    }).then((res) => res.json());
    history.push(`/profile`);
  }

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className="concert-card">
      <Card.Section>
        <Image src={image} height={160} alt={band} />
      </Card.Section>
      <Text size="lg" >
        {band}
      </Text>
      <Text size="sm" color="dimmed">
        {venue_name}, {venue_city}
      </Text>
      <Text size="sm" color="dimmed">
        {date}
      </Text>
      {user ? (
        <Button
          onClick={handleAddToMyConcerts}
          variant="light"
          color="red"
          fullWidth
          mt="md"
          radius="md"
        >Add to My Concerts</Button>
      ) : null}
    </Card>
  );
};

export default ConcertCard;
