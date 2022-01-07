import styled from "styled-components";
import Location from "../pages/Location";




function LocationList({bathrooms, onDeleteBathrooms, onUpdateBathroom}) {
  
  const bathroomLocationList = bathrooms?.map((bathroom) => (
    <Location key={bathroom.id} bathroom={bathroom} onDeleteBathrooms={onDeleteBathrooms} onUpdateBathroom={onUpdateBathroom}/>
  ));
  
 




  return (
    <Wrapper>
 <div></div>
    <div>{bathroomLocationList}</div>

    

    </Wrapper> 
           
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default LocationList;
