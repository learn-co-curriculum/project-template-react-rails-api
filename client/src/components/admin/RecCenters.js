import RecCenterCard from "../reusables/RecCenterCard";

function RecCenters({recCenters}) {
  const recCenterCollection = recCenters.map((recCenter)=>(
    <RecCenterCard 
    key={recCenter.id} 
    recCenter={recCenter}
    />
))
  return (
    <div>
      {recCenterCollection}
    </div>
  );
}

export default RecCenters;
