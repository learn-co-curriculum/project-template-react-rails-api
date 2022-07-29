import Calendar from "../reusables/Calendar";
import DateCarousel from "../reusables/DateCarousel";
import RecCenterCarousel from "../reusables/RecCenterCarousel";
import LoginModal from "./LoginModal";

function EveryoneContainer({recCenters}) {
  return (
    <div>
      <RecCenterCarousel recCenters={recCenters}/>
      <DateCarousel />
      <Calendar />
      <LoginModal />
      <h3> Reserve </h3>
    </div>
  );
}

export default EveryoneContainer;
