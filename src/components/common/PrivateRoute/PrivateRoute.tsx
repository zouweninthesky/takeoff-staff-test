import React, { FC } from "react";
import { Navigate } from "react-router";

import { useAppSelector } from "../../../app/hooks/redux";

const PrivateRoute: FC = ({ children }) => {
  const { loggedIn } = useAppSelector((state) => state.auth);

  return loggedIn ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
