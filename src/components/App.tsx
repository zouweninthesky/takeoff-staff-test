import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/Login";
import PrivateRoute from "./common/PrivateRoute/PrivateRoute";
import Contacts from "./contacts/Contacts";
// import Game from "./Game/Game";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>
        } />
        <Route
        path="*"
        element={<Navigate to="/contacts" replace />}
    />
        
      </Routes>
    </>
  );
};

export default App;
