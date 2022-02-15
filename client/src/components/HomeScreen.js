import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import TabPanel from './TabPanel'


function HomeScreen() {
  return (
    <div>
      <TabPanel />
    </div>
  )
}

export default HomeScreen