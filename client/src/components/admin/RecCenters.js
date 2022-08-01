import { SimpleGrid } from "@chakra-ui/react";
import RecCenterCard from "../reusables/RecCenterCard";

function RecCenters({recCenters}) {
  const recCenterCollection = recCenters.map((recCenter)=>(
    <RecCenterCard 
    key={recCenter.id} 
    recCenter={recCenter}
    />
))
  return (
    <SimpleGrid minChildWidth='340px' spacing='40px'>
      {recCenterCollection}
    </SimpleGrid>
  );
}

export default RecCenters;
