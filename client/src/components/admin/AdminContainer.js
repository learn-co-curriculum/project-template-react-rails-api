import { Route, Switch } from "react-router-dom";
import RecCenters from "./RecCenters";
import Resources from "./Resources";
import SpaceContainer from "../reusables/SpaceContainer";
import LoginModal from "../everyone/LoginModal";

function AdminContainer({ recCenters, loginModalOpen, setLoginModalOpen }) {
  return (
    <div>
      <Switch>
        {loginModalOpen ? (
          <LoginModal setLoginModalOpen={setLoginModalOpen} />
        ) : null}
        <Route path="/admin/rec_centers">
          <RecCenters recCenters={recCenters} />
        </Route>
        <Route path="/admin/resources">
          <Resources />
        </Route>
        <Route path="/admin">
          <SpaceContainer recCenters={recCenters} />
        </Route>
      </Switch>
    </div>
  );
}

export default AdminContainer;
