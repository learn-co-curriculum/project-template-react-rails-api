import React  from "react";
import { Route, Switch  } from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import AddProject from "./components/AddProject";

function App() {
  return (
    <Switch>
    <Route exact  path="/">
     <Dashboard></Dashboard>
    </Route>
    <Route path ="/project/new">
    <AddProject></AddProject>
    </Route>
    </Switch>
    
  );
}

export default App;
