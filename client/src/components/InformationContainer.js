import { Route, Switch } from "react-router-dom";
import AdminContainer from "./admin/AdminContainer";
import PlayerContainer from "./player/PlayerContainer";
import EveryoneContainer from "./everyone/EveryoneContainer";


function InformationContainer({recCenters}) {



  return (
    <Switch>
      <Route path="/admin">
        <AdminContainer recCenters={recCenters}/>
      </Route>
      <Route path="/home">
        <PlayerContainer/>
      </Route>
      <Route path="/">
        <EveryoneContainer recCenters={recCenters}/>
      </Route>
    </Switch>
  );
}

export default InformationContainer;
