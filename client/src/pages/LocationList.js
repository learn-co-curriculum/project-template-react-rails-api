import { useEffect, useState } from "react";
import { Link , Route, Routes} from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import NewBathroom from "../pages/NewBathroom";


function LocationList() {
  const [locations, setLocations] = useState([]);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch("/locations")
      .then((r) => r.json())
      .then(setLocations);
  }, []);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  function handleAddBathroom(newLocation) {
    setLocations((locations) => [...locations, newLocation]);
  }

   function handleDeleteLocation(id) {
    fetch(`/locations/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setLocations((locations) =>
          locations.filter((location) => location.id !== id)
        );
      }
    });
  }

  return (
    <Wrapper>
      {locations.length > 0 ? (
        locations.map((location) => (
          <Location key={location.id}>
            <Box>
              <h2>{location.city}</h2>
              <h3>{location.name}</h3>
              <em>{location.address}</em>
              <em>{location.details}</em>
            
              {/* <p> <cite>Submitted By: </cite> </p> */}
              <h4>Reviews:</h4>
              <p>
                {/* {reviews.map(review => {
                return (
                <Location key={review.id}> 
                {review.comments} 
                &nbsp;·&nbsp;
                Rating: {review.rating} 
                &nbsp;·&nbsp;
                Submitted By: {review.user.username}
                </Location>);
        })} */}
              </p>

              <Button onClick={() => handleDeleteLocation(location.id)}>
              Delete
            </Button>

            </Box>
          </Location>
        ))
      ) : (
        <>
          <h2>No Bathrooms Found</h2>
       
          <NewBathroom onAddBathroom={handleAddBathroom}/>
          
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
