import { Route, Switch } from "react-router-dom";
import RecCenters from "./RecCenters";
import Resources from "./Resources";
import SpaceContainer from "../reusables/SpaceContainer";

function AdminContainer() {
  return (
    <div>
      <Switch>
        <Route path="/admin/rec_centers">
          <RecCenters />
        </Route>
        <Route path="/admin/resources">
          <Resources />
        </Route>
        <Route path="/admin">
          <SpaceContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default AdminContainer;
