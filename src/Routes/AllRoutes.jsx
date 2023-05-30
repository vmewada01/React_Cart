import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Mens from "../Pages/Mens";
import Womens from "../Pages/Womens";
import React from "react";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute from "../Pages/PrivateRoute";
import Footer from "../components/Footer";
import Cart from "../Pages/Cart";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Products"
          element={
            <PrivateRoute>

            <Products />
             </PrivateRoute>
          }
        />
        <Route
          path="/Mens"
          element={
            <PrivateRoute>
            <Mens />
            </PrivateRoute>
          }
        />
        <Route
          path="/Womens"
          element={
            <PrivateRoute>
            <Womens />
            </PrivateRoute>
          }
        />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
