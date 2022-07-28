import SpaceContainer from "../reusables/SpaceContainer";
import { Route, Switch } from "react-router-dom";
import Reservations from "./Reservations";

function PlayerContainer() {
  return (
    <div>
      <Switch>
        <Route path="/home/my_reservations">
          <Reservations />
        </Route>
        <Route path="/home">
          <SpaceContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default PlayerContainer;
