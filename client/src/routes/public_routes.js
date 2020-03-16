import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoutes({ component: Component }) {
  const token = localStorage.getItem("token");
  return (
    <Route
      render={props =>
        token ? <Redirect to="/home-page" /> : <Component {...props} />
      }
    />
  );
}
