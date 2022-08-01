import Calendar from "./Calendar";
import DateCarousel from "./DateCarousel";
import DetailsContainer from "./DetailsContainer";
import RecCenterCarousel from "./RecCenterCarousel";

function SpaceContainer({recCenters}) {
  return (
    <div>
      <RecCenterCarousel recCenters = {recCenters}/>
      <DateCarousel />
      <Calendar />
      <DetailsContainer />
    </div>
  );
}

export default SpaceContainer;
