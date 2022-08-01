import { Route, Switch, useHistory } from "react-router-dom";
import AdminContainer from "./admin/AdminContainer";
import PlayerContainer from "./player/PlayerContainer";
import EveryoneContainer from "./everyone/EveryoneContainer";
import LoginModal from "./everyone/LoginModal";
import { useState, useEffect } from "react";

function InformationContainer({
  loginModalOpen,
  setLoginModalOpen,
  user,
  setUser,
}) {
  const [recCenters, setRecCenters] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3000/rec_centers`)
      .then((res) => res.json())
      .then((data) => setRecCenters(data));
  }, []);

  useEffect(() => {
    if (user.user_type) {
      switch (user.user_type.user_type) {
        case "admin":
          history.push("/admin");
          break;
        case "player":
          history.push("/home");
          break;
        default:
          history.push("/");
      }
    } else {
      history.push("/");
    }
  }, [user]);

  return (
    <Switch>
      <Route path="/admin">
        <AdminContainer
          recCenters={recCenters}
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          user={user}
        />
      </Route>
      <Route path="/home">
        <PlayerContainer user={user} />
      </Route>
      {/* <Route path="/login">{onLoginPath}</Route> */}
      <Route path="/">
        <EveryoneContainer
          recCenters={recCenters}
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          setUser={setUser}
        />
      </Route>
    </Switch>
  );
}

export default InformationContainer;
