
import React, {useState, useEffect} from "react";

import { Box, Button } from "../styles";
import styled from "styled-components";
import Review from "../pages/Review";
import ReviewForm from "../pages/ReviewForm";


function Location({ bathroom, reviews, onDeleteBathroom}) {
  const { city, address, name, details, likes } = bathroom;
  const [addReviews, setAddReviews] = useState([]);
  
 




  function handleDeleteClick(id) {

    fetch(`api/locations/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteBathroom(id)
        // window.location.reload(false)
      }
    })
  }



  function handleAddReviews(newReviews) {
    setAddReviews((reviews) => [...reviews, newReviews]);
  }





  return (
    <Wrapper>
      <Locations>
        <Box>

             <h2>{city}</h2>
            <h3>{name}</h3>
            <em>{address}</em>
            <ul>
            <em> {details} </em>
            </ul>
            {/* <button>{likes} Likes </button> */}

 

        <h4>Reviews: </h4>
        <em className="reviews">
        {bathroom.reviews.map((review) => (
        <Review key={review.id} review={review} />
        ))}
       </em>
       <ReviewForm onAddReviews={handleAddReviews}/> 
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