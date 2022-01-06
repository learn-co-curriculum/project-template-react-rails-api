import React, {useState} from "react";
import { Box, Button } from "../styles";
import styled from "styled-components";

function Location({ bathroom }) {
  const { city, address, name, details} = bathroom;
  const [bathrooms, setBathrooms]= useState([]);

  function handleDeleteLocation(id) {
    fetch(`api/locations/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setBathrooms((bathrooms) =>
          bathrooms.filter((bathroom) => bathroom.id !== id)
        );
      }
    });
  }

  return (
      <Wrapper>
    <Locations>
        <Box>
             <h2>{city}</h2>
            <h3>{name}</h3>
            <em>{address}</em>
            <em>{details}</em>
        <p>
        <Button onClick={() => handleDeleteLocation(bathroom.id)}>
              Delete Bathroom 
         </Button>
         </p>

         </Box>
    </Locations>
    </Wrapper>
  );
}


const Locations= styled.article`
  margin-bottom: 24px;
`;

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default Location;