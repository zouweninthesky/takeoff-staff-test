import React, { FC } from "react";
import { Navigate } from "react-router";

// import Auth from "../../../store/auth";

const auth = true;

const PrivateRoute: FC = ({ children }) => {
  return auth ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
