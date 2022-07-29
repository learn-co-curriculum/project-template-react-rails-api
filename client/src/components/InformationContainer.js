import { Route, Switch } from "react-router-dom";
import AdminContainer from "./admin/AdminContainer";
import PlayerContainer from "./player/PlayerContainer";
import EveryoneContainer from "./everyone/EveryoneContainer";
import { useState, useEffect} from "react"

function InformationContainer() {
  const [recCenters, setRecCenters] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/rec_centers`)
        .then(res => res.json())
        .then((data) => setRecCenters(data))
      }, [])

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
