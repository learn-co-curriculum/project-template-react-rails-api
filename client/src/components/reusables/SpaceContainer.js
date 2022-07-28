import Calendar from "../reusables/Calendar";
import DateCarousel from "../reusables/DateCarousel";
import DetailsContainer from "../reusables/DetailsContainer";
import RecCenterCarousel from "../reusables/RecCenterCard";

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
