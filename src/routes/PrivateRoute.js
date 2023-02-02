import React from "react";
import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { userContext } from "../App";

export default function PrivateRoute({ component: Component }) {
  const loggedIn = useContext(userContext);
  console.log(`inside private route loggedIn=${loggedIn}`);
  return loggedIn ? Component : <Navigate to="/" />;
}
