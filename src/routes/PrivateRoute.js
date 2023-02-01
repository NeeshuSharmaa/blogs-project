import React from "react";
import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { userContext } from "../App";

export default function PrivateRoute({ component: Component, ...rest }) {
  const loggedIn = useContext(userContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn ? <Component {...props} /> : <Navigate to="/" />;
      }}
    ></Route>
  );
}
