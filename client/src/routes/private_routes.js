import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoutes({ component: Component }) {
  const token = localStorage.getItem("token");
  return (
    <Route
      render={props => (token ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}
