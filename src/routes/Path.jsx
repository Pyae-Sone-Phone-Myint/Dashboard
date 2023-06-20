import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Navbar from "../components/Navbar/Navbar";

import RouteGuard from "./RouteGuard";
import Home from "./Home";
import Auth from "./Auth";
import NotFound from "../components/notFound/NotFound";


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

        <Route element={<NotFound/>}/>

      </Routes>
    </>
  );
};

export default Path;
