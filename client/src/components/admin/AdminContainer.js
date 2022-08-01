import { Route, Switch, useHistory } from "react-router-dom";
import RecCenters from "./RecCenters";
import Resources from "./Resources";
import SpaceContainer from "../reusables/SpaceContainer";
import LoginModal from "../everyone/LoginModal";

function AdminContainer({
  recCenters,
  loginModalOpen,
  setLoginModalOpen,
  user,
}) {
  const history = useHistory();

  if (user.user_type) {
    if (user.user_type.user_type !== "admin") {
      history.push("/");
    }
  } else {
    history.push("/");
  }

  return (
    <div>
      <Switch>
        {loginModalOpen ? (
          <LoginModal setLoginModalOpen={setLoginModalOpen} />
        ) : null}
        <Route exact path="/admin/rec_centers">
          <RecCenters recCenters={recCenters} />
        </Route>
        <Route path="/admin/rec_centers/:rec_center_id/resources">
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
