import { useEffect, useState } from "react";
import { Link , Route, Routes} from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import NewBathroom from "../pages/NewBathroom";
import ReviewForm from "../pages/ReviewForm";


function LocationList() {
  const [locations, setLocations] = useState([]);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch("/api/locations")
      .then((r) => r.json())
      .then(setLocations);
  }, []);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  function handleAddBathroom(newLocation) {
    setLocations((locations) => [...locations, newLocation]);
  }

  function handleAddReviews(newReviews) {
    setReviews((reviews) => [...reviews, newReviews]);
  }

   function handleDeleteLocation(id) {
    fetch(`/api/locations/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setLocations((locations) =>
          locations.filter((location) => location.id !== id)
        );
      }
    });
  }

  function handleEditReview(updatedReview) {
    const updatedReviews = reviews.map((review) =>
      review.id === updatedReview.id ? updatedReview : review
    );
    setReviews(updatedReviews);
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

    

              <ul>
                  {location.reviews.map((review) => (
                  <li key={review.id}>
                    {review.comments} &nbsp;·&nbsp; Rating: {review.rating}/10
                </li>
                  ))}
              </ul>
            <p>
              <ReviewForm
              // review={selectedPizza}
              // onChangeForm={handleChangeForm}
              onAddReviews={handleAddReviews}
              onEditReviews={handleEditReview}
            />
            </p>

            <Button onClick={() => handleDeleteLocation(location.id)}>
              Delete Bathroom 
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
