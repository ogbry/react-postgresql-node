import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookies from "js-cookie";
export default function PrivateRoutes({ component: Component }) {
  const token = cookies.get("token");
  return (
    <Route
      render={props => (token ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}
