import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function LocationList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/locations")
      .then((r) => r.json())
      .then(setLocations);
  }, []);

  return (
    <Wrapper>
      {locations.length > 0 ? (
        locations.map((location) => (
          <Location key={location.id}>
            <Box>
              <h2>{location.city}</h2>
              <p>
                <em>{location.name}</em>
                <em>{location.address}</em>
                <em>{location.details}</em>
                &nbsp;·&nbsp;
                <cite>Submitted By {location.user.username}</cite>
              </p>
            </Box>
          </Location>
        ))
      ) : (
        <>
          <h2>No Bathrooms Found</h2>
          <Button as={Link} to="/new">
            Add a New Bathroom
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Location= styled.article`
  margin-bottom: 24px;
`;

export default LocationList;
