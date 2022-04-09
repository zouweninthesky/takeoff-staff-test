import React, { FC } from "react";
import { Navigate } from "react-router";

import { useAppSelector } from "../../../app/hooks/redux";

const PrivateRoute: FC = ({ children }) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
