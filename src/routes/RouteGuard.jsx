import React from "react";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default RouteGuard;
