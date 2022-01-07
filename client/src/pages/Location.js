import React, { useState } from "react";
import { Box, Button } from "../styles";
import styled from "styled-components";

function Location({ bathroom, onDeleteBathrooms, onUpdateBathroom}) {
  const { city, address, name, details, likes } = bathroom;
  // const [updateBathroom, setUpdateBathroom] = useState([]),



  function handleDeleteClick(id) {
    fetch(`api/locations/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteBathrooms(id)
        window.location.reload(false)
      }
    })
  }

  // function handleUpdateClick(id) {
  
  //   fetch(`api/locations/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updateObj),
  //   })
  //     .then((r) => r.json())
  //     .then((updatedBathroom) => onUpdateBathroom(updatedBathroom));
  // }

  


  return (
    <Wrapper>
      <Locations>
        <Box>
          <h2>{city}</h2>
          <h3>{name}</h3>
          <em>{address}</em>
          <ul>
            <li> {details} </li>
          </ul>
          <p>{likes} Visits </p>

          <p>
            <Button onClick={() => handleDeleteClick(bathroom.id)}>
              Delete Bathroom
            </Button>
          </p>

          {/* <p>
            <Button onClick={() => handleUpdateClick(bathroom.likes)}>
              Visited Bathroom
            </Button>
          </p> */}



        </Box>
      </Locations>
    </Wrapper>
  );
}


const Locations = styled.article`
  margin-bottom: 24px;
`;

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default Location;