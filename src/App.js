import React from "react";
import './App.css';

// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Product-list";
import Product from "./pages/Product";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminIndex from "./admin/AdminIndex";
import AdminEmails from "./admin/AdminEmails";
import AdminProducts from "./admin/AdminProducts";
import AdminSettings from "./admin/AdminSettings";
import AdminUsers from "./admin/AdminUsers";

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Switch>
      

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/products">
          <Products />
        </Route>

        <Route
          path="/products/:id"
          children={<Product></Product>}
        ></Route>

       <Route exact path="/admin">
          <AdminIndex/>
        </Route>

       <Route path="/emails">
          <AdminEmails/>
        </Route>
       <Route path="/productsadmin">
          <AdminProducts/>
        </Route>
       <Route path="/settings">
          <AdminSettings/>
        </Route>

       <Route path="/users">
          <AdminUsers/>
        </Route>

        <Route path="*">
          <Error />
        </Route>
        
      </Switch>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
