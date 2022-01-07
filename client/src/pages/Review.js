
import React from "react";
import styled from "styled-components";


function Review({review}) {
 
  return (
      <Wrapper>
            <em>{review.comments}</em>
            &nbsp;·&nbsp;
            <em>{review.rating}/10</em>          
         
        </Wrapper>
  );
}


const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default Review;
 