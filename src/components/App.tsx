import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./login/Login";
import Contacts from "./contacts/Contacts";
import PrivateRoute from "./common/PrivateRoute/PrivateRoute";
import Sprite from "../utils/Sprite";

const App = () => {
  return (
    <>
      <Sprite />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/contacts" replace />} />
      </Routes>
    </>
  );
};

export default App;
