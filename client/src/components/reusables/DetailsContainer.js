import ReservationEventContainer from "./ReservationEventContainer";
import ReservationForm from "./ReservationForm";

function DetailsContainer() {
  return (
    <div>
      <h2>DetailsContainer</h2>
      <div>
        <ReservationForm />
        <ReservationEventContainer />
      </div>
    </div>
  );
}

export default DetailsContainer;
