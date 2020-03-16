import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Template from "../components/login/Template";
import Homepage from "../components/content/Homepage";
import PrivateRoutes from "./private_routes";
import PublicRoutes from "./public_routes";
export default function index() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes exact path="/" component={Template} />
        <PrivateRoutes path="/home-page" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}
