import React, { useState } from "react";
import { Box, Button } from "../styles";
import styled from "styled-components";

function Location({ bathroom, setBathrooms, onDeleteBathrooms }) {
  const { city, address, name, details, likes } = bathroom;
  // const [bathrooms, setBathrooms] = useState([]);
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



  // fetch(`api/locations/${id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(updateObj),
  // })
  //   .then((r) => {
  //     if (r.ok) {
  //       setUpdateBathroom((updateBathroom) =>
  //         bathrooms.map((bathroom) =>
  //           bathroom.id === updateBathroom.id ? updateBathroom : bathroom
  //         ));
  //       setBathrooms(updateBathroom);
  //     }
  //   });
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