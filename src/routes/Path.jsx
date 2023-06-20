import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Navbar from "../components/Navbar/Navbar";

import RouteGuard from "./RouteGuard";
import Home from "./Home";
import Auth from "./Auth";


const Path = () => {
  return (
    <>
      <Routes>

        <Route
          path="*"
          element={
            <RouteGuard>
              <Home />
            </RouteGuard>
          }
        />
        <Route
          path="/login"
          element={
            <Auth>
              <Login />
            </Auth>
          }
        />
        <Route
          path="/register"
          element={
            <Auth>
              <Register />
            </Auth>
          }
        />

      </Routes>
    </>
  );
};

export default Path;
