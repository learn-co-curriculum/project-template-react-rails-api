import { Route, Switch } from "react-router-dom";
import AdminContainer from "./admin/AdminContainer";
import PlayerContainer from "./player/PlayerContainer";
import EveryoneContainer from "./everyone/EveryoneContainer";

function InformationContainer() {
  return (
    <Switch>
      <Route path="/admin">
        <AdminContainer />
      </Route>
      <Route path="/home">
        <PlayerContainer />
      </Route>
      <Route path="/">
        <EveryoneContainer />
      </Route>
    </Switch>
  );
}

export default InformationContainer;
