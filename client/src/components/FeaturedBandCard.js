import React from "react";
import { Flex } from '@mantine/core'


const FeaturedBandCard = ({ band, concerts }) => {
  return (
    <Flex
    wrap="wrap"
    >
      <div className="featured-band-image">
        {concerts.length > 0 ? (
          <div>
            <div>{band.name}</div>
            <img src={band.image_url} alt={band.name} />
          </div>
        ) : null}
      </div>
    </Flex>
  );
};

export default FeaturedBandCard;
