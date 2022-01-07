
 // const [reviews, setReviews] = useState([]);

// useEffect(() => {
  //   fetch("api/reviews")
  //     .then((r) => r.json())
  //     .then(setReviews);
  // }, []);


  // function handleAddReviews(newReviews) {
  //   setReviews((reviews) => [...reviews, newReviews]);
  // }

  // function handleEditReview(updatedReview) {
  //   const updatedReviews = reviews.map((review) =>
  //     review.id === updatedReview.id ? updatedReview : review
  //   );
  //   setReviews(updatedReviews);
  // }


import React, {useState, useEffect} from "react";
import { Box, Button } from "../styles";
import styled from "styled-components";
import ReviewForm from "../pages/ReviewForm"

function Review({ bathroom }) {
  const { comment, rating} = review;

//   useEffect(() => {
//     fetch("api/reviews")
//       .then((r) => r.json())
//       .then(setReviews);
//   }, []);


  return (
      <Wrapper>
    <Locations>
        <Box>
             <h2>{comment}</h2>
            <h3>{rating}</h3>

            <ReviewForm />
          
        <p>
        {/* <Button onClick={() => handleDeleteLocation(bathroom.id)}>
              Delete Bathroom 
         </Button> */}
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

export default Review;