import { Route, Switch, useParams } from "react-router-dom";
import RecCenters from "./RecCenters";
import Resources from "./Resources";
import SpaceContainer from "../reusables/SpaceContainer";

function AdminContainer({recCenters}) {
  return (
    <div>
      <Switch>
        <Route exact path="/admin/rec_centers">
          <RecCenters recCenters={recCenters}/>
        </Route>
        <Route path="/admin/rec_centers/:rec_center_id/resources">
          <Resources />
        </Route>
        <Route path="/admin">
          <SpaceContainer recCenters={recCenters}/>
        </Route>
      </Switch>
    </div>
  );
}

export default AdminContainer;

