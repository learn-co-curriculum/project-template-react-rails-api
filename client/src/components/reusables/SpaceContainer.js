import Calendar from "./Calendar";
import DateCarousel from "./DateCarousel";
import DetailsContainer from "./DetailsContainer";
import RecCenterCarousel from "./RecCenterCard";

function SpaceContainer() {
  return (
    <div>
      <RecCenterCarousel />
      <DateCarousel />
      <Calendar />
      <DetailsContainer />
    </div>
  );
}

export default SpaceContainer;
