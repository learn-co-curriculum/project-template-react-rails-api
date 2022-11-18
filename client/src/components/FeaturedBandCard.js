import React from "react";
import { Card, Flex, Image, Text, Badge, Button, Group } from "@mantine/core";

const FeaturedBandCard = ({ band, concerts }) => {
  return (
    <div>
      {concerts.length > 0 ? (
        <Flex gap="lg" justify="center" align="center" wrap="wrap" unstyled>
          <Card unstyled>
            <Card.Section>
              <Image src={band.image_url} alt={band.name} height={160} />
            </Card.Section>
            <Text size="lg">{band.name}</Text>
          </Card>
        </Flex>
      ) : null}
    </div>
  );
};

export default FeaturedBandCard;
