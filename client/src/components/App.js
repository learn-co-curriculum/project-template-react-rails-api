import logo from '../assets/logo.svg';
import '../assets/App.css';
import Header from './Header';
import Home from './Home';
import ItemDetailHandCare from './ItemDetailHandCare';
import ItemDetailPressOn from './ItemDetailPressOn';
import ItemDetailGlue from './ItemDetailGlue';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import User from './User';
import PurchaseDetail from './PurchaseDetail'
import SignUp from './SignUp'
import Login from './Login';

import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

import React, { useState, useEffect } from "react";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/shoppingcart">
            <ShoppingCart />
          </Route>

          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/user">
            <User />
          </Route>

          <Route path="/itemdetailpresson">
            <ItemDetailPressOn />
          </Route>

          <Route path="/itemdetailhandcare">
            <ItemDetailHandCare />
          </Route>

          <Route path="/itemdetailglue">
            <ItemDetailGlue />
          </Route>

          <Route path="/purchasedetail">
            <PurchaseDetail />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
