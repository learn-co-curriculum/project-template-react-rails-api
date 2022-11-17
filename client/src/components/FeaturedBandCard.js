import React from "react";
import { Card, Flex, Image, Text, Badge, Button, Group } from '@mantine/core';



const FeaturedBandCard = ({ band, concerts }) => {
  return (
      <div >
        {concerts.length > 0 ? (
         <Flex
         gap="xl"
         direction="row"
         wrap="wrap"
         >
          <Card >
            <Card.Section><Image src={band.image_url} alt={band.name}  height={160} width={160}/></Card.Section>
            {/* <Group><div>{band.name}</div></Group> */}
          </Card>
          </Flex>
        ) : null}
      </div>
  );
};

export default FeaturedBandCard;
