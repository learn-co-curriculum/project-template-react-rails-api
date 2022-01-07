import styled from "styled-components";
import Location from "../pages/Location";




function ReviewList({reviews}) {
  const reviewList = reviews.map((review) => (
    <Location key={review.id} review={review} />
  ));
  
 




  return (
    <Wrapper>
 
    <div>{reviewList}</div>
    

    </Wrapper> 
           
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default ReviewList;
