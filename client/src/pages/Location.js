import React, {useState, useEffect} from "react";
import { Box, Button } from "../styles";
import styled from "styled-components";
// import Review from "../pages/Review"

function Location({ bathroom}) {
  const [bathrooms, setBathrooms]= useState([]);
//   const [reviews, setReviews]= useState([]);

  function handleDeleteLocation(id) {
    fetch(`api/locations/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setBathrooms((bathrooms) =>
          bathrooms.filter((bathroom) => bathroom.id !== id)
        );
        window.location.reload(false)
      }
    });
  }



//   useEffect(() => {
//     fetch("api/reviews")
//       .then((r) => r.json())
//       .then(setReviews);
//   }, []);


  return (
      <Wrapper>
    <Locations>
        <Box>
             <h2>{bathroom.city}</h2>
            <h3>{bathroom.name}</h3>
            <em>{bathroom.address}</em>
            <p></p>
            <em>Details: {bathroom.details}</em>
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