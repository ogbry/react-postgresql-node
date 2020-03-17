import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookies from "js-cookie";
export default function PrivateRoutes({ component: Component }) {
  const token = cookies.get("token");
  return (
    <Route
      render={props =>
        token ? <Redirect to="/home-page" /> : <Component {...props} />
      }
    />
  );
}
