import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

// origal code
// const ConcertCard = ( {key, id, date, band, image, venue_name, venue_city, tickets_remaining, ticket_link, comment} ) => {

//   return (
//     <div>
//       <img src={image} alt={band}></img>
//       <h3>{band}</h3>
//       <h3>{date}</h3>
//       <h4>{venue_name}</h4>
//       <h4>{venue_city}</h4>
//       <h5>{tickets_remaining < 100 ? "Low ticket warning!" : null}</h5>
//       <h5>{tickets_remaining = 0 ? "SOLD OUT" : <Button variant="outline" color="indigo"><a href={ticket_link} alt="Tickets">Buy tickets</a></Button>}</h5>
//     </div>
//   )
// }

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
  function handleAddToMyConcerts() {
    const newConcert = {
      band_id: band_id,
      venue_id: venue_id,
      user_id: user.id,
      date: new Date (date),
    };

    fetch("/concerts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newConcert),
    })
      .then((res) => res.json())
      .then(handleNewStub);
  }

  return (
    // <div>
    //   <img src={image} alt={band}></img>
    //   <h3>{band}</h3>
    //   <h3>{date}</h3>
    //   <h4>{venue_name}</h4>
    //   <h4>{venue_city}</h4>
    //   <h5>{tickets_remaining < 100 ? "Low ticket warning!" : null}</h5>
    //   <h5>{tickets_remaining = 0 ? "SOLD OUT" : <Button variant="outline" color="indigo"><a href={ticket_link} alt="Tickets">Buy tickets</a></Button>}</h5>
    // </div>


<Card shadow="sm" p="lg" radius="md" withBorder className='band-card'>
<Card.Section>
  <Image
    src={image}
    height={160}
    alt={band}
  />
</Card.Section>

{/* <Group position="apart" mt="md" mb="xs">
  <Text weight={500}>{band}</Text>
  <Badge color="red" variant="light">
  {tickets_remaining < 100 ? "Low ticket warning!" : null}
  </Badge>
</Group> */}
 

      <Text size="sm" color="dimmed">
        {date}
      </Text>
      <Text size="sm" color="dimmed">
        {venue_name}, {venue_city}
      </Text>

      <Button variant="light" color="red" fullWidth mt="md" radius="md">
        {
          (tickets_remaining = 0 ? (
            "SOLD OUT"
          ) : (
            <a href={ticket_link} alt="Tickets">
              Buy tickets
            </a>
          ))
        }
      </Button>

      {user ? (
        <Button
          onClick={handleAddToMyConcerts}
          variant="light"
          color="red"
          fullWidth
          mt="md"
          radius="md"
        >
          Add to My Concerts
        </Button>
      ) : null}
    </Card>
  );
};

export default ConcertCard;
