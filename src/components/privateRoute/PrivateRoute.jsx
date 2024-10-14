import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const token = localStorage.getItem("token");
  return token ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
