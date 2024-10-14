import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem("token");
  //   console.log("Component:", Component);
  return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
